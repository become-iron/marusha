import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TableOfKana, Syllable } from "../syllabary";
import { PracticeService } from "../practice.service";

@Component({
  selector: 'app-similiar-signs',
  templateUrl: './similiar-signs.component.html',
  styleUrls: ['./similiar-signs.component.css'],
  providers: [PracticeService]
})
export class SimiliarSignsComponent extends TableOfKana implements OnInit {
  // TODO делать что-то с таблицей?
  right_option: Syllable;
  proposed_options: Syllable[];
  is_right_previous_choice: boolean;
  previous_syllable: Syllable;

  show_syllable_detail: boolean = false;
  show_progress_table: boolean = false;

  similar_signs_ids = {
    hiragana: [0, 1, 9, 11, 12, 13, 18, 19, 24, 25, 26, 27, 28, 29, 33, 34, 37, 38, 39, 40, 41, 42, 43, 44],
    katakana: [0, 1, 2, 4, 5, 6, 8, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 31, 34, 36, 37, 38, 39, 40, 41, 44, 45]
  };


  constructor(
    private route: ActivatedRoute,
    private practiceService: PracticeService
  ) {
    super();
    this.practice_name = 'similarSigns';
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
      .filter(syllable =>
        this.similar_signs_ids[this.kana].includes(syllable.id)
        && (this.progress[syllable.id] <= this.progress_max || typeof this.progress[syllable.id] == 'undefined'));

    if (filtered.length == 0) {
      console.log('всё выучено');
      // TODO
      this.is_all_studied = true;
      return;
    }
    else if (filtered.length <= 3) {
      // CHECK
      let additional_filtered = this.table
        .filter(syllable =>
          this.similar_signs_ids[this.kana].includes(syllable.id)
          && !filtered.includes(syllable))
        .nRandomElements(4 - filtered.length);
      this.right_option = filtered[0];
      filtered.push(...additional_filtered);
      filtered.shuffle();
      this.proposed_options = filtered.slice(0, 4);  // TODO
      return;
    }

    filtered.shuffle();
    this.proposed_options = filtered.slice(0, 4);
    this.right_option = this.proposed_options.randomElement();
  }


  checkChoice(syllable: Syllable) {
    if (syllable == this.right_option) {
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
