export interface MoveTerm {
  id: string;
  name: string;
  kana: string;
  description: string;
}

export const moveTable: MoveTerm[] = [
  {
    id: "flagging",
    name: "フラッギング",
    kana: "ふらっぎんぐ",
    description: "片足をホールドに乗せず反対側に伸ばし、バランスを取るムーブ。",
  },
  {
    id: "diagonal",
    name: "ダイアゴナル",
    kana: "だいあごなる",
    description: "対角線上の手足(右手と左足など)に重心を置いて体を安定させる基本姿勢。",
  },
  {
    id: "heel-hook",
    name: "ヒール(ヒールフック)",
    kana: "ひーるふっく",
    description: "かかとをホールドに引っ掛けて体を引きつけたり、回転を抑えたりするムーブ。",
  },
  {
    id: "toe-hook",
    name: "トゥー(トゥフック)",
    kana: "とぅふっく",
    description: "つま先の甲側をホールドに引っ掛けて体の振られを抑えるムーブ。",
  },
  {
    id: "match",
    name: "マッチ",
    kana: "まっち",
    description: "同じホールドに両手(または両足)を乗せること。",
  },
  {
    id: "kyon",
    name: "キョン",
    kana: "きょん",
    description: "足を突っ張るように使い、体を押し出す動き。主にカチや壁の隅で使う。",
  },
  {
    id: "lunge",
    name: "ランジ",
    kana: "らんじ",
    description: "大きく跳んで遠いホールドを取りにいくダイナミックなムーブ。",
  },
  {
    id: "deadpoint",
    name: "デッドポイント",
    kana: "でっどぽいんと",
    description: "体が最も高く上がり静止に近づく一瞬を狙ってホールドを取る動き。",
  },
  {
    id: "smearing",
    name: "スメアリング",
    kana: "すめありんぐ",
    description: "ホールドではなく壁面に足裏全体を押し当てて摩擦で立ち込む足使い。",
  },
  {
    id: "gaston",
    name: "ガストン",
    kana: "がすとん",
    description: "縦向きのホールドを、肘を外側に張って押すように引く持ち方。",
  },
  {
    id: "undercling",
    name: "アンダークリング",
    kana: "あんだーくりんぐ",
    description: "下向きのホールドを下から持ち、足を高く上げるために使う持ち方。",
  },
  {
    id: "mantle",
    name: "マントル",
    kana: "まんとる",
    description: "ホールドや棚に手を乗せて体を押し上げ、腕立てのように乗り込む動き。",
  },
];
