// TODO добавить английскую транскрипцию
// TODO две транскрипции для одного символа (напр., ке и кэ)
// TODO Дополнительные знаки каны для передачи отсутствующих в годзюоне звуков (https://ru.wikipedia.org/wiki/Катакана#.D0.9F.D0.BE.D0.BB.D0.BD.D0.B0.D1.8F_.D1.82.D0.B0.D0.B1.D0.BB.D0.B8.D1.86.D0.B0)

// элемент азбуки
export interface SyllabaryItem {
  readonly hiragana: string,  // символ хираганы
  readonly katakana: string,  // символ катаканы
  readonly transcription: string,
  readonly row: string,
  readonly column: string,
  readonly isDakuten?: boolean, // дакутэн (https://ru.wikipedia.org/wiki/Дакутэн)
  readonly isYouon?: boolean,  // ёон (https://ru.wikipedia.org/wiki/Ёон)
  progress?: number
}


export class TableOfKana {
  kana: string;
  table: SyllabaryItem[] = [
    {hiragana: 'あ', katakana: 'ア', transcription: 'а', row: '', column: 'а'},
    {hiragana: 'い', katakana: 'イ', transcription: 'и', row: '', column: 'и'},
    {hiragana: 'う', katakana: 'ウ', transcription: 'у', row: '', column: 'у'},
    {hiragana: 'え', katakana: 'エ', transcription: 'э', row: '', column: 'э'},
    {hiragana: 'お', katakana: 'オ', transcription: 'о', row: '', column: 'о'},
    {hiragana: 'や', katakana: 'ヤ', transcription: 'я', row: '', column: 'я'},
    {hiragana: 'ゆ', katakana: 'ユ', transcription: 'ю', row: '', column: 'ю'},
    {hiragana: 'よ', katakana: 'ヨ', transcription: 'ё', row: '', column: 'ё'},

    {hiragana: 'か', katakana: 'カ', transcription: 'ка', row: 'к', column: 'а'},
    {hiragana: 'き', katakana: 'キ', transcription: 'ки', row: 'к', column: 'и'},
    {hiragana: 'く', katakana: 'ク', transcription: 'ку', row: 'к', column: 'у'},
    {hiragana: 'け', katakana: 'ケ', transcription: 'кэ', row: 'к', column: 'э'},
    {hiragana: 'こ', katakana: 'コ', transcription: 'ко', row: 'к', column: 'о'},
    {hiragana: 'きゃ', katakana: 'キャ', transcription: 'кя', row: 'к', column: 'я', isYouon: true},
    {hiragana: 'きゅ', katakana: 'キュ', transcription: 'кю', row: 'к', column: 'ю', isYouon: true},
    {hiragana: 'きょ', katakana: 'キョ', transcription: 'кё', row: 'к', column: 'ё', isYouon: true},

    {hiragana: 'さ', katakana: 'サ', transcription: 'са', row: 'с', column: 'а'},
    {hiragana: 'し', katakana: 'シ', transcription: 'си', row: 'с', column: 'и'},
    {hiragana: 'す', katakana: 'ス', transcription: 'су', row: 'с', column: 'у'},
    {hiragana: 'せ', katakana: 'セ', transcription: 'сэ', row: 'с', column: 'э'},
    {hiragana: 'そ', katakana: 'ソ', transcription: 'со', row: 'с', column: 'о'},
    {hiragana: 'しゃ', katakana: 'シャ', transcription: 'ся', row: 'с', column: 'я', isYouon: true},
    {hiragana: 'しゅ', katakana: 'シュ', transcription: 'сю', row: 'с', column: 'ю', isYouon: true},
    {hiragana: 'しょ', katakana: 'ショ', transcription: 'сё', row: 'с', column: 'ё', isYouon: true},

    {hiragana: 'た', katakana: 'タ', transcription: 'та', row: 'т', column: 'а'},
    {hiragana: 'ち', katakana: 'チ', transcription: 'ти', row: 'т', column: 'и'},
    {hiragana: 'つ', katakana: 'ツ', transcription: 'цу', row: 'т', column: 'у'},
    {hiragana: 'て', katakana: 'テ', transcription: 'тэ', row: 'т', column: 'э'},
    {hiragana: 'と', katakana: 'ト', transcription: 'то', row: 'т', column: 'о'},
    {hiragana: 'ちゃ', katakana: 'チャ', transcription: 'тя', row: 'т', column: 'я', isYouon: true},
    {hiragana: 'ちゅ', katakana: 'チュ', transcription: 'тю', row: 'т', column: 'ю', isYouon: true},
    {hiragana: 'ちょ', katakana: 'チョ', transcription: 'тё', row: 'т', column: 'ё', isYouon: true},

    {hiragana: 'な', katakana: 'ナ', transcription: 'на', row: 'н', column: 'а'},
    {hiragana: 'に', katakana: 'ニ', transcription: 'ни', row: 'н', column: 'и'},
    {hiragana: 'ぬ', katakana: 'ヌ', transcription: 'ну', row: 'н', column: 'у'},
    {hiragana: 'ね', katakana: 'ネ', transcription: 'нэ', row: 'н', column: 'э'},
    {hiragana: 'の', katakana: 'ノ', transcription: 'но', row: 'н', column: 'о'},
    {hiragana: 'にゃ',katakana: 'ニャ', transcription: 'ня', row: 'н', column: 'я', isYouon: true},
    {hiragana: 'にゅ',katakana: 'ニュ', transcription: 'ню', row: 'н', column: 'ю', isYouon: true},
    {hiragana: 'にょ',katakana: 'ニョ', transcription: 'нё', row: 'н', column: 'ё', isYouon: true},

    {hiragana: 'は', katakana: 'ハ', transcription: 'ха', row: 'х', column: 'а'},
    {hiragana: 'ひ', katakana: 'ヒ', transcription: 'хи', row: 'х', column: 'и'},
    {hiragana: 'ふ', katakana: 'フ', transcription: 'фу', row: 'х', column: 'у'},
    {hiragana: 'へ', katakana: 'ヘ', transcription: 'хэ', row: 'х', column: 'э'},
    {hiragana: 'ほ', katakana: 'ホ', transcription: 'хо', row: 'х', column: 'о'},
    {hiragana: 'ひゃ', katakana: 'ヒャ', transcription: 'хя', row: 'х', column: 'я', isYouon: true},
    {hiragana: 'ひゅ', katakana: 'ヒュ', transcription: 'хю', row: 'х', column: 'ю', isYouon: true},
    {hiragana: 'ひょ', katakana: 'ヒョ', transcription: 'хё', row: 'х', column: 'ё', isYouon: true},

    {hiragana: 'ま', katakana: 'マ', transcription: 'ма', row: 'м', column: 'а'},
    {hiragana: 'み', katakana: 'ミ', transcription: 'ми', row: 'м', column: 'и'},
    {hiragana: 'む', katakana: 'ム', transcription: 'му', row: 'м', column: 'у'},
    {hiragana: 'め', katakana: 'メ', transcription: 'мэ', row: 'м', column: 'э'},
    {hiragana: 'も', katakana: 'モ', transcription: 'мо', row: 'м', column: 'о'},
    {hiragana: 'みゃ', katakana: 'ミャ', transcription: 'мя', row: 'м', column: 'я', isYouon: true},
    {hiragana: 'みゅ', katakana: 'ミュ', transcription: 'мю', row: 'м', column: 'ю', isYouon: true},
    {hiragana: 'みょ', katakana: 'ミョ', transcription: 'мё', row: 'м', column: 'ё', isYouon: true},

    {hiragana: 'ら', katakana: 'ラ', transcription: 'ра', row: 'р', column: 'а'},
    {hiragana: 'り', katakana: 'リ', transcription: 'ри', row: 'р', column: 'и'},
    {hiragana: 'る', katakana: 'ル', transcription: 'ру', row: 'р', column: 'у'},
    {hiragana: 'れ', katakana: 'レ', transcription: 'рэ', row: 'р', column: 'э'},
    {hiragana: 'ろ', katakana: 'ロ', transcription: 'ро', row: 'р', column: 'о'},
    {hiragana: 'りゃ', katakana: 'リャ', transcription: 'ря', row: 'р', column: 'я', isYouon: true},
    {hiragana: 'りゅ', katakana: 'リュ', transcription: 'рю', row: 'р', column: 'ю', isYouon: true},
    {hiragana: 'りょ', katakana: 'リョ', transcription: 'рё', row: 'р', column: 'ё', isYouon: true},

    {hiragana: 'わ', katakana: 'ワ', transcription: 'ва', row: 'в', column: 'а'},
    {hiragana: 'を', katakana: 'ヲ', transcription: 'о', row: 'в', column: 'о'},

    {hiragana: 'ん', katakana: 'ン', transcription: 'н', row: 'н', column: ''},


    //дaкутэны/ дакутэны
    {hiragana: 'が', katakana: 'ガ', transcription: 'га', row: 'г', column: 'а', isDakuten: true},
    {hiragana: 'ぎ', katakana: 'ギ', transcription: 'ги', row: 'г', column: 'и', isDakuten: true},
    {hiragana: 'ぐ', katakana: 'グ', transcription: 'гу', row: 'г', column: 'у', isDakuten: true},
    {hiragana: 'げ', katakana: 'ゲ', transcription: 'гэ', row: 'г', column: 'э', isDakuten: true},
    {hiragana: 'ご', katakana: 'ゴ', transcription: 'го', row: 'г', column: 'о', isDakuten: true},
    {hiragana: 'ぎゃ', katakana: 'ギャ', transcription: 'гя', row: 'г', column: 'я', isDakuten: true, isYouon: true},
    {hiragana: 'ぎゅ', katakana: 'ギュ', transcription: 'гю', row: 'г', column: 'ю', isDakuten: true, isYouon: true},
    {hiragana: 'ぎょ', katakana: 'ギョ', transcription: 'гё', row: 'г', column: 'ё', isDakuten: true, isYouon: true},

    {hiragana: 'ざ', katakana: 'ザ', transcription: 'дза', row: 'дз', column: 'а', isDakuten: true},
    {hiragana: 'じ', katakana: 'ジ', transcription: 'дзи', row: 'дз', column: 'и', isDakuten: true},
    {hiragana: 'ず', katakana: 'ズ', transcription: 'дзу', row: 'дз', column: 'у', isDakuten: true},
    {hiragana: 'ぜ', katakana: 'ゼ', transcription: 'дзэ', row: 'дз', column: 'э', isDakuten: true},
    {hiragana: 'ぞ', katakana: 'ゾ', transcription: 'дзо', row: 'дз', column: 'о', isDakuten: true},
    {hiragana: 'じゃ', katakana: 'ジャ', transcription: 'дзя', row: 'дз', column: 'я', isDakuten: true, isYouon: true},
    {hiragana: 'じゅ', katakana: 'ジュ', transcription: 'дзю', row: 'дз', column: 'ю', isDakuten: true, isYouon: true},
    {hiragana: 'じょ', katakana: 'ジョ', transcription: 'дзё', row: 'дз', column: 'ё', isDakuten: true, isYouon: true},

    {hiragana: 'だ', katakana: 'ダ', transcription: 'да', row: 'д', column: 'а', isDakuten: true},
    {hiragana: 'ぢ', katakana: 'ヂ', transcription: 'дзи', row: 'д', column: 'и', isDakuten: true},
    {hiragana: 'づ', katakana: 'ヅ', transcription: 'дзу', row: 'д', column: 'у', isDakuten: true},
    {hiragana: 'で', katakana: 'デ', transcription: 'дэ', row: 'д', column: 'э', isDakuten: true},
    {hiragana: 'ど', katakana: 'ド', transcription: 'до', row: 'д', column: 'о', isDakuten: true},
    {hiragana: 'ぢゃ', katakana: 'ヂャ', transcription: 'дзя', row: 'д', column: 'я', isDakuten: true, isYouon: true},
    {hiragana: 'ぢゅ', katakana: 'ヂュ', transcription: 'дзю', row: 'д', column: 'ю', isDakuten: true, isYouon: true},
    {hiragana: 'ぢょ', katakana: 'ヂョ', transcription: 'дзё', row: 'д', column: 'ё', isDakuten: true, isYouon: true},

    {hiragana: 'ば', katakana: 'バ', transcription: 'ба', row: 'б', column: 'а', isDakuten: true},
    {hiragana: 'び', katakana: 'ビ', transcription: 'би', row: 'б', column: 'и', isDakuten: true},
    {hiragana: 'ぶ', katakana: 'ブ', transcription: 'бу', row: 'б', column: 'у', isDakuten: true},
    {hiragana: 'べ', katakana: 'ベ', transcription: 'бэ', row: 'б', column: 'э', isDakuten: true},
    {hiragana: 'ぼ', katakana: 'ボ', transcription: 'бо', row: 'б', column: 'о', isDakuten: true},
    {hiragana: 'びゃ', katakana: 'ビャ', transcription: 'бя', row: 'б', column: 'я', isDakuten: true, isYouon: true},
    {hiragana: 'びゅ', katakana: 'ビュ', transcription: 'бю', row: 'б', column: 'ю', isDakuten: true, isYouon: true},
    {hiragana: 'びょ', katakana: 'ビョ', transcription: 'бё', row: 'б', column: 'ё', isDakuten: true, isYouon: true},

    {hiragana: 'ぱ', katakana: 'パ', transcription: 'па', row: 'п', column: 'а', isDakuten: true},
    {hiragana: 'ぴ', katakana: 'ピ', transcription: 'пи', row: 'п', column: 'и', isDakuten: true},
    {hiragana: 'ぷ', katakana: 'プ', transcription: 'пу', row: 'п', column: 'у', isDakuten: true},
    {hiragana: 'ぺ', katakana: 'ペ', transcription: 'пэ', row: 'п', column: 'э', isDakuten: true},
    {hiragana: 'ぽ', katakana: 'ポ', transcription: 'по', row: 'п', column: 'о', isDakuten: true},
    {hiragana: 'ぴゃ', katakana: 'ピャ', transcription: 'пя', row: 'п', column: 'я', isDakuten: true, isYouon: true},
    {hiragana: 'ぴゅ', katakana: 'ピュ', transcription: 'пю', row: 'п', column: 'ю', isDakuten: true, isYouon: true},
    {hiragana: 'ぴょ', katakana: 'ピョ', transcription: 'пё', row: 'п', column: 'ё', isDakuten: true, isYouon: true}
  ];
  rows: string[] = ['', 'к', 'с', 'т', 'н', 'х', 'м', 'р', 'в', 'г', 'дз', 'д', 'б', 'п'];
  columns: string[] = ['', 'а', 'и', 'у', 'э', 'о', 'я', 'ю', 'ё'];

  getItem(row: string, column:string): SyllabaryItem {
    return this.table.find(obj => obj.row === row && obj.column === column);
  }

  getItemSign(row: string, column:string): string {
    // возвращает знак слога согласному выбранной азбуке
    let item = this.getItem(row, column);
    return (typeof item != 'undefined') ? item[this.kana] : '';
  }

  getSyllableBySign(sign: string) {
    return this.table.find(obj => obj.hiragana == sign || obj.katakana == sign);
  }
}
