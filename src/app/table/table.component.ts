import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TableOfKana } from '../syllabary'

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
    this.route.params
      .forEach((params: Params) => {
        if (params['kana'] === 'hiragana') {
          this.kana = 'hiragana';
        }
        else if (params['kana'] === 'katakana') {
          this.kana = 'katakana';
        }
        else {
          // TODO обдумать: перенапрявлять на главную, или открывать хирагану, или 404
          // this.table = hiragana;
          this.router.navigate(['/about']);
        }
      });
  }

  gotoTableItemDetail(row: string, column: string) {
    let item = this.getItem(row, column);
    if (typeof item == 'undefined') {return;}  // если пустая ячейка
    let url = `/table/${this.kana}/${item[this.kana]}`;
    this.router.navigate([url]);
  }
}
