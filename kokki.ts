export type CountryCode = typeof CountryCodes[number];
export const CountryCodes = [
  "ad", "ae", "af", "ag", "al", "am", "ao", "ar", "at", "au", "az", "ba", "bb", "bd",
  "be", "bf", "bg", "bh", "bi", "bj", "bn", "bo", "br", "bs", "bt", "bw", "by", "bz",
  "ca", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv",
  "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "er", "es", "et",
  "fi", "fj", "fm", "fr", "ga", "gd", "ge", "gh", "gm", "gn", "gq", "gr", "gt", "gw",
  "gy", "hn", "hr", "ht", "hu", "id", "ie", "il", "in", "iq", "ir", "is", "it", "jm",
  "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kr", "ks", "kw", "kz", "la", "lb",
  "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg",
  "mh", "mk", "ml", "mm", "mn", "mr", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na",
  "ne", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pg", "ph",
  "pk", "pl", "pt", "pw", "py", "qa", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd",
  "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "sv", "sy", "sz",
  "td", "tg", "th", "tj", "tl", "tm", "tn", "to", "tr", "tt", "tv", "tz", "ua", "ug",
  "uk", "us", "uy", "uz", "va", "vc", "ve", "vn", "vu", "ws", "ye", "za", "zm", "zw",
] as const;

export interface Kokki {
  data: {
    area: K_Area;
    design: K_Designe;
    symbol: K_Symbol[];
    color: K_Color[];
  };
  name_ja: string;
  name_en: string;
}


export const K_Areas = ["asia", "oceania", "north-america", "south-and-cendival-america", "europe", "middle-east", "africa"] as const;
export type K_Area = typeof K_Areas[number];

export const K_Designes = ["yoko", "tate", "quad", "diagonal", "radial", "t-shape", "yv-shape", "canton", "other"] as const;
export type K_Designe = typeof K_Designes[number];

export const K_Symbols = ["sun", "cross", "moon", "star", "animal-bird", "text", "landscape", "other", "none"] as const;
export type K_Symbol = typeof K_Symbols[number];

export const K_Colors = ["red", "blue", "white", "green", "yellow", "black"] as const;
export type K_Color = typeof K_Colors[number];


