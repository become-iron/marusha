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

  flag_diacritic: boolean;
  flag_youon: boolean;

  transcription_field: string;
  transcription_field_style: any;

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

        let practice_data = this.practiceService.getData(this.practice_name);
        this.progress = practice_data[this.kana];
        this.flag_diacritic = practice_data.flag_diacritic == null ? true : practice_data.flag_diacritic;
        this.flag_youon = practice_data.flag_youon  == null ? true : practice_data.flag_youon;

        this.getTask();
      });
  }


  getTask(): void {
    let filtered = this.table
      .filter(syllable =>
        (this.progress[syllable.id] < this.progress_max || typeof this.progress[syllable.id] == 'undefined')
        && (typeof syllable.isYouon == 'undefined' || syllable.isYouon == this.flag_youon)
        && (typeof syllable.isDiacritic == 'undefined' || syllable.isDiacritic == this.flag_diacritic))
      .slice(0, 5);

    if (filtered.length == 0) {
      console.log('всё выучено');
      // TODO
      this.is_all_studied = true;
      return;
    }

    // отбор предлагаемого ответа с учётом предыдущего символа
    filtered.shuffle();
    this.current_syllable = filtered[0];
    if (this.current_syllable == this.previous_syllable) {
      this.current_syllable = filtered[1];
    }
  }


  checkAnswer(value: string): void {
    if (value === '' || value == null) {
      this.transcription_field_style = {};
      return;
    }
    else if (value == this.current_syllable.transcription) {

      if (typeof this.progress[this.current_syllable.id] == 'undefined') {
        this.progress[this.current_syllable.id] = this.was_mistake ? -1 : 1;
      }
      else if (this.was_mistake && this.progress[this.current_syllable.id] > this.progress_min) {
        this.progress[this.current_syllable.id]--;
      }
      else {
        this.progress[this.current_syllable.id]++;
      }
      this.is_right_previous_answer = !this.was_mistake;

      this.was_mistake = false;
      this.previous_syllable = this.current_syllable;
      this.transcription_field = null;  // TODO
      this.getTask();

      this.transcription_field_style = {};

      this.practiceService.setData(this.practice_name, this.kana, this.progress);

    }
    else if (this.current_syllable.transcription.includes(value)) {
      this.transcription_field_style = {'form-control-success': true};
    }
    else {
      this.was_mistake = true;
      this.transcription_field_style = {'form-control-warning': true};
      // TODO изменение стиля поля
    }
  }


  skip(): void {
    // TODO костыль
    this.was_mistake = true;
    this.checkAnswer(this.current_syllable.transcription);
  }

  setSettings(key: string): void {
    this.practiceService.setData(this.practice_name, key, this[key]);
  }
}
