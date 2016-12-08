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


  constructor(
    private route: ActivatedRoute,
    private practiceService: PracticeService
  ) {
    super();
    this.practice_name = 'correspondingSymbol';
  }


  ngOnInit() {
    this.route.data
      .subscribe(params => {
        this.kana = params['kana'];
        this.other_kana = this.kana == 'hiragana' ? 'katakana' : 'hiragana';

        this.progress = this.practiceService.getData(this.practice_name, this.kana);

        this.updateOptions();
      });
  }


  updateOptions() {
    let filtered = this.table
      .filter(syllable => this.progress[syllable.id] != this.progress_max
        && (typeof syllable.isYouon == 'undefined' || syllable.isYouon == this.flag_youon)
        && (typeof syllable.isDiacritic == 'undefined' || syllable.isDiacritic == this.flag_diacritic));

    if (filtered.length == 0) {
      console.log('всё выучено');
      // TODO
      this.is_all_studied = true;
      return;
    }
    else if (filtered.length <= 3) {
      // CHECK
      let additional_filtered = this.table
        .filter(syllable => !filtered.includes(syllable))
        .nRandomElements(4 - filtered.length);
      this.right_option = filtered[0];
      filtered.push(...additional_filtered);
      filtered.shuffle();
      this.proposed_options = filtered.slice(0, 4);  // TODO
      return;
    }

    this.proposed_options = filtered.nRandomElements(4);
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
    this.previous_syllable = this.right_option;
    this.updateOptions();

    this.practiceService.setData(this.practice_name, this.kana, this.progress);
  }


  skip() {
    this.checkChoice(null);
  }
}
