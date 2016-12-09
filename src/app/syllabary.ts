// TODO добавить английскую транскрипцию
// TODO две транскрипции для одного символа (напр., ке и кэ)
// TODO Дополнительные знаки каны для передачи отсутствующих в годзюоне звуков (https://ru.wikipedia.org/wiki/Катакана#.D0.9F.D0.BE.D0.BB.D0.BD.D0.B0.D1.8F_.D1.82.D0.B0.D0.B1.D0.BB.D0.B8.D1.86.D0.B0)

// элемент азбуки
export interface Syllable {
  readonly id: number,
  readonly hiragana?: string,  // символ хираганы
  readonly katakana: string,  // символ катаканы
  readonly transcription: string,
  readonly row: string,
  readonly column: string,
  readonly isDiacritic?: boolean, // с диакритиком (https://ru.wikipedia.org/wiki/Дакутэн и https://ru.wikipedia.org/wiki/Хандакутэн)
  readonly isYouon?: boolean,  // ёон (https://ru.wikipedia.org/wiki/Ёон)
}


export class TableOfKana {
  kana: string;
  other_kana?: string;

  readonly table: Syllable[] = [
    {id: 0,  hiragana: 'あ', katakana: 'ア', transcription: 'а',  row: '',  column: 'а'},
    {id: 1,  hiragana: 'い', katakana: 'イ', transcription: 'и',  row: '',  column: 'и'},
    {id: 2,  hiragana: 'う', katakana: 'ウ', transcription: 'у',  row: '',  column: 'у'},
    {id: 3,  hiragana: 'え', katakana: 'エ', transcription: 'э',  row: '',  column: 'э'},
    {id: 4,  hiragana: 'お', katakana: 'オ', transcription: 'о',  row: '',  column: 'о'},
    {id: 5,  hiragana: 'や', katakana: 'ヤ', transcription: 'я',  row: '',  column: 'я'},
    {id: 6,  hiragana: 'ゆ', katakana: 'ユ', transcription: 'ю',  row: '',  column: 'ю'},
    {id: 7,  hiragana: 'よ', katakana: 'ヨ', transcription: 'ё',  row: '',  column: 'ё'},

    {id: 8,  hiragana: 'か', katakana: 'カ', transcription: 'ка', row: 'к', column: 'а'},
    {id: 9,  hiragana: 'き', katakana: 'キ', transcription: 'ки', row: 'к', column: 'и'},
    {id: 10, hiragana: 'く', katakana: 'ク', transcription: 'ку', row: 'к', column: 'у'},
    {id: 11, hiragana: 'け', katakana: 'ケ', transcription: 'кэ', row: 'к', column: 'э'},
    {id: 12, hiragana: 'こ', katakana: 'コ', transcription: 'ко', row: 'к', column: 'о'},

    {id: 13, hiragana: 'さ', katakana: 'サ', transcription: 'са', row: 'с', column: 'а'},
    {id: 14, hiragana: 'し', katakana: 'シ', transcription: 'си', row: 'с', column: 'и'},
    {id: 15, hiragana: 'す', katakana: 'ス', transcription: 'су', row: 'с', column: 'у'},
    {id: 16, hiragana: 'せ', katakana: 'セ', transcription: 'сэ', row: 'с', column: 'э'},
    {id: 17, hiragana: 'そ', katakana: 'ソ', transcription: 'со', row: 'с', column: 'о'},

    {id: 18, hiragana: 'た', katakana: 'タ', transcription: 'та', row: 'т', column: 'а'},
    {id: 19, hiragana: 'ち', katakana: 'チ', transcription: 'ти', row: 'т', column: 'и'},
    {id: 20, hiragana: 'つ', katakana: 'ツ', transcription: 'цу', row: 'т', column: 'у'},
    {id: 21, hiragana: 'て', katakana: 'テ', transcription: 'тэ', row: 'т', column: 'э'},
    {id: 22, hiragana: 'と', katakana: 'ト', transcription: 'то', row: 'т', column: 'о'},

    {id: 23, hiragana: 'ん', katakana: 'ン', transcription: 'н',  row: 'н', column: ''},

    {id: 24, hiragana: 'な', katakana: 'ナ', transcription: 'на', row: 'н', column: 'а'},
    {id: 25, hiragana: 'に', katakana: 'ニ', transcription: 'ни', row: 'н', column: 'и'},
    {id: 26, hiragana: 'ぬ', katakana: 'ヌ', transcription: 'ну', row: 'н', column: 'у'},
    {id: 27, hiragana: 'ね', katakana: 'ネ', transcription: 'нэ', row: 'н', column: 'э'},
    {id: 28, hiragana: 'の', katakana: 'ノ', transcription: 'но', row: 'н', column: 'о'},

    {id: 29, hiragana: 'は', katakana: 'ハ', transcription: 'ха', row: 'х', column: 'а'},
    {id: 30, hiragana: 'ひ', katakana: 'ヒ', transcription: 'хи', row: 'х', column: 'и'},
    {id: 31, hiragana: 'ふ', katakana: 'フ', transcription: 'фу', row: 'х', column: 'у'},
    {id: 32, hiragana: 'へ', katakana: 'ヘ', transcription: 'хэ', row: 'х', column: 'э'},
    {id: 33, hiragana: 'ほ', katakana: 'ホ', transcription: 'хо', row: 'х', column: 'о'},

    {id: 34, hiragana: 'ま', katakana: 'マ', transcription: 'ма', row: 'м', column: 'а'},
    {id: 35, hiragana: 'み', katakana: 'ミ', transcription: 'ми', row: 'м', column: 'и'},
    {id: 36, hiragana: 'む', katakana: 'ム', transcription: 'му', row: 'м', column: 'у'},
    {id: 37, hiragana: 'め', katakana: 'メ', transcription: 'мэ', row: 'м', column: 'э'},
    {id: 38, hiragana: 'も', katakana: 'モ', transcription: 'мо', row: 'м', column: 'о'},

    {id: 39, hiragana: 'ら', katakana: 'ラ', transcription: 'ра', row: 'р', column: 'а'},
    {id: 40, hiragana: 'り', katakana: 'リ', transcription: 'ри', row: 'р', column: 'и'},
    {id: 41, hiragana: 'る', katakana: 'ル', transcription: 'ру', row: 'р', column: 'у'},
    {id: 42, hiragana: 'れ', katakana: 'レ', transcription: 'рэ', row: 'р', column: 'э'},
    {id: 43, hiragana: 'ろ', katakana: 'ロ', transcription: 'ро', row: 'р', column: 'о'},

    {id: 44, hiragana: 'わ', katakana: 'ワ', transcription: 'ва', row: 'в', column: 'а'},
    {id: 45, hiragana: 'を', katakana: 'ヲ', transcription: 'о',  row: 'в', column: 'о'},


    // диакритики
    {id: 46, hiragana: 'が', katakana: 'ガ', transcription: 'га', row: 'г', column: 'а', isDiacritic: true},
    {id: 47, hiragana: 'ぎ', katakana: 'ギ', transcription: 'ги', row: 'г', column: 'и', isDiacritic: true},
    {id: 48, hiragana: 'ぐ', katakana: 'グ', transcription: 'гу', row: 'г', column: 'у', isDiacritic: true},
    {id: 49, hiragana: 'げ', katakana: 'ゲ', transcription: 'гэ', row: 'г', column: 'э', isDiacritic: true},
    {id: 50, hiragana: 'ご', katakana: 'ゴ', transcription: 'го', row: 'г', column: 'о', isDiacritic: true},

    {id: 51, hiragana: 'ざ', katakana: 'ザ', transcription: 'дза', row: 'дз', column: 'а', isDiacritic: true},
    {id: 52, hiragana: 'じ', katakana: 'ジ', transcription: 'дзи', row: 'дз', column: 'и', isDiacritic: true},
    {id: 53, hiragana: 'ず', katakana: 'ズ', transcription: 'дзу', row: 'дз', column: 'у', isDiacritic: true},
    {id: 54, hiragana: 'ぜ', katakana: 'ゼ', transcription: 'дзэ', row: 'дз', column: 'э', isDiacritic: true},
    {id: 55, hiragana: 'ぞ', katakana: 'ゾ', transcription: 'дзо', row: 'дз', column: 'о', isDiacritic: true},

    {id: 56, hiragana: 'だ', katakana: 'ダ', transcription: 'да', row: 'д', column: 'а', isDiacritic: true},
    {id: 57, hiragana: 'ぢ', katakana: 'ヂ', transcription: 'дзи', row: 'д', column: 'и', isDiacritic: true},
    {id: 58, hiragana: 'づ', katakana: 'ヅ', transcription: 'дзу', row: 'д', column: 'у', isDiacritic: true},
    {id: 59, hiragana: 'で', katakana: 'デ', transcription: 'дэ', row: 'д', column: 'э', isDiacritic: true},
    {id: 60, hiragana: 'ど', katakana: 'ド', transcription: 'до', row: 'д', column: 'о', isDiacritic: true},

    {id: 61, hiragana: 'ば', katakana: 'バ', transcription: 'ба', row: 'б', column: 'а', isDiacritic: true},
    {id: 62, hiragana: 'び', katakana: 'ビ', transcription: 'би', row: 'б', column: 'и', isDiacritic: true},
    {id: 63, hiragana: 'ぶ', katakana: 'ブ', transcription: 'бу', row: 'б', column: 'у', isDiacritic: true},
    {id: 64, hiragana: 'べ', katakana: 'ベ', transcription: 'бэ', row: 'б', column: 'э', isDiacritic: true},
    {id: 65, hiragana: 'ぼ', katakana: 'ボ', transcription: 'бо', row: 'б', column: 'о', isDiacritic: true},

    {id: 66, hiragana: 'ぱ', katakana: 'パ', transcription: 'па', row: 'п', column: 'а', isDiacritic: true},
    {id: 67, hiragana: 'ぴ', katakana: 'ピ', transcription: 'пи', row: 'п', column: 'и', isDiacritic: true},
    {id: 68, hiragana: 'ぷ', katakana: 'プ', transcription: 'пу', row: 'п', column: 'у', isDiacritic: true},
    {id: 69, hiragana: 'ぺ', katakana: 'ペ', transcription: 'пэ', row: 'п', column: 'э', isDiacritic: true},
    {id: 70, hiragana: 'ぽ', katakana: 'ポ', transcription: 'по', row: 'п', column: 'о', isDiacritic: true},


    // йоны
    {id: 71, hiragana: 'きゃ', katakana: 'キャ', transcription: 'кя', row: 'к', column: 'я', isYouon: true},
    {id: 72, hiragana: 'きゅ', katakana: 'キュ', transcription: 'кю', row: 'к', column: 'ю', isYouon: true},
    {id: 73, hiragana: 'きょ', katakana: 'キョ', transcription: 'кё', row: 'к', column: 'ё', isYouon: true},

    {id: 74, hiragana: 'しゃ', katakana: 'シャ', transcription: 'ся', row: 'с', column: 'я', isYouon: true},
    {id: 75, hiragana: 'しゅ', katakana: 'シュ', transcription: 'сю', row: 'с', column: 'ю', isYouon: true},
    {id: 76, hiragana: 'しょ', katakana: 'ショ', transcription: 'сё', row: 'с', column: 'ё', isYouon: true},

    {id: 77, hiragana: 'ちゃ', katakana: 'チャ', transcription: 'тя', row: 'т', column: 'я', isYouon: true},
    {id: 78, hiragana: 'ちゅ', katakana: 'チュ', transcription: 'тю', row: 'т', column: 'ю', isYouon: true},
    {id: 79, hiragana: 'ちょ', katakana: 'チョ', transcription: 'тё', row: 'т', column: 'ё', isYouon: true},

    {id: 80, hiragana: 'にゃ', katakana: 'ニャ', transcription: 'ня', row: 'н', column: 'я', isYouon: true},
    {id: 81, hiragana: 'にゅ', katakana: 'ニュ', transcription: 'ню', row: 'н', column: 'ю', isYouon: true},
    {id: 82, hiragana: 'にょ', katakana: 'ニョ', transcription: 'нё', row: 'н', column: 'ё', isYouon: true},

    {id: 83, hiragana: 'ひゃ', katakana: 'ヒャ', transcription: 'хя', row: 'х', column: 'я', isYouon: true},
    {id: 84, hiragana: 'ひゅ', katakana: 'ヒュ', transcription: 'хю', row: 'х', column: 'ю', isYouon: true},
    {id: 85, hiragana: 'ひょ', katakana: 'ヒョ', transcription: 'хё', row: 'х', column: 'ё', isYouon: true},

    {id: 86, hiragana: 'みゃ', katakana: 'ミャ', transcription: 'мя', row: 'м', column: 'я', isYouon: true},
    {id: 87, hiragana: 'みゅ', katakana: 'ミュ', transcription: 'мю', row: 'м', column: 'ю', isYouon: true},
    {id: 88, hiragana: 'みょ', katakana: 'ミョ', transcription: 'мё', row: 'м', column: 'ё', isYouon: true},

    {id: 89, hiragana: 'りゃ', katakana: 'リャ', transcription: 'ря', row: 'р', column: 'я', isYouon: true},
    {id: 90, hiragana: 'りゅ', katakana: 'リュ', transcription: 'рю', row: 'р', column: 'ю', isYouon: true},
    {id: 91, hiragana: 'りょ', katakana: 'リョ', transcription: 'рё', row: 'р', column: 'ё', isYouon: true},


    // диакритики-йоны
    {id: 92, hiragana: 'ぎゃ', katakana: 'ギャ', transcription: 'гя', row: 'г', column: 'я', isDiacritic: true, isYouon: true},
    {id: 93, hiragana: 'ぎゅ', katakana: 'ギュ', transcription: 'гю', row: 'г', column: 'ю', isDiacritic: true, isYouon: true},
    {id: 94, hiragana: 'ぎょ', katakana: 'ギョ', transcription: 'гё', row: 'г', column: 'ё', isDiacritic: true, isYouon: true},
    {id: 95, hiragana: 'じゃ', katakana: 'ジャ', transcription: 'дзя', row: 'дз', column: 'я', isDiacritic: true, isYouon: true},
    {id: 96, hiragana: 'じゅ', katakana: 'ジュ', transcription: 'дзю', row: 'дз', column: 'ю', isDiacritic: true, isYouon: true},
    {id: 97, hiragana: 'じょ', katakana: 'ジョ', transcription: 'дзё', row: 'дз', column: 'ё', isDiacritic: true, isYouon: true},
    {id: 98, hiragana: 'ぢゃ', katakana: 'ヂャ', transcription: 'дзя', row: 'д', column: 'я', isDiacritic: true, isYouon: true},
    {id: 99, hiragana: 'ぢゅ', katakana: 'ヂュ', transcription: 'дзю', row: 'д', column: 'ю', isDiacritic: true, isYouon: true},
    {id: 100, hiragana: 'ぢょ', katakana: 'ヂョ', transcription: 'дзё', row: 'д', column: 'ё', isDiacritic: true, isYouon: true},
    {id: 101, hiragana: 'びゃ', katakana: 'ビャ', transcription: 'бя', row: 'б', column: 'я', isDiacritic: true, isYouon: true},
    {id: 102, hiragana: 'びゅ', katakana: 'ビュ', transcription: 'бю', row: 'б', column: 'ю', isDiacritic: true, isYouon: true},
    {id: 103, hiragana: 'びょ', katakana: 'ビョ', transcription: 'бё', row: 'б', column: 'ё', isDiacritic: true, isYouon: true},
    {id: 104, hiragana: 'ぴゃ', katakana: 'ピャ', transcription: 'пя', row: 'п', column: 'я', isDiacritic: true, isYouon: true},
    {id: 105, hiragana: 'ぴゅ', katakana: 'ピュ', transcription: 'пю', row: 'п', column: 'ю', isDiacritic: true, isYouon: true},
    {id: 106, hiragana: 'ぴょ', katakana: 'ピョ', transcription: 'пё', row: 'п', column: 'ё', isDiacritic: true, isYouon: true}
  ];
  readonly rows: string[] = ['', 'к', 'с', 'т', 'н', 'х', 'м', 'р', 'в', 'г', 'дз', 'д', 'б', 'п'];
  readonly columns: string[] = ['', 'а', 'и', 'у', 'э', 'о', 'я', 'ю', 'ё'];


  getItem(row: string, column:string): Syllable {
    return this.table.find(obj => obj.row === row && obj.column === column);
  }

  getItemSign(row: string, column:string): string {
    // возвращает знак слога согласному выбранной азбуке
    let item = this.getItem(row, column);
    return (typeof item != 'undefined') ? item[this.kana] : '';
  }

  getSyllableBySign(sign: string): Syllable {
    return this.table.find(obj => obj.hiragana == sign || obj.katakana == sign);
  }
}
