import {Component, OnInit, Input} from '@angular/core';
import {TableOfKana} from "../syllabary";

@Component({
  selector: 'app-progress-table',
  templateUrl: './progress-table.component.html',
  styleUrls: ['./progress-table.component.css']
})
export class ProgressTableComponent extends TableOfKana implements OnInit {
  @Input() kana: string;
  @Input() progress: any;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  getProgressStyle(row, column): any {
    let syllable = this.getItem(row, column);
    if (typeof syllable == 'undefined') {
      return {'progress0': true};
    }
    let syllable_progress = this.progress[syllable.id];
    let style = {
      'progress4': syllable_progress >= 4,
      'progress3': syllable_progress == 3,
      'progress2': syllable_progress == 2,
      'progress1': syllable_progress == 1,
      'progress0': syllable_progress == 0,
      'progress1m': syllable_progress == -1,
      'progress2m': syllable_progress == -2,
      'progress3m': syllable_progress == -3,
      'progress4m': syllable_progress <= -4,
    };
    return style;
  }
}
