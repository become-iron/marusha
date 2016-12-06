import { Injectable } from '@angular/core';

@Injectable()
export class PracticeService {
  correspondingSymbol =  {
    hiragana: {},
    katakana: {},
    settings: {}
  };

  signToTranscription = {
    hiragana: {},
    katakana: {},
    settings: {}
  };

  // TODO доделать работу с localstorage
  constructor() {
    if (typeof localStorage['correspondingSymbol'] != 'undefined') {
      this.correspondingSymbol = JSON.parse(localStorage['correspondingSymbol']);
    }
    if (typeof localStorage['signToTranscription'] != 'undefined') {
      this.signToTranscription = JSON.parse(localStorage['signToTranscription']);
    }
  }


  /*correspondingSymbol*/
  getCorrespondingSymbolData(kana: string) {
    // console.table(this.correspondingSymbolProgress);
    return this.correspondingSymbol[kana];
  }
  setCorrespondingSymbolData(key: string, data) {
    // console.table(this.correspondingSymbolProgress);
    this.correspondingSymbol[key] = data;
    localStorage['correspondingSymbol'] = JSON.stringify(this.correspondingSymbol);
  }


  /*signToTranscription*/
  getSignToTranscriptionData(kana: string) {
    return this.signToTranscription[kana];
  }
  setSignToTranscriptionData(key: string, data) {
    this.signToTranscription[key] = data;
    localStorage['signToTranscription'] = JSON.stringify(this.signToTranscription);
  }
}
