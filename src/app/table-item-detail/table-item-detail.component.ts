import { Component, Input } from '@angular/core';
import { TableOfKana, SyllabaryItem } from '../syllabary';
import { getWordsBySign, JapaneseWord } from  '../japaneseWordsAndPhrases';

@Component({
  selector: 'app-table-item-detail',
  templateUrl: './table-item-detail.component.html',
  styleUrls: ['./table-item-detail.component.css']
})
export class TableItemDetailComponent extends TableOfKana {
  @Input() kana: string;
  @Input() syllable = <SyllabaryItem>null;  // TEMP
  constructor() {
    super();
  }

  getWords(): JapaneseWord[] {
    // TODO ограничения на количество слов
    return getWordsBySign(this.kana, this.syllable[this.kana]);
  }

  getPhrases() {
    // TODO
  }

  hideSyllableDetail() {
    this.syllable = null;
  }
}
