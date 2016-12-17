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
        {translation: 'продавать', hiragana: 'うる'},
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
        {translation: 'читать', hiragana: 'よむ'},
        {translation: 'думать', hiragana: 'おもう'},
        {translation: 'говорить', hiragana: 'いう'},
        {translation: 'писать', hiragana: 'かく'},
        {translation: 'спать', hiragana: 'ねる'},
        {translation: 'открывать', hiragana: 'あける'},
        {translation: 'закрывать', hiragana: 'しめる'},
        {translation: 'искать, исследовать, расследовать, изучать', hiragana: 'しらべる'},

        // существительные
        // {translation: '', hiragana: '', kanji: ''},
        {translation: 'семья', hiragana: 'かぞく'},
        {translation: 'мама', hiragana: 'おかあさん'},
        {translation: 'папа', hiragana: 'おとうさん'},
        {translation: 'мама (моя)', hiragana: 'はは'},
        {translation: 'папа (мой)', hiragana: 'ちち'},
        {translation: 'дочь', hiragana: 'むすめ'},
        {translation: 'сын', hiragana: 'むすこ'},

        {translation: 'яблоко', hiragana: 'りんご'},
        {translation: 'вода', hiragana: 'みず'},
        {translation: 'окно', hiragana: 'まど'},
        {translation: 'кровать', hiragana: 'べっど'},
        {translation: 'татами', hiragana: 'たたみ'},
        {translation: 'молоко', hiragana: 'ぎゅうにゅう'},
        {translation: 'чай', hiragana: 'おちゃ'},
        {translation: 'колено', hiragana: 'ひざ'},
        {translation: 'губы', hiragana: 'くちびる'},
        {translation: 'кулак', hiragana: 'こぶし'},
        {translation: 'палец', hiragana: 'ゆび'},
        {translation: 'кожа', hiragana: 'はだ'},

        {translation: 'кошка', hiragana: 'ねこ'},
        {translation: 'собака', hiragana: 'いぬ'},
        {translation: 'птица', hiragana: 'とり'},
        {translation: 'обезьяна', hiragana: 'サル'},
        {translation: 'овца', hiragana: 'ヒツジ'},
        {translation: 'жираф', hiragana: 'キリン'},
        {translation: 'рыба', hiragana: 'さかな'},

        {translation: 'школа', hiragana: 'がっこう'},
        {translation: 'университет', hiragana: 'だいがく'},
        {translation: 'детский сад', hiragana: 'ようちえん'},
        {translation: 'учитель', hiragana: 'せんせい'},
        {translation: 'ученик (студент)', hiragana: 'がくせい'},
        {translation: 'форма (школьная)', hiragana: 'せいふく'},

        {translation: 'школа', hiragana: 'がっこう'},
        {translation: 'университет', hiragana: 'だいがく'},
        {translation: 'детский сад', hiragana: 'ようちえん'},
        {translation: 'учитель', hiragana: 'せんせい'},
        {translation: 'ученик (студент)', hiragana: 'がくせい'},
        {translation: 'форма (школьная)', hiragana: 'せいふく'},

        // местоимения
        {translation: 'я', hiragana: 'わたし'},
        {translation: 'кто', hiragana: 'だれ'},
        {translation: 'когда', hiragana: 'いつ'},
        {translation: 'где', hiragana: 'どこ'},
        {translation: 'ты', hiragana: 'あなた'},

        // прилагательные
        {translation: 'удивительный', hiragana: 'すごい'},
        {translation: 'хороший', hiragana: 'いい'},
        {translation: 'новый', hiragana: 'あたらしい'},
        {translation: 'старый', hiragana: 'ふるい'},
        {translation: 'большой', hiragana: 'おおきい'},
        {translation: 'маленький', hiragana: 'ちいさい'},
        {translation: 'длинный', hiragana: 'ながい'},
        {translation: 'короткий', hiragana: 'みじかい'},
        {translation: 'красный', hiragana: 'あかい'},
        {translation: 'синий', hiragana: 'あおい'},
        {translation: 'белый', hiragana: 'しろい'},
        {translation: 'черный', hiragana: 'くろい'},
        {translation: 'холодная (погода)', hiragana: 'すずしい'},
        {translation: 'тихий, бесшумный', hiragana: 'しずか'},
        {translation: 'горячий (напиток), жаркая (погода)', hiragana: 'あつい'},
        {translation: 'холодный (напиток)', hiragana: 'つめたい'},
        {translation: 'трудный, сложный', hiragana: 'むずかしい'},
        {translation: 'опасный', hiragana: 'あぶない'},

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
        {translation: 'банан', katakana: 'バナナ'},
        {translation: 'гамбургер', katakana: 'ハンバーガー'},
        {translation: 'паста (макароны)', katakana: 'パスタ'},
        {translation: 'сыр', katakana: 'チーズ'},
        {translation: 'колбаса', katakana: 'ソーセージ'},
        {translation: 'книга', katakana: 'ブック'},
        {translation: 'волосы', katakana: 'ヘア'},
        {translation: 'ручка', katakana: 'ペン'},
        {translation: 'сок', katakana: 'ジュース'},
        {translation: 'алкоголь', katakana: 'アルコール'},
        {translation: 'чашка', katakana: 'カップ'},
        {translation: 'стакан', katakana: 'グラス'},
        {translation: 'молоко', katakana: 'ミルク'},
        {translation: 'таракан', katakana: 'ゴキブリ'},
        {translation: 'пингвин', katakana: 'ペンギン'},
        {translation: 'тест (экзамен)', katakana: 'テスト'},
        {translation: 'блокнот', katakana: 'ノート'},
        {translation: 'футбол', katakana: 'フットボール'},
        {translation: 'баскетбол', katakana: 'バスケットボール'},
        {translation: 'мороженое', katakana: 'アイスクリーム'},

        {translation: 'Россия', katakana: 'ロシア'},
        {translation: 'Америка', katakana: 'アメリカ'},
        {translation: 'Великобритания', katakana: 'イギリス'},
    ];
    return words.filter(word => typeof word[kana] != 'undefined' && word[kana].includes(sign));
}

