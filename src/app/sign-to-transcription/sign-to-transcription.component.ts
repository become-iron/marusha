import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {TableOfKana, Syllable} from "../syllabary";
import {PracticeService} from "../practice.service";

@Component({
  selector: 'app-sign-to-transcription',
  templateUrl: './sign-to-transcription.component.html',
  styleUrls: ['./sign-to-transcription.component.css'],
  providers: [PracticeService]
})
export class SignToTranscriptionComponent extends TableOfKana implements OnInit {
  current_syllable: Syllable;
  is_right_previous_answer: boolean;
  previous_syllable: Syllable;


  flag_diacritic: boolean = true;
  flag_youon: boolean = true;

  transcription_field: string;

  show_syllable_detail: boolean = false;
  show_progress_table: boolean = false;

  was_mistake: boolean = false;

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
        this.progress = this.practiceService.getSignToTranscriptionData(this.kana);
        // this.flag_diacritic = this.practiceService.getCorrespondingSymbolData('flag_diacritic');
        // this.flag_youon = this.practiceService.getCorrespondingSymbolData('flag_youon');

        this.getTask();
      });
  }


  getTask() {
    let _ = this.table
      .filter(syllable => this.progress[syllable.id] != this.progress_max
        && (typeof syllable.isYouon == 'undefined' || syllable.isYouon == this.flag_youon)
        && (typeof syllable.isDiacritic == 'undefined' || syllable.isDiacritic == this.flag_diacritic))
      .slice(0, 8);
    if (_.length == 0) {
      this.is_all_studied = true;
    }
    else if (_.length <= 3) {
      // CHECK TODO возможно нахождение двух одинаковых символов в массиве
      _.push(...this.table.nRandomElements(4-_.length))
    }
    _.shuffle();
    this.current_syllable = _[0];
  }

  checkAnswer() {
    if (this.transcription_field == this.current_syllable.transcription) {
      if (this.was_mistake) {
        if (typeof this.progress[this.current_syllable.id] == 'undefined') {
          this.progress[this.current_syllable.id] = -1;
        }
        else if (this.progress[this.current_syllable.id] != this.progress_min) {
          this.progress[this.current_syllable.id]--;
        }
        this.is_right_previous_answer = false;
      }
      else {
        if (typeof this.progress[this.current_syllable.id] == 'undefined') {
          this.progress[this.current_syllable.id] = 1;
        }
        else {
          this.progress[this.current_syllable.id]++;
        }
        this.is_right_previous_answer = true;
      }
      this.was_mistake = false;
      this.previous_syllable = this.current_syllable;
      this.transcription_field = null;
      this.getTask();

      // TODO сохранение результатов
      this.practiceService.setSignToTranscriptionData(this.kana, this.progress);
    }
    else if (this.current_syllable.transcription.includes(this.transcription_field)) {
      // TODO
    }
    else {
      this.was_mistake = true;
      // TODO
    }
  }

  skip() {
    if (typeof this.progress[this.current_syllable.id] == 'undefined') {
      this.progress[this.current_syllable.id] = -1;
    }
    else if (this.progress[this.current_syllable.id] != this.progress_min) {
      this.progress[this.current_syllable.id]--;
    }
    this.is_right_previous_answer = false;
    this.previous_syllable = this.current_syllable;
    this.transcription_field = null;
    this.getTask();
  }
}
