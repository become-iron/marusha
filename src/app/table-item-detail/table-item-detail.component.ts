import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { SyllabaryItem, hiragana, katakana } from '../syllabary';
import { getWordsBySign } from  '../japaneseWordsAndPhrases';

@Component({
  selector: 'app-table-item-detail',
  templateUrl: './table-item-detail.component.html',
  styleUrls: ['./table-item-detail.component.css']
})
export class TableItemDetailComponent implements OnInit {
  kana: string;
  item: SyllabaryItem;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) {
  }

  ngOnInit() {
    this.route.params
      .forEach((params: Params) => {
        if (params['kana'] == 'hiragana') {
          this.kana = 'hiragana';
          let sign = params['sign'];
          this.item = hiragana.find(item => item.sign == sign);
        }
        else if (params['kana'] == 'katakana') {
          this.kana = 'katakana';
          let sign = params['sign'];
          this.item = katakana.find(item => item.sign == sign)
        }
        else {
          // TODO
        }
      });
  }

  // TODO костыль какой-то
  getWords(kana: string, sign: string) {
    return getWordsBySign(kana, sign)
  }

  goBack(): void {
    this.location.back();
  }
}
