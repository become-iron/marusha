import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

import { PracticeService } from '../practice.service';
import { phrases, JapaneseWordOrPhrase } from '../japaneseWordsAndPhrases';

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
    const phrase = _.sample<JapaneseWordOrPhrase>(phrases);
    this.example_phrase = typeof phrase.hiragana !== 'undefined' ? phrase.hiragana : phrase.katakana;

    // получить настройки шрифта
    const fontName = this.practiceService.app_data.settings.font;
    if (fontName == null) {
      this.chosen_font = this.fonts[0].text;
    } else {
      this.chosen_font = this.fonts.find(font => font.name === fontName).text;
    }
  }

  changeFont(fontText: string): void {
    // TODO обдумать критические ситуации
    if (fontText === null) { return; }

    const cssId = 'kana-font';
    const cssIdElem = document.getElementById(cssId);
    const fontName = this.fonts.find(font => font.text === fontText).name;


    if (fontName === '') {
      if (cssIdElem) {
        cssIdElem.remove();
      }
      this.practiceService.setData('settings', 'font', this.fonts[0].name);
    } else {
      if (cssIdElem) {
        cssIdElem.setAttribute('href', `./assets/css/toggle-fonts/${fontName}.css`);
      } else {
        const head = document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
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

  clearHistory(): void {
    localStorage.clear();
    console.info('Marusha. История очищена');
  }
}
