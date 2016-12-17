import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TableOfKana } from '../syllabary'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends TableOfKana implements OnInit{

  constructor(
    private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(params => this.kana = params['kana']);
    this.other_kana = this.kana == 'hiragana' ? 'katakana' : 'hiragana';
  }

  showSyllableDetail(row: string, column: string) {
    let _ = this.getItem(row, column);
    if (_ != null) {
      this.syllable_to_detail = _;
      this.show_syllable_detail = true;
    }
  }
}
