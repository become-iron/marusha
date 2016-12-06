import {Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {TableOfKana, SyllabaryItem} from '../syllabary'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends TableOfKana implements OnInit{
  kana: string;
  syllable_to_detail: SyllabaryItem;

  constructor(
    private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(params => this.kana = params['kana']);
  }

  showSyllableDetail(row: string, column: string) {
    this.syllable_to_detail = this.getItem(row, column);
  }
}
