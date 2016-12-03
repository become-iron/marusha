import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TableOfKana, hiragana, katakana } from '../syllabary'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends TableOfKana implements OnInit{
  kana: string;

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
          this.table = hiragana
        }
        else if (params['kana'] === 'katakana') {
          this.kana = 'katakana';
          this.table = katakana
        }
        else {
          // TODO обдумать
          // this.table = hiragana;
          this.router.navigate(['/about']);
        }
      });
  }

  gotoTableItemDetail(row: string, column: string) {
    let item = this.getItem(row, column);
    if (typeof item == 'undefined') {return;}  // если пустая ячейка
    let url = '/table/' + this.kana + '/' + item.sign;
    this.router.navigate([url]);
  }
}
