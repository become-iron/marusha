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
    this.practice_name = 'signToTranscription';
  }


  ngOnInit() {
    this.route.data
      .subscribe(params => {
        this.kana = params['kana'];
        this.other_kana = this.kana == 'hiragana' ? 'katakana' : 'hiragana';

        this.progress = this.practiceService.getData(this.practice_name, this.kana);

        this.getTask();
      });
  }


  getTask() {
    let filtered = this.table
      .filter(syllable => this.progress[syllable.id] != this.progress_max
        && (typeof syllable.isYouon == 'undefined' || syllable.isYouon == this.flag_youon)
        && (typeof syllable.isDiacritic == 'undefined' || syllable.isDiacritic == this.flag_diacritic))
      .slice(0, 5);

    if (filtered.length == 0) {
      console.log('всё выучено');
      // TODO
      this.is_all_studied = true;
      return;
    }

    filtered.shuffle();
    this.current_syllable = filtered[0];
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

      this.practiceService.setData(this.practice_name, this.kana, this.progress);
    }
    else if (this.current_syllable.transcription.includes(this.transcription_field)) {
      // TODO изменение стиля поля
    }
    else {
      this.was_mistake = true;
      // TODO изменение стиля поля
    }
  }


  skip() {
    // TODO укоротить
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
