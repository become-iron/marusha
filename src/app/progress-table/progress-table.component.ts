import {Component, OnInit, Input} from '@angular/core';
import {TableOfKana} from "../syllabary";

@Component({
  selector: 'app-progress-table',
  templateUrl: './progress-table.component.html',
  styleUrls: ['./progress-table.component.css']
})
export class ProgressTableComponent extends TableOfKana implements OnInit {
  @Input() kana;
  @Input() progress;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  getProgressStyle(row, column, n) {
    // TODO оптимизировать
    let syllable = this.getItem(row, column);
    if (typeof syllable == 'undefined') {return false;}
    return this.progress[syllable.id] == n;
  }
}
