import { Component, Input } from '@angular/core';
import { TableOfKana, Syllable } from '../syllabary';
import { getWordsBySign, getPhrasesBySign, JapaneseWordOrPhrase } from  '../japaneseWordsAndPhrases';

@Component({
  selector: 'app-table-item-detail',
  templateUrl: './table-item-detail.component.html',
  styleUrls: ['./table-item-detail.component.css']
})
export class TableItemDetailComponent extends TableOfKana {
  @Input() kana: string;
  @Input() syllable = <Syllable>null;  // TEMP

  constructor() {
    super();
  }

  getWords(): JapaneseWordOrPhrase[] {
    // TODO ограничения на количество слов
    return getWordsBySign(this.kana, this.syllable[this.kana]);
  }

  getPhrases() {
    return getPhrasesBySign(this.kana, this.syllable[this.kana]);
  }
}
