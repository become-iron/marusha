import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TableOfKana, Syllable } from '../syllabary'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends TableOfKana implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    super();
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(params => this.kana = params['kana']);
    this.other_kana = this.kana == 'hiragana' ? 'katakana' : 'hiragana';
  }

  toggleKana() {
    this.router.navigate([`/table/${this.other_kana}`]);
  }

  showSyllableDetail(row: string, column: string) {
    let _ = this.getItem(row, column);
    if (_ != null) {
      this.syllable_to_detail = _;
      this.show_syllable_detail = true;
    }
  }
}
