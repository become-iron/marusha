import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';

import { PracticeService } from '../practice.service';
import { Practice } from '../practice';
import { Syllable } from '../syllabary';

@Component({
  selector: 'app-corresponding-symbol',
  templateUrl: './corresponding-symbol.component.html',
  styleUrls: ['./corresponding-symbol.component.css'],
  providers: [PracticeService]
})
export class CorrespondingSymbolComponent extends Practice implements OnInit {
  constructor(
    protected route: ActivatedRoute,
    protected practiceService: PracticeService,
  ) {
    super(route, practiceService);
    this.practice_name = 'correspondingSymbol';
  }

  ngOnInit() {
    this.route.data
      .subscribe(params => {
        this.kana = params['kana'];
        this.other_kana = this.kana === 'hiragana' ? 'katakana' : 'hiragana';

        const practice_data = this.practiceService.getData(this.practice_name);
        this.progress = practice_data[this.kana];
        this.flag_diacritic = practice_data.flag_diacritic == null ? true : practice_data.flag_diacritic;
        this.flag_youon = practice_data.flag_youon  == null ? true : practice_data.flag_youon;

        this.updateOptions();
      });
  }

  filterOptions(): Syllable[] {
    return this.table
      .filter(syllable =>
        (this.progress[syllable.id] < this.progress_max || typeof this.progress[syllable.id] === 'undefined')
        && (typeof syllable.isYouon === 'undefined' || syllable.isYouon === this.flag_youon)
        && (typeof syllable.isDiacritic === 'undefined' || syllable.isDiacritic === this.flag_diacritic)
      );
  }

  filterOptions_add(filtered: Syllable[]): Syllable[] {
    filtered = this.table
      .filter(syllable => !filtered.includes(syllable));
    return _.sample<Syllable>(filtered, 4 - filtered.length);
  }
}
