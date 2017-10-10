import { Injectable } from '@angular/core';

@Injectable()
export class PracticeService {
  app_data = {
    signToTranscription: {
      hiragana: {},
      katakana: {},
      flag_diacritic: null,
      flag_youon: null
    },

    transcriptionToSign: {
      hiragana: {},
      katakana: {},
      settings: {},
      flag_diacritic: null,
      flag_youon: null
    },

    correspondingSymbol:  {
      hiragana: {},
      katakana: {},
      settings: {},
      flag_diacritic: null,
      flag_youon: null
    },

    similarSigns: {
      hiragana: {},
      katakana: {},
      settings: {},
    },

    settings: {
      font: null
    }
  };

  // TODO sessionstorage?
  constructor() {
    if (typeof localStorage['app_data'] !== 'undefined') {
      this.app_data = JSON.parse(localStorage['app_data']);
    }
  }

  getData(practice: string, key?: string): any {
    return typeof key === 'undefined' ? this.app_data[practice] : this.app_data[practice][key];
  }

  setData(practice: string, key: string, data: any): void {
    this.app_data[practice][key] = data;
    localStorage['app_data'] = JSON.stringify(this.app_data);
  }
}
