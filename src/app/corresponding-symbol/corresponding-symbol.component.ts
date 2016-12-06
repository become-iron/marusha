import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TableOfKana, Syllable } from '../syllabary';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-corresponding-symbol',
  templateUrl: './corresponding-symbol.component.html',
  styleUrls: ['./corresponding-symbol.component.css'],
  providers: [PracticeService]
})
export class CorrespondingSymbolComponent extends TableOfKana implements OnInit {
  right_option: Syllable;
  proposed_options: Syllable[];
  is_right_previous_choice: boolean;
  previous_syllable: Syllable;

  flag_diacritic: boolean = true;
  flag_youon: boolean = true;

  show_syllable_detail: boolean = false;
  show_progress_table: boolean = false;
  // TODO доработать сохранение прогресса
  // TODO разобраться: обновление view при переключении каны
  // TODO рефакторинг

  constructor(
    private route: ActivatedRoute,
    private practiceService: PracticeService
  ) {
    super();
  }

  ngOnInit() {
    this.route.data
      .subscribe(params => {
        this.kana = params['kana'];
        this.other_kana = this.kana == 'hiragana' ? 'katakana' : 'hiragana';

        // TODO
        this.progress = this.practiceService.getCorrespondingSymbolData(this.kana);
        // this.flag_diacritic = this.practiceService.getCorrespondingSymbolData('flag_diacritic');
        // this.flag_youon = this.practiceService.getCorrespondingSymbolData('flag_youon');

        this.updateOptions();
      });
  }

  updateOptions() {
    let _ = this.table
      .filter(syllable => this.progress[syllable.id] != this.progress_max
        && (typeof syllable.isYouon == 'undefined' || syllable.isYouon == this.flag_youon)
        && (typeof syllable.isDiacritic == 'undefined' || syllable.isDiacritic == this.flag_diacritic))
    if (_.length == 0) {
      this.is_all_studied = true;
    }
    else if (_.length <= 3) {
      // CHECK TODO возможно нахождение двух одинаковых символов в массиве
      _.push(...this.table.nRandomElements(4-_.length))
    }
    this.proposed_options =_.nRandomElements(4);
    this.right_option = this.proposed_options.randomElement();
  }

  checkChoice(syllable: Syllable) {
    if (syllable === this.right_option) {
      this.is_right_previous_choice = true;
      let id = this.right_option.id;
      this.progress[id] = typeof this.progress[id] != 'undefined' ? this.progress[id] + 1 : 1;
    }
    else {
      this.is_right_previous_choice = false;
      let id = this.right_option.id;
      if (typeof this.progress[id] == 'undefined') {
        this.progress[id] = -1;
      }
      else if (this.progress[id] != this.progress_min) {
        this.progress[id]--;
      }
    }
    // TODO сохранение результатов
    this.practiceService.setCorrespondingSymbolData(this.kana, this.progress);
    // this.practiceService.setCorrespondingSymbolData('flag_diacritic', this.flag_diacritic);
    // this.practiceService.setCorrespondingSymbolData('flag_youon', this.flag_youon);

    this.previous_syllable = this.right_option;
    this.updateOptions();
  }

  skip() {
    this.checkChoice(null);
  }
}
