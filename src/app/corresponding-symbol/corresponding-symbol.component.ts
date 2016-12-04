import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TableOfKana, SyllabaryItem } from '../syllabary';

@Component({
  selector: 'app-corresponding-symbol',
  templateUrl: './corresponding-symbol.component.html',
  styleUrls: ['./corresponding-symbol.component.css']
})
export class CorrespondingSymbolComponent extends TableOfKana implements OnInit {
  other_kana: string;
  right_option: SyllabaryItem;
  proposed_options: SyllabaryItem[];
  is_right_previous_choice: boolean;
  previous_right_option: SyllabaryItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    super();
    this.progress_max = 2;
    this.progress_max = -2;
  }

  ngOnInit() {
    this.route.params
      .forEach((params: Params) => {
        if (params['kana'] === 'hiragana') {
          this.kana = 'hiragana';
          this.other_kana = 'katakana';
        }
        else if (params['kana'] === 'katakana') {
          this.kana = 'katakana';
          this.other_kana = 'hiragana';
        }
        else {
          // TODO обдумать: перенапрявлять на главную, или открывать хирагану, или 404
          // this.table = hiragana;
          this.router.navigate(['/about']);
        }
      });
    this.updateOptions();
  }

  updateOptions() {
    this.right_option = this.getRandomUnstudiedSyllable();
    this.proposed_options = this.get3RandomSyllables();
    this.proposed_options.push(this.right_option);
    this.proposed_options.shuffle();
    console.table(this.table.filter(obj => typeof obj.progress != 'undefined'));
  }

  increaseProgress() {
    this.right_option.progress = typeof this.right_option.progress != 'undefined' ? this.right_option.progress++ : 1;
  }

  reduceProgress() {
    this.right_option.progress = typeof this.right_option.progress != 'undefined' ? this.right_option.progress-- : -1;
  }

  get3RandomSyllables(): SyllabaryItem[] {
    return [this.table.randomElement(), this.table.randomElement(), this.table.randomElement()]
  }

  checkChoice(syllable: SyllabaryItem) {
    if (syllable === this.right_option) {
      this.is_right_previous_choice = true;
      this.increaseProgress();
    }
    else {
      this.is_right_previous_choice = false;
      this.reduceProgress();
    }
    this.previous_right_option = this.right_option;
    this.updateOptions();
  }

  skip() {
    this.reduceProgress();
    this.is_right_previous_choice = false;
    this.previous_right_option = this.right_option;
    this.updateOptions();
  }

  gotoTableItemDetail() {
    let url = `/table/${this.kana}/${this.right_option[this.kana]}`;
    this.router.navigate([url]);
  }

  gotoProgressTable() {
    // TODO сначала надо добавить сохранение прогресса
  }
}
