import { Injectable } from '@angular/core';

@Injectable()
export class PracticeService {
  app_data = {
    signToTranscription: {
      hiragana: {},
      katakana: {},
      settings: {}
    },

    transcriptionToSign: {
      hiragana: {},
      katakana: {},
      settings: {}
    },

    correspondingSymbol:  {
      hiragana: {},
      katakana: {},
      settings: {}
    },

    similarSigns: {
      hiragana: {},
      katakana: {},
      settings: {}
    },

    settings: {}
  };

  // TODO доделать работу с localstorage
  // TODO sessionstorage?
  constructor() {
    if (typeof localStorage['app_data'] != 'undefined') {
      this['app_data'] = JSON.parse(localStorage['app_data']);
    }
  }

  getData(practice: string, key: string): any {
    return this.app_data[practice][key];
  }

  setData(practice: string, key: string, data: any): void {
    this.app_data[practice][key] = data;
    localStorage['app_data'] = JSON.stringify(this.app_data);
  }
}
