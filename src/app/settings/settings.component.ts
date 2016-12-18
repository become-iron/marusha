import { Component, OnInit } from '@angular/core';

import { PracticeService } from "../practice.service";
import { phrases } from "../japaneseWordsAndPhrases";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [PracticeService]
})
export class SettingsComponent implements OnInit {
  fonts: {text: string, name: string}[] = [
    {text: 'печатный', name: ''},  // по умолчанию
    {text: 'курсивный', name: 'Honoka_Antique-Maru'},
    {text: 'рукописный (гёсё, gyosho)', name: 'HakusyuGyosyo'},
  ];
  chosen_font: string;
  example_phrase: string;

  constructor(
    protected practiceService: PracticeService
  ) {}

  ngOnInit() {
    // получить случайную фразу для примера отображения шрифта
    let phrase = phrases.randomElement();
    this.example_phrase = typeof phrase.hiragana != 'undefined' ? phrase.hiragana : phrase.katakana;

    // получить настройки шрифта
    let fontName = this.practiceService.app_data.settings.font;
    if (fontName == null) {
      this.chosen_font = this.fonts[0].text;
    }
    else {
      this.chosen_font = this.fonts.find(font => font.name == fontName).text;
    }
  }

  changeFont(fontText: string) {
    // TODO обдумать критические ситуации
    if (fontText == null) {return;}

    let cssId = 'kana-font';
    let cssIdElem = document.getElementById(cssId);
    let fontName = this.fonts.find(font => font.text == fontText).name;


    if (fontName == '') {
      if (cssIdElem) {
        cssIdElem.remove();
      }
      this.practiceService.setData('settings', 'font', this.fonts[0].name);
    }

    else {
      if (cssIdElem) {
        cssIdElem.setAttribute('href', `./assets/css/toggle-fonts/${fontName}.css`);
      }
      else {
        let head = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = `./assets/css/toggle-fonts/${fontName}.css`;  // TODO
        link.media = 'all';
        head.appendChild(link);
      }

      this.practiceService.setData('settings', 'font', fontName);
    }
  }

  clearHistory() {
    localStorage.clear();
    console.log('История очищена');
  }
}
