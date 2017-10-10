import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Practice } from '../practice';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-similiar-signs',
  templateUrl: './similiar-signs.component.html',
  styleUrls: ['./similiar-signs.component.css'],
  providers: [PracticeService]
})
export class SimilarSignsComponent extends Practice implements OnInit {
  readonly similar_signs_ids = {
    hiragana:
      [0, 1, 9, 11, 12, 13, 18, 19, 24, 25, 26, 27, 28, 29, 33, 34, 37, 38, 39, 40, 41, 42, 43, 44],
    katakana:
      [0, 1, 2, 4, 5, 6, 8, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 31, 34, 36, 37, 38, 39, 40, 41, 44, 45]
  };

  constructor(
    protected route: ActivatedRoute,
    protected practiceService: PracticeService,
  ) {
    super(route, practiceService);
    this.practice_name = 'similarSigns';
  }

  ngOnInit() {
    this.route.data
      .subscribe(params => {
        this.kana = params['kana'];
        this.other_kana = this.kana === 'hiragana' ? 'katakana' : 'hiragana';

        const practice_data = this.practiceService.getData(this.practice_name);
        this.progress = practice_data[this.kana];

        this.updateOptions();
      });
  }


  filterOptions() {
    return this.table
      .filter(syllable =>
        this.similar_signs_ids[this.kana].includes(syllable.id)
        && (this.progress[syllable.id] < this.progress_max || typeof this.progress[syllable.id] === 'undefined')
      );
  }


  filterOptions_add(filtered) {
    return this.table
          .filter(syllable =>
            this.similar_signs_ids[this.kana].includes(syllable.id)
            && !filtered.includes(syllable))
          .nRandomElements(4 - filtered.length);
  }
}
