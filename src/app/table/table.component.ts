import {Component, OnInit, Input} from '@angular/core';
import { TableOfKana } from '../syllabary'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends TableOfKana implements OnInit{
  getItemSign(row: string, column:string) {
    let _ = this.table.filter(obj => obj.row === row && obj.column === column);
    return _.length > 0 ? _[0].sign : '';
  }

  ngOnInit() {
  }

}