export function getPhrasesBySign(kana: string, sign: string): JapaneseWordOrPhrase[] {
    // TODO
    let phrases: JapaneseWordOrPhrase[] = [
        {translation: 'Доброе утро', hiragana: 'おはようございます'},
        {translation: 'Добрый день', hiragana: 'こんにちは'},
        {translation: 'Добрый вечер', hiragana: 'こんばんは'},
        {translation: 'Спокойной ночи', hiragana: 'お休みなさい'},
        {translation: 'Прощай', hiragana: 'さようなら'},
        {translation: 'Пока', hiragana: 'じゃね'},
        {translation: 'Пока', hiragana: 'またね'},

        {translation: 'Добро пожаловать', hiragana: 'ようこそ'},
        {translation: 'Добро пожаловать домой', hiragana: 'おかえり'},
        {translation: 'С Рождеством!', hiragana: 'めりいくりすます', katakana: 'メリークリスマス'},

        {translation: 'Приятно познакомиться', hiragana: 'おあいできてうれしいです'},
        {translation: 'Как поживаете?', hiragana: 'おげんきですか'},
        {translation: 'Как дела?', hiragana: 'ちょうしはどう？'},

        {translation: 'Спасибо (краткая форма)', hiragana: 'どうも'},
        {translation: 'Большое спасибо', hiragana: 'どうもありがとう'},
        {translation: 'Спасибо (вежливая форма)', hiragana: 'ありがとう'},
        {translation: 'Спасибо (перед едой)', hiragana: 'いただきます'},

        {translation: 'Помогите!', hiragana: '助けて'},
        {translation: 'Простите', hiragana: 'ごめんなさい'},
        {translation: 'Извините', hiragana: 'すみません'},

        {translation: 'Я люблю тебя', hiragana: 'あいしてる'},

        {translation: 'Алло', hiragana: 'もしもし'},

        {translation: 'Я чувствую себя плохо', hiragana: 'きぶんがわるい'},
        {translation: 'Напишите это здесь, пожалуйста', hiragana: 'ここにかいてください'},
        {translation: 'У меня болит живот', hiragana: 'いがいたい'},
        {translation: 'Остановись!', hiragana: 'やめて！'},
        {translation: 'Я не знаю', hiragana: 'しりません'},
        {translation: 'Позвони мне', hiragana: 'でんわしてね'},
        {translation: 'Я не могу в это поверить!', hiragana: 'しんじられない！'},
        {translation: 'Я хотел бы этот', hiragana: 'これがほしいのですが'},
        {translation: 'Я наелся', hiragana: 'おなか いっぱい'},

        {translation: 'Что это?', hiragana: 'これ わ なん です か？'},
        {translation: 'Что вы сказали?', hiragana: 'なんていいましたか？'},
        {translation: 'Что случилось?', hiragana: 'どうした？'},
        {translation: 'Почему?', hiragana: 'どうして？'},
        {translation: 'Что?', hiragana: 'なに？',},
        {translation: 'Как тебя зовут?', hiragana: 'おなまえは？'},
        {translation: 'Сколько тебе лет?', hiragana: 'なんさいですか？'},
        {translation: 'Сколько это будет стоит?', hiragana: 'いくらかかりますか？'},
        {translation: 'Могу ли я присесть здесь?', hiragana: 'ここにすわってもいいですか？'},
        {translation: 'В самом деле?', hiragana: 'ほんと？'},
        {translation: 'Вам помочь?', hiragana: 'ごようでしょうか？'},
        {translation: 'Что-нибудь ещё?', hiragana: 'なにか ほかに あります か？'},
        {translation: 'Можешь скопировать этот файл для меня?', hiragana: 'そのファイルをコピーしてくれますか？'},
    ];
    return phrases.filter(word => typeof word[kana] != 'undefined' && word[kana].includes(sign));
}
