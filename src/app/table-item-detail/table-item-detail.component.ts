import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { SyllabaryItem, TableOfKana } from '../syllabary';
import { getWordsBySign, WordOrPhrase } from  '../japaneseWordsAndPhrases';

@Component({
  selector: 'app-table-item-detail',
  templateUrl: './table-item-detail.component.html',
  styleUrls: ['./table-item-detail.component.css']
})
export class TableItemDetailComponent extends TableOfKana implements OnInit {
  item: SyllabaryItem;
  words: WordOrPhrase[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {
    super();
  }

  ngOnInit() {
    this.route.params
      .forEach((params: Params) => {
        this.kana = params['kana'];
        let sign = params['sign'];
        this.item = this.getSyllableBySign(sign);
        this.words = getWordsBySign(this.kana, sign);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
