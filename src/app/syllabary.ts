// TODO добавить английскую транскрипцию
// TODO две транскрипции для одного символа (напр., ке и кэ)
// TODO Дополнительные знаки каны для передачи отсутствующих в годзюоне звуков (https://ru.wikipedia.org/wiki/Катакана#.D0.9F.D0.BE.D0.BB.D0.BD.D0.B0.D1.8F_.D1.82.D0.B0.D0.B1.D0.BB.D0.B8.D1.86.D0.B0)

// элемент азбуки
interface SyllabaryItem {
  readonly sign: string,  // символ
  readonly transcription: string,
  readonly row: string,
  readonly column: string,
  readonly isDakuten?: boolean, // дакутэн (https://ru.wikipedia.org/wiki/Дакутэн)
  readonly isYouon?: boolean,  // ёон (https://ru.wikipedia.org/wiki/Ёон)
  progress?: number
}


let hiragana: SyllabaryItem[] = [
  {sign: 'あ', transcription: 'а', row: '', column: 'а'},
  {sign: 'い', transcription: 'и', row: '', column: 'и'},
  {sign: 'う', transcription: 'у', row: '', column: 'у'},
  {sign: 'え', transcription: 'э', row: '', column: 'э'},
  {sign: 'お', transcription: 'о', row: '', column: 'о'},
  {sign: 'や', transcription: 'я', row: '', column: 'я'},
  {sign: 'ゆ', transcription: 'ю', row: '', column: 'ю'},
  {sign: 'よ', transcription: 'ё', row: '', column: 'ё'},

  {sign: 'か', transcription: 'ка', row: 'к', column: 'а'},
  {sign: 'き', transcription: 'ки', row: 'к', column: 'и'},
  {sign: 'く', transcription: 'ку', row: 'к', column: 'у'},
  {sign: 'け', transcription: 'кэ', row: 'к', column: 'э'},
  {sign: 'こ', transcription: 'ко', row: 'к', column: 'о'},
  {sign: 'きゃ', transcription: 'кя', row: 'к', column: 'я', isYouon: true},
  {sign: 'きゅ', transcription: 'кю', row: 'к', column: 'ю', isYouon: true},
  {sign: 'きょ', transcription: 'кё', row: 'к', column: 'ё', isYouon: true},

  {sign: 'さ', transcription: 'са', row: 'с', column: 'а'},
  {sign: 'し', transcription: 'си', row: 'с', column: 'и'},
  {sign: 'す', transcription: 'су', row: 'с', column: 'у'},
  {sign: 'せ', transcription: 'сэ', row: 'с', column: 'э'},
  {sign: 'そ', transcription: 'со', row: 'с', column: 'о'},
  {sign: 'しゃ', transcription: 'ся', row: 'с', column: 'я', isYouon: true},
  {sign: 'しゅ', transcription: 'сю', row: 'с', column: 'ю', isYouon: true},
  {sign: 'しょ', transcription: 'сё', row: 'с', column: 'ё', isYouon: true},

  {sign: 'た', transcription: 'та', row: 'т', column: 'а'},
  {sign: 'ち', transcription: 'ти', row: 'т', column: 'и'},
  {sign: 'つ', transcription: 'цу', row: 'т', column: 'у'},
  {sign: 'て', transcription: 'тэ', row: 'т', column: 'э'},
  {sign: 'と', transcription: 'то', row: 'т', column: 'о'},
  {sign: 'ちゃ', transcription: 'тя', row: 'т', column: 'я', isYouon: true},
  {sign: 'ちゅ', transcription: 'тю', row: 'т', column: 'ю', isYouon: true},
  {sign: 'ちょ', transcription: 'тё', row: 'т', column: 'ё', isYouon: true},

  {sign: 'な', transcription: 'на', row: 'н', column: 'а'},
  {sign: 'に', transcription: 'ни', row: 'н', column: 'и'},
  {sign: 'ぬ', transcription: 'ну', row: 'н', column: 'у'},
  {sign: 'ね', transcription: 'нэ', row: 'н', column: 'э'},
  {sign: 'の', transcription: 'но', row: 'н', column: 'о'},
  {sign: 'にゃ', transcription: 'ня', row: 'н', column: 'я', isYouon: true},
  {sign: 'にゅ', transcription: 'ню', row: 'н', column: 'ю', isYouon: true},
  {sign: 'にょ', transcription: 'нё', row: 'н', column: 'ё', isYouon: true},

  {sign: 'は', transcription: 'ха', row: 'х', column: 'а'},
  {sign: 'ひ', transcription: 'хи', row: 'х', column: 'и'},
  {sign: 'ふ', transcription: 'фу', row: 'х', column: 'у'},
  {sign: 'へ', transcription: 'хэ', row: 'х', column: 'э'},
  {sign: 'ほ', transcription: 'хо', row: 'х', column: 'о'},
  {sign: 'ひゃ', transcription: 'хя', row: 'х', column: 'я', isYouon: true},
  {sign: 'ひゅ', transcription: 'хю', row: 'х', column: 'ю', isYouon: true},
  {sign: 'ひょ', transcription: 'хё', row: 'х', column: 'ё', isYouon: true},

  {sign: 'ま', transcription: 'ма', row: 'м', column: 'а'},
  {sign: 'み', transcription: 'ми', row: 'м', column: 'и'},
  {sign: 'む', transcription: 'му', row: 'м', column: 'у'},
  {sign: 'め', transcription: 'мэ', row: 'м', column: 'э'},
  {sign: 'も', transcription: 'мо', row: 'м', column: 'о'},
  {sign: 'みゃ', transcription: 'мя', row: 'м', column: 'я', isYouon: true},
  {sign: 'みゅ', transcription: 'мю', row: 'м', column: 'ю', isYouon: true},
  {sign: 'みょ', transcription: 'мё', row: 'м', column: 'ё', isYouon: true},

  {sign: 'ら', transcription: 'ра', row: 'р', column: 'а'},
  {sign: 'り', transcription: 'ри', row: 'р', column: 'и'},
  {sign: 'る', transcription: 'ру', row: 'р', column: 'у'},
  {sign: 'れ', transcription: 'рэ', row: 'р', column: 'э'},
  {sign: 'ろ', transcription: 'ро', row: 'р', column: 'о'},
  {sign: 'りゃ', transcription: 'ря', row: 'р', column: 'я', isYouon: true},
  {sign: 'りゅ', transcription: 'рю', row: 'р', column: 'ю', isYouon: true},
  {sign: 'りょ', transcription: 'рё', row: 'р', column: 'ё', isYouon: true},

  {sign: 'わ', transcription: 'ва', row: 'в', column: 'а'},
  {sign: 'を', transcription: 'о', row: 'в', column: 'о'},

  {sign: 'ん', transcription: 'н', row: 'н', column: ''},


  // дакутэны
  {sign: 'が', transcription: 'га', row: 'г', column: 'а', isDakuten: true},
  {sign: 'ぎ', transcription: 'ги', row: 'г', column: 'и', isDakuten: true},
  {sign: 'ぐ', transcription: 'гу', row: 'г', column: 'у', isDakuten: true},
  {sign: 'げ', transcription: 'гэ', row: 'г', column: 'э', isDakuten: true},
  {sign: 'ご', transcription: 'го', row: 'г', column: 'о', isDakuten: true},
  {sign: 'ぎゃ', transcription: 'гя', row: 'г', column: 'я', isDakuten: true, isYouon: true},
  {sign: 'ぎゅ', transcription: 'гю', row: 'г', column: 'ю', isDakuten: true, isYouon: true},
  {sign: 'ぎょ', transcription: 'гё', row: 'г', column: 'ё', isDakuten: true, isYouon: true},

  {sign: 'ざ', transcription: 'дза', row: 'дз', column: 'а', isDakuten: true},
  {sign: 'じ', transcription: 'дзи', row: 'дз', column: 'и', isDakuten: true},
  {sign: 'ず', transcription: 'дзу', row: 'дз', column: 'у', isDakuten: true},
  {sign: 'ぜ', transcription: 'дзэ', row: 'дз', column: 'э', isDakuten: true},
  {sign: 'ぞ', transcription: 'дзо', row: 'дз', column: 'о', isDakuten: true},
  {sign: 'じゃ', transcription: 'дзя', row: 'дз', column: 'я', isDakuten: true, isYouon: true},
  {sign: 'じゅ', transcription: 'дзю', row: 'дз', column: 'ю', isDakuten: true, isYouon: true},
  {sign: 'じょ', transcription: 'дзё', row: 'дз', column: 'ё', isDakuten: true, isYouon: true},

  {sign: 'だ', transcription: 'да', row: 'д', column: 'а', isDakuten: true},
  {sign: 'ぢ', transcription: 'дзи', row: 'д', column: 'и', isDakuten: true},
  {sign: 'づ', transcription: 'дзу', row: 'д', column: 'у', isDakuten: true},
  {sign: 'で', transcription: 'дэ', row: 'д', column: 'э', isDakuten: true},
  {sign: 'ど', transcription: 'до', row: 'д', column: 'о', isDakuten: true},
  {sign: 'ぢゃ', transcription: 'дзя', row: 'д', column: 'я', isDakuten: true, isYouon: true},
  {sign: 'ぢゅ', transcription: 'дзю', row: 'д', column: 'ю', isDakuten: true, isYouon: true},
  {sign: 'ぢょ', transcription: 'дзё', row: 'д', column: 'ё', isDakuten: true, isYouon: true},

  {sign: 'ば', transcription: 'ба', row: 'б', column: 'а', isDakuten: true},
  {sign: 'び', transcription: 'би', row: 'б', column: 'и', isDakuten: true},
  {sign: 'ぶ', transcription: 'бу', row: 'б', column: 'у', isDakuten: true},
  {sign: 'べ', transcription: 'бэ', row: 'б', column: 'э', isDakuten: true},
  {sign: 'ぼ', transcription: 'бо', row: 'б', column: 'о', isDakuten: true},
  {sign: 'びゃ', transcription: 'бя', row: 'б', column: 'я', isDakuten: true, isYouon: true},
  {sign: 'びゅ', transcription: 'бю', row: 'б', column: 'ю', isDakuten: true, isYouon: true},
  {sign: 'びょ', transcription: 'бё', row: 'б', column: 'ё', isDakuten: true, isYouon: true},

  {sign: 'ぱ', transcription: 'па', row: 'п', column: 'а', isDakuten: true},
  {sign: 'ぴ', transcription: 'пи', row: 'п', column: 'и', isDakuten: true},
  {sign: 'ぷ', transcription: 'пу', row: 'п', column: 'у', isDakuten: true},
  {sign: 'ぺ', transcription: 'пэ', row: 'п', column: 'э', isDakuten: true},
  {sign: 'ぽ', transcription: 'по', row: 'п', column: 'о', isDakuten: true},
  {sign: 'ぴゃ', transcription: 'пя', row: 'п', column: 'я', isDakuten: true, isYouon: true},
  {sign: 'ぴゅ', transcription: 'пю', row: 'п', column: 'ю', isDakuten: true, isYouon: true},
  {sign: 'ぴょ', transcription: 'пё', row: 'п', column: 'ё', isDakuten: true, isYouon: true}
];

