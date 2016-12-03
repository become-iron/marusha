export interface WordOrPhrase {
  kanji?: string;
  hiragana?: string;
  katakana?: string;
  translation: string;
  // translation_en?: string;
  transcription?: string;
  // transcription_en?: string;
  pronounce_url?: string;  // ссылка на файо с произношением
}

export class JapaneseWordsAndPhrases {
  words: WordOrPhrase[] = [
    // глаголы
    {translation: 'существовать, быть, находиться (неодушевленных предметах)', hiragana: 'ある', kanji: '有る, 在る'},
    {translation: 'cуществовать, быть (об одушевленных предметах)', hiragana: 'いる', kanji: '居る'},
    {translation: 'встречаться, видеться', hiragana: 'あう', kanji: '会う'},
    {translation: 'играть, развлекаться', hiragana: 'あそぶ', kanji: '遊ぶ'},
    {translation: 'класть во что-либо, помещать, наливать, вмещать, впускать', hiragana: 'いれる', kanji: '入れる'},
    {translation: 'вставать, просыпаться, происходить, случаться', hiragana: 'おきる', kanji: '起きる'},
    {translation: 'преподавать, учить, объяснять', hiragana: 'おしえる', kanji: 'える'},
    {translation: 'покупать, приобретать', hiragana: 'かう', kanji: '買う'},
    {translation: 'уходить (домой), возвращаться (домой)', hiragana: 'かえる', kanji: '帰る'},
    {translation: 'слышать, слушать, узнавать, спрашивать', hiragana: 'きく', kanji: '聞く'},
    {translation: 'надевать, носить (одежду)', hiragana: 'きる', kanji: '着る'},
    {translation: 'приходить', hiragana: 'くる', kanji: '来る'},
    {translation: 'закрывать, запирать, завязывать', hiragana: 'しめる', kanji: '閉める, 締める'},
    {translation: 'есть, питаться', hiragana: 'たべる', kanji: '食べる'},
    {translation: 'отличаться, "нет"', hiragana: 'ちがう', kanji: '違う'},
    {translation: 'снимать, фотографировать', hiragana: 'とる', kanji: '撮る'},
    {translation: 'пить, глотать', hiragana: 'のむ', kanji: '飲む'},
    {translation: 'ждать, ожидать', hiragana: 'まつ', kanji: '待つ'},
    {translation: '', hiragana: '', kanji: ''},


    // существительные
    {translation: '', hiragana: '', kanji: ''},
    {translation: '', hiragana: '', kanji: ''},
    {translation: '', hiragana: '', kanji: ''},

    // местоимения
    {translation: 'кто', hiragana: 'だれ'},
    {translation: 'когда', hiragana: 'いつ'},
    {translation: 'где', hiragana: 'どこ'},
    {translation: 'ты', hiragana: 'あなた'},
    {translation: '', hiragana: ''},
    {translation: '', hiragana: ''},





    {translation: 'удивительный', hiragana: 'すごい'},
    {translation: 'хороший', hiragana: 'いい'},
    {translation: '', hiragana: ''},
    {translation: '', hiragana: ''},
  ];

  words_katakana: WordOrPhrase[] = [
    {translation: 'туалет', katakana: 'トイレ'},
    {translation: 'отель', katakana: 'ホテル '},
    {translation: 'такси', katakana: 'タクシ'},
    {translation: 'ресторан', katakana: 'レストラン'},
    {translation: 'магазин', katakana: 'コンビニ'},
    {translation: 'супермаркет', katakana: 'スーパー'},
    {translation: '', katakana: ''},
    {translation: '', katakana: ''},
  ];

  phrases: WordOrPhrase[] = [
    {translation: 'Добрый день', hiragana: 'こんにちは', transcription: 'Коннитива'},
    {translation: 'Добрый вечер', hiragana: 'こんばんは', transcription: 'Комбанва'},
    {translation: 'Доброе утро', hiragana: 'おはようございます', transcription: 'Охайо:гозаимас'},
    {translation: 'Спокойной ночи', hiragana: 'お休みなさい', transcription: 'Оясуми насай'},

    {translation: 'Приятно познакомиться', hiragana: '初めまして。どうぞよろしく', transcription: 'Хадзимэмаситэ. До:дзойоросику'},
    {translation: 'Рад с вами познакомиться', hiragana: '初めまして。よろしくお願いします', transcription: 'Хадзимэмаситэ, ёросику о-нэгаи симас'},
    {translation: 'Как поживаете?', hiragana: 'おげんきですか', transcription: 'О гэнки дэска?'},
    {translation: 'Давно не виделись', hiragana: 'お久し振りですね', transcription: 'О хисасибури дэс нэ'},

    {translation: 'Спасибо', hiragana: 'どうも', transcription: 'До:мо'},
    {translation: 'Большое спасибо', hiragana: 'どうもありがとう', transcription: 'До:мо аригато:'},
    {translation: 'Cпасибо', hiragana: 'ありがとう', transcription: 'аригато'},
    {translation: 'Спасибо (перед едой)', hiragana: 'いただきます', transcription: 'Итадакимас'},

    {translation: 'Помогите!', hiragana: '助けて', transcription: 'таскэтэ'},
    {translation: 'Извините', hiragana: 'ごめんなさい', transcription: 'Гомэн насай'},

    {translation: 'я люблю тебя', hiragana: '愛してるよ', transcription: 'Айситэру ё!'},
    {translation: 'я люблю тебя', hiragana: '好きだ', transcription: 'СуКИ ДА'},
    {translation: 'я люблю тебя', hiragana: '好きよ', transcription: 'СуКИ Ё!'},
    {translation: 'я люблю тебя (очень люблю)', hiragana: '大好き', transcription: 'Дайски'},

    {translation: 'Алло', hiragana: 'もしもし', transcription: 'Мосимоси'},

    {translation: 'Я не понимаю', hiragana: 'わかりません'},
    {translation: 'Остановись!', hiragana: 'やめて！'},
    {translation: 'Что случилось?', hiragana: 'どうした？'},
    {translation: 'Почему?', hiragana: 'どうして？'},
    {translation: 'Что?', hiragana: 'なに？',},
    {translation: '', hiragana: '',},
    {translation: '', hiragana: '',},
    {translation: '', hiragana: '',},
    {translation: '', hiragana: '',},
    {translation: '', hiragana: '',},

  ];
}
