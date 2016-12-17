import { Component, OnInit } from '@angular/core';

import { PracticeService } from "../practice.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [PracticeService]
})
export class AppComponent implements OnInit{
  constructor(
    protected practiceService: PracticeService
  ) {}

  ngOnInit() {
    let font = this.practiceService.app_data.settings.font;

    if (font != null) {
      let cssId = 'kana-font';
      let head = document.getElementsByTagName('head')[0];
      let link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = `../../assets/css/toggle-fonts/${font}.css`;
      link.media = 'all';
      head.appendChild(link);
    }
  }
}