/** データ元: https://www.mofa.go.jp/mofaj/kids/kokki/list.html */
export const KOKKI = {
  az: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["moon", "star"],
      color: ["red", "blue", "white", "green"]
    },
    name_ja: "アゼルバイジャン共和国",
    name_en: "Republic of Azerbaijan"
  },
  af: {
    data: {
      area: "middle-east",
      design: "tate",
      symbol: ["text", "landscape"],
      color: ["red", "white", "green", "black"]
    },
    name_ja: "アフガニスタン・イスラム共和国",
    name_en: "Islamic Republic of Afghanistan"
  },
  ae: {
    data: {
      area: "middle-east",
      design: "t-shape",
      symbol: ["none"],
      color: ["red", "white", "green", "black"]
    },
    name_ja: "アラブ首長国連邦",
    name_en: "United Arab Emirates: UAE"
  },
  ar: {
    data: {
      area: "south-and-cendival-america",
      design: "yoko",
      symbol: ["sun"],
      color: ["blue", "white", "yellow"]
    },
    name_ja: "アルゼンチン共和国",
    name_en: "Argentine Republic"
  },
  al: {
    data: {
      area: "europe",
      design: "other",
      symbol: ["animal-bird"],
      color: ["red", "black"]
    },
    name_ja: "アルバニア共和国",
    name_en: "Republic of Albania"
  },
  am: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "blue", "yellow"]
    },
    name_ja: "アルメニア共和国",
    name_en: "Republic of Armenia"
  },
  ao: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["star", "other"],
      color: ["red", "yellow", "black"]
    },
    name_ja: "アンゴラ共和国",
    name_en: "Republic of Angola"
  },
  ag: {
    data: {
      area: "south-and-cendival-america",
      design: "yv-shape",
      symbol: ["sun"],
      color: ["red", "blue", "white", "yellow", "black"]
    },
    name_ja: "アンティグア・バーブーダ",
    name_en: "Antigua and Barbuda"
  },
  ad: {
    data: {
      area: "europe",
      design: "tate",
      symbol: ["animal-bird", "text", "other"],
      color: ["red", "blue", "yellow"]
    },
    name_ja: "アンドラ公国",
    name_en: "Principality of Andorra"
  },
  au: {
    data: {
      area: "oceania",
      design: "canton",
      symbol: ["star"],
      color: ["red", "blue", "white"]
    },
    name_ja: "オーストラリア連邦",
    name_en: "Ausdivalia"
  },
  at: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "white"]
    },
    name_ja: "オーストリア共和国",
    name_en: "Republic of Austria"
  },
  bh: {
    data: {
      area: "middle-east",
      design: "other",
      symbol: ["none"],
      color: ["red", "white"]
    },
    name_ja: "バーレーン王国",
    name_en: "Kingdom of Bahrain"
  },
  bs: {
    data: {
      area: "south-and-cendival-america",
      design: "yv-shape",
      symbol: ["none"],
      color: ["blue", "yellow", "black"]
    },
    name_ja: "バハマ国",
    name_en: "Commonwealth of The Bahamas"
  },
  bb: {
    data: {
      area: "south-and-cendival-america",
      design: "tate",
      symbol: ["other"],
      color: ["blue", "yellow", "black"]
    },
    name_ja: "バルバドス",
    name_en: "Barbados"
  },
  bd: {
    data: {
      area: "asia",
      design: "other",
      symbol: ["sun"],
      color: ["red", "green"]
    },
    name_ja: "バングラデシュ人民共和国",
    name_en: "People's Republic of ,Bangladesh"
  },
  bt: {
    data: {
      area: "asia",
      design: "diagonal",
      symbol: ["animal-bird"],
      color: ["red", "white", "yellow"]
    },
    name_ja: "ブータン王国",
    name_en: "Kingdom of Bhutan"
  },
  br: {
    data: {
      area: "south-and-cendival-america",
      design: "other",
      symbol: ["star", "text"],
      color: ["blue", "white", "green", "yellow"]
    },
    name_ja: "ブラジル連邦共和国",
    name_en: "Federative Republic of Brazil"
  },
  bg: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "white", "green"]
    },
    name_ja: "ブルガリア共和国",
    name_en: "Republic of Bulgaria"
  },
  bf: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["star"],
      color: ["red", "green", "yellow"]
    },
    name_ja: "ブルキナファソ",
    name_en: "Burkina Faso"
  },
  bn: {
    data: {
      area: "asia",
      design: "diagonal",
      symbol: ["moon", "text", "other"],
      color: ["red", "white", "yellow", "black"]
    },
    name_ja: "ブルネイ・ダルサラーム国",
    name_en: "Brunei Darussalam"
  },
  bi: {
    data: {
      area: "africa",
      design: "radial",
      symbol: ["star"],
      color: ["red", "white", "green"]
    },
    name_ja: "ブルンジ共和国",
    name_en: "Republic of Burundi"
  },
  bj: {
    data: {
      area: "africa",
      design: "t-shape",
      symbol: ["none"],
      color: ["red", "green", "yellow"]
    },
    name_ja: "ベナン共和国",
    name_en: "Republic of Benin"
  },
  by: {
    data: {
      area: "europe",
      design: "other",
      symbol: ["other"],
      color: ["red", "white", "green"]
    },
    name_ja: "ベラルーシ共和国",
    name_en: "Republic of Belarus"
  },
  bz: {
    data: {
      area: "south-and-cendival-america",
      design: "yoko",
      symbol: ["animal-bird", "text", "other"],
      color: ["red", "blue", "white"]
    },
    name_ja: "ベリーズ",
    name_en: "Belize"
  },
  be: {
    data: {
      area: "europe",
      design: "tate",
      symbol: ["none"],
      color: ["red", "yellow", "black"]
    },
    name_ja: "ベルギー王国",
    name_en: "Kingdom of Belgium"
  },
  ba: {
    data: {
      area: "europe",
      design: "diagonal",
      symbol: ["star"],
      color: ["blue", "white", "yellow"]
    },
    name_ja: "ボスニア・ヘルツェゴビナ",
    name_en: "Bosnia and Herzegovina"
  },
  bw: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["none"],
      color: ["blue", "white", "black"]
    },
    name_ja: "ボツワナ共和国",
    name_en: "Republic of Botswana"
  },
  bo: {
    data: {
      area: "south-and-cendival-america",
      design: "yoko",
      symbol: ["sun", "star", "animal-bird", "animal-bird", "text", "landscape", "other"],
      color: ["red", "green", "yellow"]
    },
    name_ja: "ボリビア多民族国",
    name_en: "Plurinational State of Bolivia,"
  },
  cv: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["star"],
      color: ["red", "blue", "white", "yellow"]
    },
    name_ja: "カーボベルデ共和国",
    name_en: "Republic of Cabo Verde"
  },
  ca: {
    data: {
      area: "north-america",
      design: "tate",
      symbol: ["other"],
      color: ["red", "white"]
    },
    name_ja: "カナダ",
    name_en: "Canada"
  },
  cm: {
    data: {
      area: "africa",
      design: "tate",
      symbol: ["star"],
      color: ["red", "green", "yellow"]
    },
    name_ja: "カメルーン共和国",
    name_en: "Republic of Cameroon"
  },
  cy: {
    data: {
      area: "europe",
      design: "other",
      symbol: ["landscape", "other"],
      color: ["white", "green", "yellow"]
    },
    name_ja: "キプロス共和国",
    name_en: "Republic of Cyprus"
  },
  cu: {
    data: {
      area: "south-and-cendival-america",
      design: "yv-shape",
      symbol: ["star"],
      color: ["red", "blue", "white"]
    },
    name_ja: "キューバ共和国",
    name_en: "Republic of Cuba"
  },
  ck: {
    data: {
      area: "oceania",
      design: "canton",
      symbol: ["star"],
      color: ["red", "blue", "white"]
    },
    name_ja: "クック諸島",
    name_en: "Cook Islands"
  },
  ci: {
    data: {
      area: "africa",
      design: "tate",
      symbol: ["none"],
      color: ["white", "green", "yellow"]
    },
    name_ja: "コートジボワール共和国",
    name_en: "Republic of Cote d'Ivoire"
  },
  cr: {
    data: {
      area: "south-and-cendival-america",
      design: "yoko",
      symbol: ["sun", "star", "text", "landscape"],
      color: ["red", "blue", "white"]
    },
    name_ja: "コスタリカ共和国",
    name_en: "Republic of Costa Rica"
  },
  co: {
    data: {
      area: "south-and-cendival-america",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "blue", "yellow"]
    },
    name_ja: "コロンビア共和国",
    name_en: "Republic of Colombia"
  },
  cg: {
    data: {
      area: "africa",
      design: "diagonal",
      symbol: ["none"],
      color: ["red", "green", "yellow"]
    },
    name_ja: "コンゴ共和国",
    name_en: "Republic of Congo"
  },
  cd: {
    data: {
      area: "africa",
      design: "diagonal",
      symbol: ["star"],
      color: ["red", "blue", "yellow"]
    },
    name_ja: "コンゴ民主共和国",
    name_en: "Democratic Republic of the Con,go"
  },
  ch: {
    data: {
      area: "europe",
      design: "other",
      symbol: ["cross"],
      color: ["red", "white"]
    },
    name_ja: "スイス連邦",
    name_en: "Swiss Confederation"
  },
  cz: {
    data: {
      area: "europe",
      design: "yv-shape",
      symbol: ["none"],
      color: ["red", "blue", "white"]
    },
    name_ja: "チェコ共和国",
    name_en: "Czech Republic"
  },
  cf: {
    data: {
      area: "africa",
      design: "other",
      symbol: ["star"],
      color: ["red", "blue", "white", "green", "yellow"]
    },
    name_ja: "中央アフリカ共和国",
    name_en: "Cendival African Republic"
  },
  cn: {
    data: {
      area: "asia",
      design: "other",
      symbol: ["star"],
      color: ["red", "yellow"]
    },
    name_ja: "中華人民共和国",
    name_en: "People's Republic of ,China"
  },
  cl: {
    data: {
      area: "south-and-cendival-america",
      design: "canton",
      symbol: ["star"],
      color: ["red", "blue", "white"]
    },
    name_ja: "チリ共和国",
    name_en: "Republic of Chile"
  },
  dz: {
    data: {
      area: "africa",
      design: "tate",
      symbol: ["moon", "star"],
      color: ["red", "white", "green"]
    },
    name_ja: "アルジェリア民主人民共和国",
    name_en: "People' s Democratic Republic ,of Algeria"
  },
  dj: {
    data: {
      area: "africa",
      design: "yv-shape",
      symbol: ["star"],
      color: ["red", "blue", "white", "green"]
    },
    name_ja: "ジブチ共和国",
    name_en: "Republic of Djibouti"
  },
  dk: {
    data: {
      area: "europe",
      design: "quad",
      symbol: ["cross"],
      color: ["red", "white"]
    },
    name_ja: "デンマーク王国",
    name_en: "Kingdom of Denmark"
  },
  de: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "yellow", "black"]
    },
    name_ja: "ドイツ連邦共和国",
    name_en: "Federal Republic of Germany"
  },
  dm: {
    data: {
      area: "south-and-cendival-america",
      design: "quad",
      symbol: ["cross", "star", "animal-bird"],
      color: ["red", "white", "green", "yellow", "black"]
    },
    name_ja: "ドミニカ国",
    name_en: "Commonwealth of Dominica"
  },
  do: {
    data: {
      area: "south-and-cendival-america",
      design: "quad",
      symbol: ["cross", "text", "other"],
      color: ["red", "blue", "white"]
    },
    name_ja: "ドミニカ共和国",
    name_en: "Dominican Republic"
  },
  ec: {
    data: {
      area: "south-and-cendival-america",
      design: "yoko",
      symbol: ["sun", "animal-bird", "landscape", "other"],
      color: ["red", "blue", "yellow"]
    },
    name_ja: "エクアドル共和国",
    name_en: "Republic of Ecuador"
  },
  eg: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["animal-bird", "text"],
      color: ["red", "white", "yellow", "black"]
    },
    name_ja: "エジプト・アラブ共和国",
    name_en: "Arab Republic of Egypt"
  },
  ee: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["blue", "white", "black"]
    },
    name_ja: "エストニア共和国",
    name_en: "Republic of Estonia"
  },
  et: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["star"],
      color: ["red", "blue", "green", "yellow"]
    },
    name_ja: "エチオピア連邦民主共和国",
    name_en: "Federal Democratic Republic of, Ethiopia"
  },
  er: {
    data: {
      area: "africa",
      design: "yv-shape",
      symbol: ["other"],
      color: ["red", "blue", "green", "yellow"]
    },
    name_ja: "エリトリア国",
    name_en: "State of Eridivea"
  },
  es: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["animal-bird", "landscape", "other"],
      color: ["red", "yellow"]
    },
    name_ja: "スペイン王国",
    name_en: "Kingdom of Spain"
  },
  fj: {
    data: {
      area: "oceania",
      design: "canton",
      symbol: ["animal-bird", "animal-bird", "other"],
      color: ["red", "blue", "white"]
    },
    name_ja: "フィジー共和国",
    name_en: "Republic of Fiji"
  },
  fi: {
    data: {
      area: "europe",
      design: "quad",
      symbol: ["cross"],
      color: ["blue", "white"]
    },
    name_ja: "フィンランド共和国",
    name_en: "Republic of Finland"
  },
  fr: {
    data: {
      area: "europe",
      design: "tate",
      symbol: ["none"],
      color: ["red", "blue", "white"]
    },
    name_ja: "フランス共和国",
    name_en: "French Republic"
  },
  fm: {
    data: {
      area: "oceania",
      design: "other",
      symbol: ["star"],
      color: ["blue", "white"]
    },
    name_ja: "ミクロネシア連邦",
    name_en: "Federated States of M,icronesia"
  },
  gh: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["star"],
      color: ["red", "green", "yellow", "black"]
    },
    name_ja: "ガーナ共和国",
    name_en: "Republic of Ghana"
  },
  gy: {
    data: {
      area: "south-and-cendival-america",
      design: "yv-shape",
      symbol: ["none"],
      color: ["red", "white", "green", "yellow", "black"]
    },
    name_ja: "ガイアナ協同共和国",
    name_en: "Co-operative Republic of Guyana"
  },
  ga: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["none"],
      color: ["blue", "green", "yellow"]
    },
    name_ja: "ガボン共和国",
    name_en: "Gabonese Republic"
  },
  gm: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "blue", "white", "green"]
    },
    name_ja: "ガンビア共和国",
    name_en: "Republic of The Gambia"
  },
  gn: {
    data: {
      area: "africa",
      design: "tate",
      symbol: ["none"],
      color: ["red", "green", "yellow"]
    },
    name_ja: "ギニア共和国",
    name_en: "Republic of Guinea"
  },
  gw: {
    data: {
      area: "africa",
      design: "t-shape",
      symbol: ["star"],
      color: ["red", "green", "yellow", "black"]
    },
    name_ja: "ギニアビサウ共和国",
    name_en: "Republic of Guinea-Bissau"
  },
  gr: {
    data: {
      area: "europe",
      design: "canton",
      symbol: ["cross"],
      color: ["blue", "white"]
    },
    name_ja: "ギリシャ共和国",
    name_en: "Hellenic Republic"
  },
  gt: {
    data: {
      area: "south-and-cendival-america",
      design: "tate",
      symbol: ["animal-bird", "text", "other"],
      color: ["blue", "white"]
    },
    name_ja: "グアテマラ共和国",
    name_en: "Republic of Guatemala,"
  },
  gd: {
    data: {
      area: "south-and-cendival-america",
      design: "radial",
      symbol: ["star", "other"],
      color: ["red", "green", "yellow"]
    },
    name_ja: "グレナダ",
    name_en: "Grenada"
  },
  ge: {
    data: {
      area: "europe",
      design: "quad",
      symbol: ["cross"],
      color: ["red", "white"]
    },
    name_ja: "ジョージア",
    name_en: "Georgia"
  },
  gq: {
    data: {
      area: "africa",
      design: "yv-shape",
      symbol: ["star", "text", "other"],
      color: ["red", "blue", "white", "green"]
    },
    name_ja: "赤道ギニア共和国",
    name_en: "Republic of Equatorial Guinea"
  },
  hr: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["moon", "star", "animal-bird"],
      color: ["red", "blue", "white"]
    },
    name_ja: "クロアチア共和国",
    name_en: "Republic of Croatia"
  },
  ht: {
    data: {
      area: "south-and-cendival-america",
      design: "yoko",
      symbol: ["text", "other"],
      color: ["red", "blue"]
    },
    name_ja: "ハイチ共和国",
    name_en: "Republic of Haiti"
  },
  hu: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "white", "green"]
    },
    name_ja: "ハンガリー",
    name_en: "Hungary"
  },
  hn: {
    data: {
      area: "south-and-cendival-america",
      design: "yoko",
      symbol: ["star"],
      color: ["blue", "white"]
    },
    name_ja: "ホンジュラス共和国",
    name_en: "Republic of Honduras"
  },
  is: {
    data: {
      area: "europe",
      design: "quad",
      symbol: ["cross"],
      color: ["red", "blue", "white"]
    },
    name_ja: "アイスランド",
    name_en: "Iceland"
  },
  ie: {
    data: {
      area: "europe",
      design: "tate",
      symbol: ["none"],
      color: ["white", "green", "yellow"]
    },
    name_ja: "アイルランド",
    name_en: "Ireland"
  },
  il: {
    data: {
      area: "middle-east",
      design: "yoko",
      symbol: ["star"],
      color: ["blue", "white"]
    },
    name_ja: "イスラエル国",
    name_en: "State of Israel"
  },
  it: {
    data: {
      area: "europe",
      design: "tate",
      symbol: ["none"],
      color: ["red", "white", "green"]
    },
    name_ja: "イタリア共和国",
    name_en: "Italian Republic"
  },
  iq: {
    data: {
      area: "middle-east",
      design: "yoko",
      symbol: ["text"],
      color: ["red", "white", "green", "black"]
    },
    name_ja: "イラク共和国",
    name_en: "Republic of Iraq"
  },
  ir: {
    data: {
      area: "middle-east",
      design: "yoko",
      symbol: ["moon", "text", "other"],
      color: ["red", "white", "green"]
    },
    name_ja: "イラン・イスラム共和国",
    name_en: "Islamic Republic of Iran"
  },
  in: {
    data: {
      area: "asia",
      design: "yoko",
      symbol: ["other"],
      color: ["blue", "white", "green", "yellow"]
    },
    name_ja: "インド共和国",
    name_en: "Republic of India"
  },
  id: {
    data: {
      area: "asia",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "white"]
    },
    name_ja: "インドネシア共和国",
    name_en: "Republic of Indonesia,"
  },
  jm: {
    data: {
      area: "south-and-cendival-america",
      design: "radial",
      symbol: ["none"],
      color: ["green", "yellow", "black"]
    },
    name_ja: "ジャマイカ",
    name_en: "Jamaica"
  },
  jp: {
    data: {
      area: "asia",
      design: "other",
      symbol: ["sun"],
      color: ["red", "white"]
    },
    name_ja: "日本",
    name_en: "Japan"
  },
  jo: {
    data: {
      area: "middle-east",
      design: "yv-shape",
      symbol: ["star"],
      color: ["red", "white", "green", "black"]
    },
    name_ja: "ヨルダン",
    name_en: "Jordan"
  },
  kz: {
    data: {
      area: "europe",
      design: "other",
      symbol: ["sun", "animal-bird", "other"],
      color: ["blue", "yellow"]
    },
    name_ja: "カザフスタン共和国",
    name_en: "Republic of Kazakhsta,n"
  },
  kh: {
    data: {
      area: "asia",
      design: "yoko",
      symbol: ["landscape"],
      color: ["red", "blue", "white"]
    },
    name_ja: "カンボジア王国",
    name_en: "Kingdom of Cambodia"
  },
  ki: {
    data: {
      area: "oceania",
      design: "other",
      symbol: ["sun", "animal-bird", "landscape"],
      color: ["red", "blue", "white", "yellow"]
    },
    name_ja: "キリバス共和国",
    name_en: "Republic of Kiribati"
  },
  kg: {
    data: {
      area: "europe",
      design: "other",
      symbol: ["sun", "other"],
      color: ["red", "yellow"]
    },
    name_ja: "キルギス共和国",
    name_en: "Kyrgyz Republic"
  },
  kw: {
    data: {
      area: "middle-east",
      design: "other",
      symbol: ["none"],
      color: ["red", "white", "green", "black"]
    },
    name_ja: "クウェート国",
    name_en: "State of Kuwait"
  },
  ke: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["other"],
      color: ["red", "white", "green", "black"]
    },
    name_ja: "ケニア共和国",
    name_en: "Republic of Kenya"
  },
  ks: {
    data: {
      area: "europe",
      design: "other",
      symbol: ["star", "landscape"],
      color: ["blue", "white", "yellow"]
    },
    name_ja: "コソボ共和国",
    name_en: "Republic of Kosovo"
  },
  km: {
    data: {
      area: "africa",
      design: "yv-shape",
      symbol: ["moon", "star"],
      color: ["red", "blue", "white", "green", "yellow"]
    },
    name_ja: "コモロ連合",
    name_en: "Union of Comoros"
  },
  kn: {
    data: {
      area: "south-and-cendival-america",
      design: "diagonal",
      symbol: ["star"],
      color: ["red", "white", "green", "yellow", "black"]
    },
    name_ja: "セントクリストファー・ネービス",
    name_en: "Saint Christopher and Nevis"
  },
  kr: {
    data: {
      area: "asia",
      design: "other",
      symbol: ["other"],
      color: ["red", "blue", "white", "black"]
    },
    name_ja: "大韓民国",
    name_en: "Republic of Korea"
  },
  lk: {
    data: {
      area: "asia",
      design: "other",
      symbol: ["animal-bird", "other"],
      color: ["red", "green", "yellow"]
    },
    name_ja: "スリランカ民主社会主義共和国",
    name_en: "Democratic Socialist Republic ,of Sri Lanka"
  },
  lc: {
    data: {
      area: "south-and-cendival-america",
      design: "other",
      symbol: ["landscape"],
      color: ["blue", "white", "yellow", "black"]
    },
    name_ja: "セントルシア",
    name_en: "Saint Lucia"
  },
  la: {
    data: {
      area: "asia",
      design: "yoko",
      symbol: ["moon"],
      color: ["red", "blue", "white"]
    },
    name_ja: "ラオス人民民主共和国",
    name_en: "Lao People's Democratic Republ,ic"
  },
  lv: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "white"]
    },
    name_ja: "ラトビア共和国",
    name_en: "Republic of Latvia"
  },
  lt: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "green", "yellow"]
    },
    name_ja: "リトアニア共和国",
    name_en: "Republic of Lithuania"
  },
  ly: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["moon", "star"],
      color: ["red", "white", "green", "black"]
    },
    name_ja: "リビア",
    name_en: "Libya"
  },
  li: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["other"],
      color: ["red", "blue", "yellow"]
    },
    name_ja: "リヒテンシュタイン公国",
    name_en: "Principality of Liechtenstein"
  },
  lr: {
    data: {
      area: "africa",
      design: "canton",
      symbol: ["star"],
      color: ["red", "blue", "white"]
    },
    name_ja: "リベリア共和国",
    name_en: "Republic of Liberia"
  },
  lu: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "blue", "white"]
    },
    name_ja: "ルクセンブルク大公国",
    name_en: "Grand Duchy of Luxembourg"
  },
  ls: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["other"],
      color: ["blue", "white", "green", "black"]
    },
    name_ja: "レソト王国",
    name_en: "Kingdom of Lesotho"
  },
  lb: {
    data: {
      area: "middle-east",
      design: "yoko",
      symbol: ["other"],
      color: ["red", "white", "green"]
    },
    name_ja: "レバノン共和国",
    name_en: "Lebanese Republic"
  },
  mk: {
    data: {
      area: "europe",
      design: "radial",
      symbol: ["sun"],
      color: ["red", "yellow"]
    },
    name_ja: "北マケドニア共和国",
    name_en: "Republic of North Mac,edonia"
  },
  mh: {
    data: {
      area: "oceania",
      design: "diagonal",
      symbol: ["star"],
      color: ["blue", "white", "yellow"]
    },
    name_ja: "マーシャル諸島共和国",
    name_en: "Republic of the Marshall Islan,ds"
  },
  mg: {
    data: {
      area: "africa",
      design: "t-shape",
      symbol: ["none"],
      color: ["red", "white", "green"]
    },
    name_ja: "マダガスカル共和国",
    name_en: "Republic of Madagascar"
  },
  mw: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["sun"],
      color: ["red", "green", "black"]
    },
    name_ja: "マラウイ共和国",
    name_en: "Republic of Malawi"
  },
  ml: {
    data: {
      area: "africa",
      design: "tate",
      symbol: ["none"],
      color: ["red", "green", "yellow"]
    },
    name_ja: "マリ共和国",
    name_en: "Republic of Mali"
  },
  mt: {
    data: {
      area: "europe",
      design: "tate",
      symbol: ["cross", "animal-bird", "text"],
      color: ["red", "white"]
    },
    name_ja: "マルタ共和国",
    name_en: "Republic of Malta"
  },
  my: {
    data: {
      area: "asia",
      design: "canton",
      symbol: ["moon", "star"],
      color: ["red", "blue", "white", "yellow"]
    },
    name_ja: "マレーシア",
    name_en: "Malaysia"
  },
  mm: {
    data: {
      area: "asia",
      design: "yoko",
      symbol: ["star"],
      color: ["red", "white", "green", "yellow"]
    },
    name_ja: "ミャンマー連邦共和国",
    name_en: "Republic of the Union of Myanmar"
  },
  mx: {
    data: {
      area: "south-and-cendival-america",
      design: "tate",
      symbol: ["animal-bird", "other"],
      color: ["red", "white", "green"]
    },
    name_ja: "メキシコ合衆国",
    name_en: "United Mexican States"
  },
  mu: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "blue", "green", "yellow"]
    },
    name_ja: "モーリシャス共和国",
    name_en: "Republic of Mauritius"
  },
  mr: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["moon", "star"],
      color: ["red", "green", "yellow"]
    },
    name_ja: "モーリタニア・イスラム共和国",
    name_en: "Islamic Republic of Mauritania,"
  },
  mz: {
    data: {
      area: "africa",
      design: "yv-shape",
      symbol: ["star", "other"],
      color: ["red", "white", "green", "yellow", "black"]
    },
    name_ja: "モザンビーク共和国",
    name_en: "Republic of Mozambique"
  },
  mc: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "white"]
    },
    name_ja: "モナコ公国",
    name_en: "Principality of Monac,o"
  },
  mv: {
    data: {
      area: "asia",
      design: "other",
      symbol: ["moon"],
      color: ["red", "white", "green"]
    },
    name_ja: "モルディブ共和国",
    name_en: "Republic of Maldives"
  },
  md: {
    data: {
      area: "europe",
      design: "tate",
      symbol: ["cross", "moon", "star", "animal-bird", "other"],
      color: ["red", "blue", "yellow"]
    },
    name_ja: "モルドバ共和国",
    name_en: "Republic of Moldova"
  },
  ma: {
    data: {
      area: "africa",
      design: "other",
      symbol: ["star"],
      color: ["red", "green"]
    },
    name_ja: "モロッコ王国",
    name_en: "Kingdom of Morocco"
  },
  mn: {
    data: {
      area: "asia",
      design: "tate",
      symbol: ["other"],
      color: ["red", "blue", "yellow"]
    },
    name_ja: "モンゴル国",
    name_en: "Mongolia"
  },
  me: {
    data: {
      area: "europe",
      design: "other",
      symbol: ["cross", "animal-bird", "other"],
      color: ["red", "yellow"]
    },
    name_ja: "モンテネグロ",
    name_en: "Montenegro"
  },
  nl: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "blue", "white"]
    },
    name_ja: "オランダ王国",
    name_en: "Kingdom of the Netherlands"
  },
  ng: {
    data: {
      area: "africa",
      design: "tate",
      symbol: ["none"],
      color: ["white", "green"]
    },
    name_ja: "ナイジェリア連邦共和国",
    name_en: "Federal Republic of N,igeria"
  },
  nr: {
    data: {
      area: "oceania",
      design: "yoko",
      symbol: ["star"],
      color: ["blue", "white", "yellow"]
    },
    name_ja: "ナウル共和国",
    name_en: "Republic of Nauru"
  },
  na: {
    data: {
      area: "africa",
      design: "diagonal",
      symbol: ["sun"],
      color: ["red", "blue", "white", "green", "yellow"]
    },
    name_ja: "ナミビア共和国",
    name_en: "Republic of Namibia"
  },
  nu: {
    data: {
      area: "oceania",
      design: "canton",
      symbol: ["star"],
      color: ["red", "blue", "white", "yellow"]
    },
    name_ja: "ニウエ",
    name_en: "Niue"
  },
  ni: {
    data: {
      area: "south-and-cendival-america",
      design: "yoko",
      symbol: ["text", "landscape"],
      color: ["blue", "white"]
    },
    name_ja: "ニカラグア共和国",
    name_en: "Republic of Nicaragua,"
  },
  ne: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["sun"],
      color: ["white", "green", "yellow"]
    },
    name_ja: "ニジェール共和国",
    name_en: "Republic of Niger"
  },
  nz: {
    data: {
      area: "oceania",
      design: "canton",
      symbol: ["star"],
      color: ["red", "blue", "white"]
    },
    name_ja: "ニュージーランド",
    name_en: "New Zealand"
  },
  np: {
    data: {
      area: "asia",
      design: "other",
      symbol: ["sun", "moon"],
      color: ["red", "blue", "white"]
    },
    name_ja: "ネパール",
    name_en: "Nepal"
  },
  no: {
    data: {
      area: "europe",
      design: "quad",
      symbol: ["cross"],
      color: ["red", "blue", "white"]
    },
    name_ja: "ノルウェー王国",
    name_en: "Kingdom of Norway"
  },
  om: {
    data: {
      area: "middle-east",
      design: "t-shape",
      symbol: ["other"],
      color: ["red", "white", "green"]
    },
    name_ja: "オマーン国",
    name_en: "Siltane of Oman"
  },
  pk: {
    data: {
      area: "asia",
      design: "tate",
      symbol: ["moon", "star"],
      color: ["white", "green"]
    },
    name_ja: "パキスタン・イスラム共和国",
    name_en: "Isamic Republic of Pa,kistan"
  },
  pa: {
    data: {
      area: "south-and-cendival-america",
      design: "quad",
      symbol: ["star"],
      color: ["red", "blue", "white"]
    },
    name_ja: "パナマ共和国",
    name_en: "Republic of Panama"
  },
  pg: {
    data: {
      area: "oceania",
      design: "diagonal",
      symbol: ["star", "animal-bird"],
      color: ["red", "white", "yellow", "black"]
    },
    name_ja: "パプアニューギニア独立国",
    name_en: "Independent State of Papua New Guinea"
  },
  pw: {
    data: {
      area: "oceania",
      design: "other",
      symbol: ["moon"],
      color: ["blue", "yellow"]
    },
    name_ja: "パラオ共和国",
    name_en: "Republic of Palau"
  },
  py: {
    data: {
      area: "south-and-cendival-america",
      design: "yoko",
      symbol: ["star", "text", "other"],
      color: ["red", "blue", "white"]
    },
    name_ja: "パラグアイ共和国",
    name_en: "Republic of Paraguay"
  },
  ph: {
    data: {
      area: "asia",
      design: "yv-shape",
      symbol: ["sun", "star"],
      color: ["red", "blue", "white", "yellow"]
    },
    name_ja: "フィリピン共和国",
    name_en: "Republic of the Philippines"
  },
  pe: {
    data: {
      area: "south-and-cendival-america",
      design: "tate",
      symbol: ["none"],
      color: ["red", "white"]
    },
    name_ja: "ペルー共和国",
    name_en: "Republic of Peru"
  },
  pl: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "white"]
    },
    name_ja: "ポーランド共和国",
    name_en: "Republic of Poland"
  },
  pt: {
    data: {
      area: "europe",
      design: "tate",
      symbol: ["other"],
      color: ["red", "green", "yellow"]
    },
    name_ja: "ポルトガル共和国",
    name_en: "Portuguese Republic"
  },
  qa: {
    data: {
      area: "middle-east",
      design: "other",
      symbol: ["none"],
      color: ["red", "white"]
    },
    name_ja: "カタール国",
    name_en: "State of Qatar"
  },
  rs: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["animal-bird", "other"],
      color: ["red", "blue", "white"]
    },
    name_ja: "セルビア共和国",
    name_en: "Republic of Serbia"
  },
  ro: {
    data: {
      area: "europe",
      design: "tate",
      symbol: ["none"],
      color: ["red", "blue", "yellow"]
    },
    name_ja: "ルーマニア",
    name_en: "Romania"
  },
  rw: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["sun"],
      color: ["blue", "green", "yellow"]
    },
    name_ja: "ルワンダ共和国",
    name_en: "Republic of Rwanda"
  },
  ru: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "blue", "white"]
    },
    name_ja: "ロシア連邦",
    name_en: "Russian Federation"
  },
  sz: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["other"],
      color: ["red", "blue", "white", "yellow", "black"]
    },
    name_ja: "エスワティニ王国（旧国名：スワジランド王国）",
    name_en: "Kingdom of Eswatini"
  },
  sv: {
    data: {
      area: "south-and-cendival-america",
      design: "yoko",
      symbol: ["text", "landscape", "other"],
      color: ["blue", "white"]
    },
    name_ja: "エルサルバドル共和国",
    name_en: "Republic of El Salvad,or"
  },
  sa: {
    data: {
      area: "middle-east",
      design: "other",
      symbol: ["text", "other"],
      color: ["white", "green"]
    },
    name_ja: "サウジアラビア王国",
    name_en: "Kingdom of Saudi Arab,ia"
  },
  st: {
    data: {
      area: "africa",
      design: "yv-shape",
      symbol: ["star"],
      color: ["red", "green", "yellow", "black"]
    },
    name_ja: "サントメ・プリンシペ民主共和国",
    name_en: "Democratic Republic of Sao Tome, and Principe"
  },
  sm: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["text", "landscape", "other"],
      color: ["blue", "white"]
    },
    name_ja: "サンマリノ共和国",
    name_en: "Republic of San Marin,o"
  },
  sl: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["none"],
      color: ["blue", "white", "green"]
    },
    name_ja: "シエラレオネ共和国",
    name_en: "Republic of Sierra Leone"
  },
  sy: {
    data: {
      area: "middle-east",
      design: "yoko",
      symbol: ["star"],
      color: ["red", "white", "green", "black"]
    },
    name_ja: "シリア・アラブ共和国",
    name_en: "Syrian Arab Republic"
  },
  sg: {
    data: {
      area: "asia",
      design: "yoko",
      symbol: ["moon", "star"],
      color: ["red", "white"]
    },
    name_ja: "シンガポール共和国",
    name_en: "Republic of Singapore,"
  },
  se: {
    data: {
      area: "europe",
      design: "quad",
      symbol: ["cross"],
      color: ["blue", "yellow"]
    },
    name_ja: "スウェーデン王国",
    name_en: "Kingdom of Sweden"
  },
  sd: {
    data: {
      area: "africa",
      design: "yv-shape",
      symbol: ["none"],
      color: ["red", "white", "green", "black"]
    },
    name_ja: "スーダン共和国",
    name_en: "The Republic of the Sudan"
  },
  sr: {
    data: {
      area: "south-and-cendival-america",
      design: "yoko",
      symbol: ["star"],
      color: ["red", "white", "green", "yellow"]
    },
    name_ja: "スリナム共和国",
    name_en: "Republic of Suriname"
  },
  sk: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["cross", "landscape"],
      color: ["red", "blue", "white"]
    },
    name_ja: "スロバキア共和国",
    name_en: "Slovak Republic"
  },
  si: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["star", "landscape"],
      color: ["red", "blue", "white"]
    },
    name_ja: "スロベニア共和国",
    name_en: "Republic of Slovenia"
  },
  sc: {
    data: {
      area: "africa",
      design: "other",
      symbol: ["none"],
      color: ["red", "blue", "white", "green", "yellow"]
    },
    name_ja: "セーシェル共和国",
    name_en: "Republic of Seychelles"
  },
  sn: {
    data: {
      area: "africa",
      design: "tate",
      symbol: ["star"],
      color: ["red", "green", "yellow"]
    },
    name_ja: "セネガル共和国",
    name_en: "Republic of Senegal"
  },
  so: {
    data: {
      area: "africa",
      design: "other",
      symbol: ["star"],
      color: ["blue", "white"]
    },
    name_ja: "ソマリア連邦共和国",
    name_en: "Federal Republic of S,omalia"
  },
  sb: {
    data: {
      area: "oceania",
      design: "diagonal",
      symbol: ["star"],
      color: ["blue", "white", "green", "yellow"]
    },
    name_ja: "ソロモン諸島",
    name_en: "Solomon Islands"
  },
  ss: {
    data: {
      area: "africa",
      design: "yv-shape",
      symbol: ["star"],
      color: ["red", "blue", "white", "green", "yellow", "black"]
    },
    name_ja: "南スーダン共和国",
    name_en: "The Republic of South Sudan"
  },
  th: {
    data: {
      area: "asia",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "blue", "white"]
    },
    name_ja: "タイ王国",
    name_en: "Kingdom of Thailand"
  },
  tj: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["star", "other"],
      color: ["red", "white", "green", "yellow"]
    },
    name_ja: "タジキスタン共和国",
    name_en: "Republic of Tajikistan"
  },
  tz: {
    data: {
      area: "africa",
      design: "diagonal",
      symbol: ["none"],
      color: ["blue", "green", "yellow", "black"]
    },
    name_ja: "タンザニア連合共和国",
    name_en: "United Republic of Tanzania"
  },
  td: {
    data: {
      area: "africa",
      design: "tate",
      symbol: ["none"],
      color: ["red", "blue", "yellow"]
    },
    name_ja: "チャド共和国",
    name_en: "Republic of Chad"
  },
  tn: {
    data: {
      area: "africa",
      design: "other",
      symbol: ["sun", "moon", "star"],
      color: ["red", "white"]
    },
    name_ja: "チュニジア共和国",
    name_en: "Republic of Tunisia"
  },
  tv: {
    data: {
      area: "oceania",
      design: "canton",
      symbol: ["star"],
      color: ["red", "blue", "white", "yellow"]
    },
    name_ja: "ツバル",
    name_en: "Tuvalu"
  },
  tg: {
    data: {
      area: "africa",
      design: "canton",
      symbol: ["star"],
      color: ["red", "white", "green", "yellow"]
    },
    name_ja: "トーゴ共和国",
    name_en: "Republic of Togo"
  },
  tt: {
    data: {
      area: "south-and-cendival-america",
      design: "diagonal",
      symbol: ["none"],
      color: ["red", "white", "black"]
    },
    name_ja: "トリニダード・トバゴ共和国",
    name_en: "Republic of Trinidad and Tobag,o"
  },
  tm: {
    data: {
      area: "europe",
      design: "other",
      symbol: ["moon", "star", "other"],
      color: ["red", "white", "green", "yellow"]
    },
    name_ja: "トルクメニスタン",
    name_en: "Turkmenistan"
  },
  tr: {
    data: {
      area: "middle-east",
      design: "other",
      symbol: ["moon", "star"],
      color: ["red", "white"]
    },
    name_ja: "トルコ共和国",
    name_en: "Republic of Turkey"
  },
  to: {
    data: {
      area: "oceania",
      design: "canton",
      symbol: ["cross"],
      color: ["red", "white"]
    },
    name_ja: "トンガ王国",
    name_en: "Kingdom of Tonga"
  },
  tl: {
    data: {
      area: "asia",
      design: "yv-shape",
      symbol: ["star"],
      color: ["red", "white", "yellow", "black"]
    },
    name_ja: "東ティモール民主共和国",
    name_en: "The Democratic Republic of Tim,or-Leste"
  },
  us: {
    data: {
      area: "north-america",
      design: "canton",
      symbol: ["star"],
      color: ["red", "blue", "white"]
    },
    name_ja: "アメリカ合衆国",
    name_en: "United States of America"
  },
  ug: {
    data: {
      area: "africa",
      design: "yoko",
      symbol: ["animal-bird"],
      color: ["red", "white", "yellow", "black"]
    },
    name_ja: "ウガンダ共和国",
    name_en: "Republic of Uganda"
  },
  ua: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["none"],
      color: ["blue", "yellow"]
    },
    name_ja: "ウクライナ",
    name_en: "Ukraine"
  },
  uz: {
    data: {
      area: "europe",
      design: "yoko",
      symbol: ["moon", "star"],
      color: ["red", "blue", "white", "green"]
    },
    name_ja: "ウズベキスタン共和国",
    name_en: "Republic of Uzbekistan"
  },
  uy: {
    data: {
      area: "south-and-cendival-america",
      design: "canton",
      symbol: ["sun"],
      color: ["blue", "white", "yellow"]
    },
    name_ja: "ウルグアイ東方共和国",
    name_en: "Oriental Republic of Uruguay"
  },
  uk: {
    data: {
      area: "europe",
      design: "radial",
      symbol: ["none"],
      color: ["red", "blue", "white"]
    },
    name_ja: "英国（グレートブリテン及び北アイルランド連合王国）",
    name_en: "United Kingdom of Great Britai,n and Northern Ireland"
  },
  vc: {
    data: {
      area: "south-and-cendival-america",
      design: "tate",
      symbol: ["other"],
      color: ["blue", "green", "yellow"]
    },
    name_ja: "セントビンセント及びグレナディーン諸島",
    name_en: "Saint Vincent and the Grenadin,es"
  },
  va: {
    data: {
      area: "europe",
      design: "tate",
      symbol: ["cross", "other"],
      color: ["white", "yellow"]
    },
    name_ja: "バチカン",
    name_en: "Vatican"
  },
  vu: {
    data: {
      area: "oceania",
      design: "yv-shape",
      symbol: ["animal-bird", "other"],
      color: ["red", "green", "yellow", "black"]
    },
    name_ja: "バヌアツ共和国",
    name_en: "Republic of Vanuatu"
  },
  vn: {
    data: {
      area: "asia",
      design: "other",
      symbol: ["star"],
      color: ["red", "yellow"]
    },
    name_ja: "ベトナム社会主義共和国",
    name_en: "Socialist Republic of, Viet Nam"
  },
  ve: {
    data: {
      area: "south-and-cendival-america",
      design: "yoko",
      symbol: ["star", "animal-bird", "text", "other"],
      color: ["red", "blue", "white", "yellow"]
    },
    name_ja: "ベネズエラ・ボリバル共和国",
    name_en: "Bolivarian Republic of Venezuela"
  },
  ws: {
    data: {
      area: "oceania",
      design: "canton",
      symbol: ["star"],
      color: ["red", "blue", "white"]
    },
    name_ja: "サモア独立国",
    name_en: "Independent State of Samoa"
  },
  ye: {
    data: {
      area: "middle-east",
      design: "yoko",
      symbol: ["none"],
      color: ["red", "white", "black"]
    },
    name_ja: "イエメン共和国",
    name_en: "Republic of Yemen"
  },
  zm: {
    data: {
      area: "africa",
      design: "other",
      symbol: ["animal-bird"],
      color: ["red", "green", "yellow", "black"]
    },
    name_ja: "ザンビア共和国",
    name_en: "Republic of Zambia"
  },
  zw: {
    data: {
      area: "africa",
      design: "yv-shape",
      symbol: ["star", "animal-bird"],
      color: ["red", "white", "green", "yellow", "black"]
    },
    name_ja: "ジンバブエ共和国",
    name_en: "Republic of Zimbabwe"
  },
  za: {
    data: {
      area: "africa",
      design: "yv-shape",
      symbol: ["none"],
      color: ["red", "blue", "white", "green", "yellow", "black"]
    },
    name_ja: "南アフリカ共和国",
    name_en: "Republic of South Africa"
  }
} as const satisfies Record<CountryCode, Kokki>;
