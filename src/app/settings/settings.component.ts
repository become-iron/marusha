import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  kana_font_family: string;  // TODO

  constructor() { }

  ngOnInit() {
  }

  clearHistory() {
    localStorage.clear();
    console.log('История очищена');
  }
}
