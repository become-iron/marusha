import { Component, OnInit } from '@angular/core';

import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [PracticeService]
})
export class AppComponent implements OnInit {
  constructor(
    protected practiceService: PracticeService
  ) {}

  ngOnInit() {
    this.setupFont();
  }

  setupFont() {
    // смена шрифта
    const fontName = this.practiceService.getData('settings', 'font');

    if (fontName != null && fontName !== '') {
      const cssId = 'kana-font';

      const head = document.getElementsByTagName('head')[0];
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = `./assets/css/toggle-fonts/${fontName}.css`;
      link.media = 'all';
      head.appendChild(link);
    }
  }
}
