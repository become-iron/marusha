import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { TableOfKana, hiragana, katakana } from '../syllabary'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends TableOfKana implements OnInit{
  constructor(
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.route.params
      .forEach((params: Params) => {
        params['kana'] === 'katakana' ? this.table = katakana : this.table = hiragana;
      });
  }

  getItemSign(row: string, column:string) {
    // TODO find
    let _ = this.table.filter(obj => obj.row === row && obj.column === column);
    return _.length > 0 ? _[0].sign : '';
  }
}
