import * as _ from 'underscore';

import {TableOfKana, Syllable} from './syllabary';


export abstract class Practice extends TableOfKana {
  practice_name: string;

  right_option?: Syllable;
  proposed_options?: Syllable[];

  is_right_previous_choice?: boolean;
  previous_right_option?: Syllable;
  previous_syllables: Syllable[] = [];

  flag_diacritic?: boolean;
  flag_youon?: boolean;

  progress: any;  // {id: progress}
  progress_max = 4;
  progress_min = -4;

  // функции для отбора слогов
  filterOptions?(): Syllable[];
  filterOptions_add?(filtered: Syllable[]): Syllable[];

  constructor(
    protected route,
    protected practiceService,
  ) {
    super();
  }


  updateOptions(): void {

    let filtered = this.filterOptions();

    if (filtered.length === 0) {
      const _filtered = this.table
        .filter(syllable =>
          (typeof syllable.isYouon === 'undefined' || syllable.isYouon === this.flag_youon)
          && (typeof syllable.isDiacritic === 'undefined' || syllable.isDiacritic === this.flag_diacritic));
      this.proposed_options = _.sample<Syllable>(_filtered, 4);
      this.right_option = _.sample<Syllable>(this.proposed_options);
      return;
    } else if (filtered.length <= 3) {
      // CHECK
      const additional_filtered = this.filterOptions_add(filtered);
      this.right_option = filtered[0];
      filtered.push(...additional_filtered);
      filtered = _.shuffle<Syllable>(filtered);
      this.proposed_options = filtered.slice(0, 4);  // TODO
      return;
    }

    // отбор предлагаемых ответов с учётом предыдущего символа
    filtered = _.shuffle<Syllable>(filtered);
    this.proposed_options = filtered.slice(0, 4);
    this.right_option = this.proposed_options[0];
    if (this.right_option === this.previous_right_option) {
      this.right_option = this.proposed_options[1];
    }
    this.proposed_options = _.shuffle<Syllable>(this.proposed_options);
  }


  checkChoice(syllable: Syllable): void {
    if (syllable === this.right_option) {
      this.is_right_previous_choice = true;
      const id = this.right_option.id;
      this.progress[id] = typeof this.progress[id] !== 'undefined' ? this.progress[id] + 1 : 1;
    } else {
      this.is_right_previous_choice = false;
      const id = this.right_option.id;
      if (typeof this.progress[id] === 'undefined') {
        this.progress[id] = -1;
      } else if (this.progress[id] > this.progress_min) {
        this.progress[id]--;
      }
    }
    this.previous_syllables.unshift(this.right_option);
    this.previous_syllables = this.previous_syllables.slice(0, 10);
    this.previous_right_option = this.right_option;

    this.updateOptions();

    this.practiceService.setData(this.practice_name, this.kana, this.progress);
  }

  skip(): void {
    this.checkChoice(null);
  }

  setSettings(key: string): void {
    this.practiceService.setData(this.practice_name, key, this[key]);
  }

  showSyllableDetail(syllable: Syllable) {
    if (syllable != null) {
      this.syllable_to_detail = syllable;
      this.show_syllable_detail = true;
    }
  }
}
