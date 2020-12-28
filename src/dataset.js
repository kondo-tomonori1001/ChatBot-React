const defaultDataset = {
  "init": {
      answers: [
          {content: "プロフィールを知りたい！", nextId: "profile"},
          {content: "どんな勉強をしてるの？", nextId: "study"},
          {content: "このchatbotについて知りたい！", nextId: "chatbot"},
          {content: "Twitter、ブログはこちらから〜", nextId: "sns"},
      ],
      question: "こんにちは！KONの自己紹介chatbotです。質問を選んでみてください！",
  },
  "profile": {
      answers: [
          {content: "現在の職業は？", nextId: "work"},
          {content: "家族構成は？", nextId: "family"},
          {content: "エンジニアになる前は何してた？", nextId: "old"},
          {content: "趣味は？", nextId: "like"}
      ],
      question: "なにを聞いてみたいですか？",
  },
  "work": {
      answers: [
          {content: "さらに詳しく！（問合せフォーム）", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "地方のWEB制作会社に勤務してます。主にフロントの実装（HTML,CSS,JS）を担当しています。",
  },
  "family": {
      answers: [
          {content: "さらに詳しく！（問合せフォーム）", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "妻と２歳になる双子の娘と４人暮らしです。日々子育てに追われる毎日です。。",
  },
  "old": {
      answers: [
          {content: "さらに詳しく！（問合せフォーム）", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "建築学科を卒業して地方公務員（建築技術職）を６年間やっていました。建築士の資格も持ってますよ〜",
  },
  "like": {
      answers: [
        {content: "さらに詳しく！（問合せフォーム）", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "キャンプとテニスです！",
  },
  "study": {
      answers: [
          {content: "GitHubを覗いてみる", nextId: "https://github.com/kondo-tomonori1001"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "仕事ではVueを使ったりもしますが、Qinへの入国を機にReactを学び始めました〜",
  },
  "chatbot": {
      answers: [
          {content: "GitHubでソースをみる", nextId: "https://github.com/kondo-tomonori1001/ChatBot-React"},
          {content: "参考にした動画をみる", nextId: "https://www.youtube.com/watch?v=MzJkWO73S70&list=PLX8Rsrpnn3IVOk48awq_nKW0aFP0MGpnn"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "React、Material-UIを用いて作成しています！トラハックさんのReact入門講座を参考にしました〜",
  },
  "sns": {
      answers: [
          {content: "Twitterはこちら", nextId: "https://twitter.com/home?lang=ja"},
          {content: "運営しているブログはこちら", nextId: "https://code-stock.net/"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "日々の学びをアウトプットするためにTwitterとブログを運営しています。",
  },
}

export default defaultDataset