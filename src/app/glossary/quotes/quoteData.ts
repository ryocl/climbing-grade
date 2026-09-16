export interface ClimbingQuote {
  id: string;
  text: string;
  author: string;
}

export const quoteList: ClimbingQuote[] = [
  {
    id: "honnold-fear",
    text: "恐怖はいつもそこにある。大事なのは、それに支配されないことだ。",
    author: "アレックス・オノルド",
  },
  {
    id: "hill-impossible",
    text: "不可能に見えることも、ただ誰もまだ成し遂げていないだけかもしれない。",
    author: "リン・ヒル",
  },
  {
    id: "sharma-fall",
    text: "本気で挑戦していれば、何度も落ちるのは当たり前のことだ。",
    author: "クリス・シャーマ",
  },
  {
    id: "caldwell-patience",
    text: "大きな壁を登るには、強さよりも忍耐が必要になることがある。",
    author: "トミー・コールドウェル",
  },
  {
    id: "chouinard-summit",
    text: "頂上に立つことよりも、そこまでどう登ったかの方が大切だ。",
    author: "イヴォン・シュイナード",
  },
  {
    id: "messner-mountain",
    text: "山は我々を裁かない。ただそこにあり、我々自身を映し出すだけだ。",
    author: "ラインホルト・メスナー",
  },
  {
    id: "bachar-commit",
    text: "一度動き出したら、迷いは足元を危うくする。",
    author: "ジョン・バカー",
  },
  {
    id: "destivelle-freedom",
    text: "岩を登る自由は、地面に立っているだけでは決して分からない。",
    author: "カトリーヌ・デスティヴェル",
  },
  {
    id: "croft-simplicity",
    text: "身軽であるほど、山はより多くのことを教えてくれる。",
    author: "ピーター・クロフト",
  },
  {
    id: "ondra-limit",
    text: "限界だと思った場所こそ、本当の登りが始まる場所だ。",
    author: "アダム・オンドラ",
  },
  {
    id: "gullich-strength",
    text: "強さは筋力だけでなく、諦めない心から生まれる。",
    author: "ヴォルフガング・グリック",
  },
  {
    id: "garnbret-focus",
    text: "壁の前に立てば、他のすべてのことはどうでもよくなる。",
    author: "ヤンヤ・ガーンブレット",
  },
  {
    id: "robbins-style",
    text: "どう登るかは、何を登るかと同じくらい意味を持つ。",
    author: "ロイヤル・ロビンス",
  },
  {
    id: "rodden-doubt",
    text: "自分を疑う気持ちがあっても、次のホールドには手を伸ばせる。",
    author: "ベス・ロッデン",
  },
  {
    id: "steck-preparation",
    text: "山で運に頼らないために、これでもかというほど準備をする。",
    author: "ウーリー・ステック",
  },
  {
    id: "unknown-climb",
    text: "登るという行為そのものが、すでに一つの答えだ。",
    author: "作者不詳",
  },
];

export function getRandomQuote(excludeId?: string): ClimbingQuote {
  const candidates = excludeId
    ? quoteList.filter((quote) => quote.id !== excludeId)
    : quoteList;
  const pool = candidates.length > 0 ? candidates : quoteList;
  return pool[Math.floor(Math.random() * pool.length)];
}
