import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Practice } from "../practice";
import { PracticeService } from "../practice.service";

@Component({
  selector: 'app-transcription-to-sign',
  templateUrl: './transcription-to-sign.component.html',
  styleUrls: ['./transcription-to-sign.component.css'],
  providers: [PracticeService]
})
export class TranscriptionToSignComponent extends Practice implements OnInit {
  constructor(
    protected route: ActivatedRoute,
    protected practiceService: PracticeService,
  ) {
    super(route, practiceService);
    this.practice_name = 'transcriptionToSign';
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

        this.updateOptions();
      });
  }


  filterOptions() {
    return this.table
      .filter(syllable =>
      (this.progress[syllable.id] < this.progress_max || typeof this.progress[syllable.id] == 'undefined')
      && (typeof syllable.isYouon == 'undefined' || syllable.isYouon == this.flag_youon)
      && (typeof syllable.isDiacritic == 'undefined' || syllable.isDiacritic == this.flag_diacritic))
      .slice(0, 8)
  }


  filterOptions_add(filtered) {
    return this.table
      .filter(syllable => !filtered.includes(syllable))
      .nRandomElements(4 - filtered.length)
  }
}
