import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {TableOfKana, Syllable} from "../syllabary";
import {PracticeService} from "../practice.service";

@Component({
  selector: 'app-transcription-to-sign',
  templateUrl: './transcription-to-sign.component.html',
  styleUrls: ['./transcription-to-sign.component.css'],
  providers: [PracticeService]
})
export class TranscriptionToSignComponent extends TableOfKana implements OnInit {
  other_kana: string;

  progress: any;
  progress_max: number = 3;
  progress_min: number = -3;

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
  }

  ngOnInit() {
    this.route.data
      .subscribe(params => {
        this.kana = params['kana'];
        this.other_kana = this.kana == 'hiragana' ? 'katakana' : 'hiragana';

        // TODO
        this.progress = this.practiceService.getTranscriptionToSignData(this.kana);
        // this.flag_diacritic = this.practiceService.getTranscriptionToSignData('flag_diacritic');
        // this.flag_youon = this.practiceService.getTranscriptionToSignData('flag_youon');

        this.updateOptions();
      });
  }

  updateOptions() {
    // TODO optimize?
    let _ = this.table
      .filter(syllable => this.progress[syllable.id] != this.progress_max
      && (typeof syllable.isYouon == 'undefined' || syllable.isYouon == this.flag_youon)
      && (typeof syllable.isDiacritic == 'undefined' || syllable.isDiacritic == this.flag_diacritic))
      .slice(0, 8);
    // if (_.length == 0) {}  // TODO
    _.shuffle();
    this.proposed_options = _.slice(4);
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
    // TODO сохранение результатов
    this.practiceService.setTranscriptionToSignData(this.kana, this.progress);
    // this.practiceService.setTranscriptionToSignData('flag_diacritic', this.flag_diacritic);
    // this.practiceService.setTranscriptionToSignData('flag_youon', this.flag_youon);

    this.previous_syllable = this.right_option;
    this.updateOptions();
  }

  skip() {
    this.checkChoice(null);
  }
}
