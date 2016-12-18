import { Component, OnInit } from '@angular/core';
import { PracticeService } from "../practice.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [PracticeService]
})
export class SettingsComponent implements OnInit {
  fonts = [
    {text: 'печатный', value: ''},  // дефолтный
    {text: 'курсивный', value: 'Honoka_Antique-Maru'},
    {text: 'рукописный (гёсё, gyosho)', value: 'HakusyuGyosyo'},
  ];
  chosen_font: string;

  constructor(
    protected practiceService: PracticeService
  ) { }

  ngOnInit() {
    let fontName = this.practiceService.app_data.settings.font;
    console.log(fontName);
    if (fontName == null) {
      this.chosen_font = this.fonts[0].text;
    }
    else {
      console.log(this.fonts.find(font => font.value == fontName).text);
      this.chosen_font = this.fonts.find(font => font.value == fontName).text;
    }
  }

  clearHistory() {
    localStorage.clear();
    console.log('История очищена');
  }

  changeFont(fontFamily: string) {
    // TODO обдумать критические ситуации
    if (fontFamily == null) {return;}

    let cssId = 'kana-font';
    let font = this.fonts.find(font => font.text == fontFamily).value;

    if (font == '') {
      document.getElementById(cssId).remove();
      this.practiceService.setData('settings', 'font', this.fonts[0].value);
    }
    else {
      if (document.getElementById(cssId)) {
        document.getElementById(cssId).remove();
      }

      let head = document.getElementsByTagName('head')[0];
      let link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = `//become-iron.github.io/marusha/assets/css/toggle-fonts/${font}.css`;  // TODO
      link.media = 'all';
      head.appendChild(link);

      this.practiceService.setData('settings', 'font', font);
    }
  }


}