// TODO
let katakana: SyllabaryItem[] = [
  {sign: 'ア', transcription: 'а', row: '', column: 'а'},
  {sign: 'イ', transcription: 'и', row: '', column: 'и'},
  {sign: 'ウ', transcription: 'у', row: '', column: 'у'},
  {sign: 'エ', transcription: 'э', row: '', column: 'э'},
  {sign: 'オ', transcription: 'о', row: '', column: 'о'},
  {sign: 'ヤ', transcription: 'я', row: '', column: 'я'},
  {sign: 'ユ', transcription: 'ю', row: '', column: 'ю'},
  {sign: 'ヨ', transcription: 'ё', row: '', column: 'ё'},

  {sign: 'カ', transcription: 'ка', row: 'к', column: 'а'},
  {sign: 'キ', transcription: 'ки', row: 'к', column: 'и'},
  {sign: 'ク', transcription: 'ку', row: 'к', column: 'у'},
  {sign: 'ケ', transcription: 'кэ', row: 'к', column: 'э'},
  {sign: 'コ', transcription: 'ко', row: 'к', column: 'о'},
  {sign: 'キャ', transcription: 'кя', row: 'к', column: 'я', isYouon: true},
  {sign: 'キュ', transcription: 'кю', row: 'к', column: 'ю', isYouon: true},
  {sign: 'キョ', transcription: 'кё', row: 'к', column: 'ё', isYouon: true},

  {sign: 'サ', transcription: 'са', row: 'с', column: 'а'},
  {sign: 'シ', transcription: 'си', row: 'с', column: 'и'},
  {sign: 'ス', transcription: 'су', row: 'с', column: 'у'},
  {sign: 'セ', transcription: 'сэ', row: 'с', column: 'э'},
  {sign: 'ソ', transcription: 'со', row: 'с', column: 'о'},
  {sign: 'シャ', transcription: 'ся', row: 'с', column: 'я', isYouon: true},
  {sign: 'シュ', transcription: 'сю', row: 'с', column: 'ю', isYouon: true},
  {sign: 'ショ', transcription: 'сё', row: 'с', column: 'ё', isYouon: true},

  // {sign: 'た', transcription: 'та', row: 'т', column: 'а'},
  // {sign: 'ち', transcription: 'ти', row: 'т', column: 'и'},
  // {sign: 'つ', transcription: 'цу', row: 'т', column: 'у'},
  // {sign: 'て', transcription: 'тэ', row: 'т', column: 'э'},
  // {sign: 'と', transcription: 'то', row: 'т', column: 'о'},
  // {sign: 'ちゃ', transcription: 'тя', row: 'т', column: 'я', isYouon: true},
  // {sign: 'ちゅ', transcription: 'тю', row: 'т', column: 'ю', isYouon: true},
  // {sign: 'ちょ', transcription: 'тё', row: 'т', column: 'ё', isYouon: true},
  //
  // {sign: 'な', transcription: 'на', row: 'н', column: 'а'},
  // {sign: 'に', transcription: 'ни', row: 'н', column: 'и'},
  // {sign: 'ぬ', transcription: 'ну', row: 'н', column: 'у'},
  // {sign: 'ね', transcription: 'нэ', row: 'н', column: 'э'},
  // {sign: 'の', transcription: 'но', row: 'н', column: 'о'},
  // {sign: 'にゃ', transcription: 'ня', row: 'н', column: 'я', isYouon: true},
  // {sign: 'にゅ', transcription: 'ню', row: 'н', column: 'ю', isYouon: true},
  // {sign: 'にょ', transcription: 'нё', row: 'н', column: 'ё', isYouon: true},
  //
  // {sign: 'は', transcription: 'ха', row: 'х', column: 'а'},
  // {sign: 'ひ', transcription: 'хи', row: 'х', column: 'и'},
  // {sign: 'ふ', transcription: 'фу', row: 'х', column: 'у'},
  // {sign: 'へ', transcription: 'хэ', row: 'х', column: 'э'},
  // {sign: 'ほ', transcription: 'хо', row: 'х', column: 'о'},
  // {sign: 'ひゃ', transcription: 'хя', row: 'х', column: 'я', isYouon: true},
  // {sign: 'ひゅ', transcription: 'хю', row: 'х', column: 'ю', isYouon: true},
  // {sign: 'ひょ', transcription: 'хё', row: 'х', column: 'ё', isYouon: true},
  //
  // {sign: 'ま', transcription: 'ма', row: 'м', column: 'а'},
  // {sign: 'み', transcription: 'ми', row: 'м', column: 'и'},
  // {sign: 'む', transcription: 'му', row: 'м', column: 'у'},
  // {sign: 'め', transcription: 'мэ', row: 'м', column: 'э'},
  // {sign: 'も', transcription: 'мо', row: 'м', column: 'о'},
  // {sign: 'みゃ', transcription: 'мя', row: 'м', column: 'я', isYouon: true},
  // {sign: 'みゅ', transcription: 'мю', row: 'м', column: 'ю', isYouon: true},
  // {sign: 'みょ', transcription: 'мё', row: 'м', column: 'ё', isYouon: true},
  //
  // {sign: 'ら', transcription: 'ра', row: 'р', column: 'а'},
  // {sign: 'り', transcription: 'ри', row: 'р', column: 'и'},
  // {sign: 'る', transcription: 'ру', row: 'р', column: 'у'},
  // {sign: 'れ', transcription: 'рэ', row: 'р', column: 'э'},
  // {sign: 'ろ', transcription: 'ро', row: 'р', column: 'о'},
  // {sign: 'りゃ', transcription: 'ря', row: 'р', column: 'я', isYouon: true},
  // {sign: 'りゅ', transcription: 'рю', row: 'р', column: 'ю', isYouon: true},
  // {sign: 'りょ', transcription: 'рё', row: 'р', column: 'ё', isYouon: true},
  //
  // {sign: 'わ', transcription: 'ва', row: 'в', column: 'а'},
  // {sign: 'を', transcription: 'о', row: 'в', column: 'о'},
  //
  // {sign: 'ん', transcription: 'н', row: 'н', column: ''},
  //
  //
  // // дакутэны
  // {sign: 'が', transcription: 'га', row: 'г', column: 'а', isDakuten: true},
  // {sign: 'ぎ', transcription: 'ги', row: 'г', column: 'и', isDakuten: true},
  // {sign: 'ぐ', transcription: 'гу', row: 'г', column: 'у', isDakuten: true},
  // {sign: 'げ', transcription: 'гэ', row: 'г', column: 'э', isDakuten: true},
  // {sign: 'ご', transcription: 'го', row: 'г', column: 'о', isDakuten: true},
  // {sign: 'ぎゃ', transcription: 'гя', row: 'г', column: 'я', isDakuten: true, isYouon: true},
  // {sign: 'ぎゅ', transcription: 'гю', row: 'г', column: 'ю', isDakuten: true, isYouon: true},
  // {sign: 'ぎょ', transcription: 'гё', row: 'г', column: 'ё', isDakuten: true, isYouon: true},
  //
  // {sign: 'ざ', transcription: 'дза', row: 'дз', column: 'а', isDakuten: true},
  // {sign: 'じ', transcription: 'дзи', row: 'дз', column: 'и', isDakuten: true},
  // {sign: 'ず', transcription: 'дзу', row: 'дз', column: 'у', isDakuten: true},
  // {sign: 'ぜ', transcription: 'дзэ', row: 'дз', column: 'э', isDakuten: true},
  // {sign: 'ぞ', transcription: 'дзо', row: 'дз', column: 'о', isDakuten: true},
  // {sign: 'じゃ', transcription: 'дзя', row: 'дз', column: 'я', isDakuten: true, isYouon: true},
  // {sign: 'じゅ', transcription: 'дзю', row: 'дз', column: 'ю', isDakuten: true, isYouon: true},
  // {sign: 'じょ', transcription: 'дзё', row: 'дз', column: 'ё', isDakuten: true, isYouon: true},
  //
  // {sign: 'だ', transcription: 'да', row: 'д', column: 'а', isDakuten: true},
  // {sign: 'ぢ', transcription: 'дзи', row: 'д', column: 'и', isDakuten: true},
  // {sign: 'づ', transcription: 'дзу', row: 'д', column: 'у', isDakuten: true},
  // {sign: 'で', transcription: 'дэ', row: 'д', column: 'э', isDakuten: true},
  // {sign: 'ど', transcription: 'до', row: 'д', column: 'о', isDakuten: true},
  // {sign: 'ぢゃ', transcription: 'дзя', row: 'д', column: 'я', isDakuten: true, isYouon: true},
  // {sign: 'ぢゅ', transcription: 'дзю', row: 'д', column: 'ю', isDakuten: true, isYouon: true},
  // {sign: 'ぢょ', transcription: 'дзё', row: 'д', column: 'ё', isDakuten: true, isYouon: true},
  //
  // {sign: 'ば', transcription: 'ба', row: 'б', column: 'а', isDakuten: true},
  // {sign: 'び', transcription: 'би', row: 'б', column: 'и', isDakuten: true},
  // {sign: 'ぶ', transcription: 'бу', row: 'б', column: 'у', isDakuten: true},
  // {sign: 'べ', transcription: 'бэ', row: 'б', column: 'э', isDakuten: true},
  // {sign: 'ぼ', transcription: 'бо', row: 'б', column: 'о', isDakuten: true},
  // {sign: 'びゃ', transcription: 'бя', row: 'б', column: 'я', isDakuten: true, isYouon: true},
  // {sign: 'びゅ', transcription: 'бю', row: 'б', column: 'ю', isDakuten: true, isYouon: true},
  // {sign: 'びょ', transcription: 'бё', row: 'б', column: 'ё', isDakuten: true, isYouon: true},
  //
  // {sign: 'ぱ', transcription: 'па', row: 'п', column: 'а', isDakuten: true},
  // {sign: 'ぴ', transcription: 'пи', row: 'п', column: 'и', isDakuten: true},
  // {sign: 'ぷ', transcription: 'пу', row: 'п', column: 'у', isDakuten: true},
  // {sign: 'ぺ', transcription: 'пэ', row: 'п', column: 'э', isDakuten: true},
  // {sign: 'ぽ', transcription: 'по', row: 'п', column: 'о', isDakuten: true},
  // {sign: 'ぴゃ', transcription: 'пя', row: 'п', column: 'я', isDakuten: true, isYouon: true},
  // {sign: 'ぴゅ', transcription: 'пю', row: 'п', column: 'ю', isDakuten: true, isYouon: true},
  // {sign: 'ぴょ', transcription: 'пё', row: 'п', column: 'ё', isDakuten: true, isYouon: true}
];


export class TableOfKana {
  table: SyllabaryItem[];
  rows: string[] = ['', 'к', 'с', 'т', 'н', 'х', 'м', 'р', 'в', 'г', 'дз', 'д', 'б', 'п'];
  columns: string[] = ['', 'а', 'и', 'у', 'э', 'о', 'я', 'ю', 'ё'];

  constructor(syllabary: string) {
    syllabary === 'katakana' ? this.table = katakana : this.table = hiragana;
  }
}
