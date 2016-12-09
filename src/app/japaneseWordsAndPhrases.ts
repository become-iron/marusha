export interface JapaneseWordOrPhrase {
  // kanji?: string;
  hiragana?: string;
  katakana?: string;
  translation: string;
  // translation_en?: string;
  // transcription?: string;
  // transcription_en?: string;
  // pronounce_url?: string;  // ссылка на файл с произношением
}

// TODO
export function getWordsBySign(kana: string, sign: string): JapaneseWordOrPhrase[] {
  let words: JapaneseWordOrPhrase[] = [
    // глаголы
    {translation: 'существовать, быть, находиться (неодушевленных предметах)', hiragana: 'ある'},
    {translation: 'cуществовать, быть (об одушевленных предметах)', hiragana: 'いる'},
    {translation: 'встречаться, видеться', hiragana: 'あう'},
    {translation: 'играть, развлекаться', hiragana: 'あそぶ'},
    {translation: 'класть во что-либо, помещать, наливать, вмещать, впускать', hiragana: 'いれる'},
    {translation: 'вставать, просыпаться, происходить, случаться', hiragana: 'おきる'},
    {translation: 'преподавать, учить, объяснять', hiragana: 'おしえる'},
    {translation: 'покупать, приобретать', hiragana: 'かう'},
    {translation: 'уходить (домой), возвращаться (домой)', hiragana: 'かえる'},
    {translation: 'слышать, слушать, узнавать, спрашивать', hiragana: 'きく'},
    {translation: 'надевать, носить (одежду)', hiragana: 'きる'},
    {translation: 'приходить', hiragana: 'くる'},
    {translation: 'закрывать, запирать, завязывать', hiragana: 'しめる'},
    {translation: 'есть, питаться', hiragana: 'たべる'},
    {translation: 'отличаться, "нет"', hiragana: 'ちがう'},
    {translation: 'снимать, фотографировать', hiragana: 'とる'},
    {translation: 'пить, глотать', hiragana: 'のむ'},
    {translation: 'ждать, ожидать', hiragana: 'まつ'},


    // существительные
    // {translation: '', hiragana: '', kanji: ''},
    // {translation: '', hiragana: '', kanji: ''},
    // {translation: '', hiragana: '', kanji: ''},

    // местоимения
    {translation: 'кто', hiragana: 'だれ'},
    {translation: 'когда', hiragana: 'いつ'},
    {translation: 'где', hiragana: 'どこ'},
    {translation: 'ты', hiragana: 'あなた'},

    // прилагательные
    {translation: 'удивительный', hiragana: 'すごい'},
    {translation: 'хороший', hiragana: 'いい'},

    // катакана
    {translation: 'туалет', katakana: 'トイレ'},
    {translation: 'отель', katakana: 'ホテル '},
    {translation: 'такси', katakana: 'タクシ'},
    {translation: 'ресторан', katakana: 'レストラン'},
    {translation: 'магазин', katakana: 'コンビニ'},
    {translation: 'супермаркет', katakana: 'スーパー'},
    {translation: 'кофе', katakana: 'コーヒ'},
    {translation: 'стекло', katakana: 'ガラス'},
    {translation: 'икра', katakana: 'イクラ'},
  ];
  return words.filter(word => typeof word[kana] != 'undefined' && word[kana].includes(sign));
}

export function getPhrasesBySign(kana: string, sign: string): JapaneseWordOrPhrase[] {
  // TODO
  let phrases: JapaneseWordOrPhrase[] = [
    {translation: 'Добрый день', hiragana: 'こんにちは'},
    {translation: 'Добрый вечер', hiragana: 'こんばんは'},
    {translation: 'Доброе утро', hiragana: 'おはようございます'},
    {translation: 'Спокойной ночи', hiragana: 'お休みなさい'},

    {translation: 'Приятно познакомиться', hiragana: '初めまして。どうぞよろしく'},
    {translation: 'Рад с вами познакомиться', hiragana: '初めまして。よろしくお願いします'},
    {translation: 'Как поживаете?', hiragana: 'おげんきですか'},
    {translation: 'Давно не виделись', hiragana: 'お久し振りですね'},

    {translation: 'Спасибо', hiragana: 'どうも'},
    {translation: 'Большое спасибо', hiragana: 'どうもありがとう'},
    {translation: 'Cпасибо', hiragana: 'ありがとう'},
    {translation: 'Спасибо (перед едой)', hiragana: 'いただきます'},

    {translation: 'Помогите!', hiragana: '助けて'},
    {translation: 'Извините', hiragana: 'ごめんなさい'},

    {translation: 'я люблю тебя', hiragana: '愛してるよ'},
    {translation: 'я люблю тебя', hiragana: '好きだ'},
    {translation: 'я люблю тебя', hiragana: '好きよ'},
    {translation: 'я люблю тебя (очень люблю)', hiragana: '大好き'},

    {translation: 'Алло', hiragana: 'もしもし'},

    {translation: 'Я не понимаю', hiragana: 'わかりません'},
    {translation: 'Остановись!', hiragana: 'やめて！'},
    {translation: 'Что случилось?', hiragana: 'どうした？'},
    {translation: 'Почему?', hiragana: 'どうして？'},
    {translation: 'Что?', hiragana: 'なに？',},
  ];
  return phrases.filter(word => typeof word[kana] != 'undefined' && word[kana].includes(sign));
}
