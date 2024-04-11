let hiragana = [
  { Hiragana: "あ", Romaji: 'a', Dakuten: "-", Handakuten: "-" },
  { Hiragana: "い", Romaji: 'i', Dakuten: "-", Handakuten: "-"  },
  { Hiragana: "う", Romaji: 'u', Dakuten: "-", Handakuten: "-"  },
  { Hiragana: "え", Romaji: 'e', Dakuten: "-", Handakuten: "-"  },
  { Hiragana: "お", Romaji: 'o', Dakuten: "-", Handakuten: "-"  },
  { Hiragana: "か", Romaji: 'ka', Dakuten: "が (ga)", Handakuten: "-" },
  { Hiragana: "き", Romaji: 'ki', Dakuten: "ぎ (gi)", Handakuten: "-"  },
  { Hiragana: "く", Romaji: 'ku', Dakuten: "ぐ (gu)", Handakuten: "-"  },
  { Hiragana: "け", Romaji: 'ke', Dakuten: "げ (ge)", Handakuten: "-"  },
  { Hiragana: "こ", Romaji: 'ko', Dakuten: "ご (go)", Handakuten: "-"  },
  { Hiragana: "さ", Romaji: 'sa', Dakuten: "ざ (za)", Handakuten: "-" },
  { Hiragana: "し", Romaji: 'shi', Dakuten: "じ (ji)", Handakuten: "-"  },
  { Hiragana: "す", Romaji: 'su', Dakuten: "ず (zu)", Handakuten: "-"  },
  { Hiragana: "せ", Romaji: 'se', Dakuten: "ぜ (ze)", Handakuten: "-"  },
  { Hiragana: "そ", Romaji: 'so', Dakuten: "ぞ (zo)", Handakuten: "-"  },
  { Hiragana: "た", Romaji: 'ta', Dakuten: "だ (da)", Handakuten: "-" },
  { Hiragana: "ち", Romaji: 'chi', Dakuten: "ぢ (ji)", Handakuten: "-"  },
  { Hiragana: "つ", Romaji: 'tsu', Dakuten: "づ (zu)", Handakuten: "-"  },
  { Hiragana: "て", Romaji: 'te', Dakuten: "で (de)", Handakuten: "-"  },
  { Hiragana: "と", Romaji: 'to', Dakuten: "ど (do)", Handakuten: "-"  },
  { Hiragana: "な", Romaji: 'na', Dakuten: "-", Handakuten: "-" },
  { Hiragana: "に", Romaji: 'ni', Dakuten: "-", Handakuten: "-"  },
  { Hiragana: "ぬ", Romaji: 'nu', Dakuten: "-", Handakuten: "-"  },
  { Hiragana: "ね", Romaji: 'ne', Dakuten: "-", Handakuten: "-"  },
  { Hiragana: "の", Romaji: 'no', Dakuten: "-", Handakuten: "-"  },
  { Hiragana: "は", Romaji: 'ha', Dakuten: "ば (ba)", Handakuten: "ぱ (pa)" },
  { Hiragana: "ひ", Romaji: 'hi', Dakuten: "び (bi)", Handakuten: "ぴ (pi)"  },
  { Hiragana: "ふ", Romaji: 'fu', Dakuten: "ぶ (bu)", Handakuten: "ぷ (pu)"  },
  { Hiragana: "へ", Romaji: 'he', Dakuten: "べ (be)", Handakuten: "ぺ (pe)"  },
  { Hiragana: "ほ", Romaji: 'ho', Dakuten: "ぼ (bo)", Handakuten: "ぽ (po)"  },
  { Hiragana: "ま", Romaji: 'ma', Dakuten: "-", Handakuten: "-" },
  { Hiragana: "み", Romaji: 'mi', Dakuten: "-", Handakuten: "-"  },
  { Hiragana: "む", Romaji: 'mu', Dakuten: "-", Handakuten: "-"  },
  { Hiragana: "め", Romaji: 'me', Dakuten: "-", Handakuten: "-"  },
  { Hiragana: "も", Romaji: 'mo', Dakuten: "-", Handakuten: "-"  },
  { Hiragana: "や", Romaji: 'ya', Dakuten: "-", Handakuten: "-" },
  { Hiragana: "ゆ", Romaji: 'yu', Dakuten: "-", Handakuten: "-" },
  { Hiragana: "よ", Romaji: 'yo', Dakuten: "-", Handakuten: "-" },
  { Hiragana: "ら", Romaji: 'ra', Dakuten: "-", Handakuten: "-" },
  { Hiragana: "り", Romaji: 'ri', Dakuten: "-", Handakuten: "-" },
  { Hiragana: "る", Romaji: 'ru', Dakuten: "-", Handakuten: "-" },
  { Hiragana: "れ", Romaji: 're', Dakuten: "-", Handakuten: "-" },
  { Hiragana: "ろ", Romaji: 'ro', Dakuten: "-", Handakuten: "-" },
  { Hiragana: "わ", Romaji: 'wa', Dakuten: "-", Handakuten: "-" },
  { Hiragana: "を", Romaji: 'wo', Dakuten: "-", Handakuten: "-" },
  { Hiragana: "ん", Romaji: 'n', Dakuten: "-", Handakuten: "-" }
];

let katakana = [
  { Katakana: "ア", Romaji: 'a', Dakuten: "-", Handakuten: "-" },
  { Katakana: "イ", Romaji: 'i', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ウ", Romaji: 'u', Dakuten: "-", Handakuten: "-" },
  { Katakana: "エ", Romaji: 'e', Dakuten: "-", Handakuten: "-" },
  { Katakana: "オ", Romaji: 'o', Dakuten: "-", Handakuten: "-" },
  { Katakana: "カ", Romaji: 'ka', Dakuten: "ガ (ga)", Handakuten: "-" },
  { Katakana: "キ", Romaji: 'ki', Dakuten: "ギ (gi)", Handakuten: "-" },
  { Katakana: "ク", Romaji: 'ku', Dakuten: "グ (gu)", Handakuten: "-" },
  { Katakana: "ケ", Romaji: 'ke', Dakuten: "ゲ (ge)", Handakuten: "-" },
  { Katakana: "コ", Romaji: 'ko', Dakuten: "ゴ (go)", Handakuten: "-" },
  { Katakana: "サ", Romaji: 'sa', Dakuten: "ザ (za)", Handakuten: "-" },
  { Katakana: "シ", Romaji: 'shi', Dakuten: "ジ (ji)", Handakuten: "-" },
  { Katakana: "ス", Romaji: 'su', Dakuten: "ズ (zu)", Handakuten: "-" },
  { Katakana: "セ", Romaji: 'se', Dakuten: "ゼ (ze)", Handakuten: "-" },
  { Katakana: "ソ", Romaji: 'so', Dakuten: "ゾ (zo)", Handakuten: "-" },
  { Katakana: "タ", Romaji: 'ta', Dakuten: "ダ (da)", Handakuten: "-" },
  { Katakana: "チ", Romaji: 'chi', Dakuten: "ヂ (ji)", Handakuten: "-" },
  { Katakana: "ツ", Romaji: 'tsu', Dakuten: "ヅ (zu)", Handakuten: "-" },
  { Katakana: "テ", Romaji: 'te', Dakuten: "デ (de)", Handakuten: "-" },
  { Katakana: "ト", Romaji: 'to', Dakuten: "ド (do)", Handakuten: "-" },
  { Katakana: "ナ", Romaji: 'na', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ニ", Romaji: 'ni', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ヌ", Romaji: 'nu', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ネ", Romaji: 'ne', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ノ", Romaji: 'no', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ハ", Romaji: 'ha', Dakuten: "バ (ba)", Handakuten: "パ (pa)" },
  { Katakana: "ヒ", Romaji: 'hi', Dakuten: "ビ (bi)", Handakuten: "ピ (pi)" },
  { Katakana: "フ", Romaji: 'fu', Dakuten: "ブ (bu)", Handakuten: "プ (pu)" },
  { Katakana: "ヘ", Romaji: 'he', Dakuten: "ベ (be)", Handakuten: "ペ (pe)" },
  { Katakana: "ホ", Romaji: 'ho', Dakuten: "ボ (bo)", Handakuten: "ポ (po)" },
  { Katakana: "マ", Romaji: 'ma', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ミ", Romaji: 'mi', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ム", Romaji: 'mu', Dakuten: "-", Handakuten: "-" },
  { Katakana: "メ", Romaji: 'me', Dakuten: "-", Handakuten: "-" },
  { Katakana: "モ", Romaji: 'mo', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ヤ", Romaji: 'ya', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ユ", Romaji: 'yu', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ヨ", Romaji: 'yo', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ラ", Romaji: 'ra', Dakuten: "-", Handakuten: "-" },
  { Katakana: "リ", Romaji: 'ri', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ル", Romaji: 'ru', Dakuten: "-", Handakuten: "-" },
  { Katakana: "レ", Romaji: 're', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ロ", Romaji: 'ro', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ワ", Romaji: 'wa', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ヲ", Romaji: 'wo', Dakuten: "-", Handakuten: "-" },
  { Katakana: "ン", Romaji: 'n', Dakuten: "-", Handakuten: "-" }
];


  let radicals = [
    { name: "Monte Santos", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
  ];

  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    let tbody = table.createTBody(); // Create tbody
    for (let element of data) {
        let row = tbody.insertRow(); // Insert rows into tbody
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

  
  let page = document.body.id;
  let table;
  let data;
  switch (page) {
    case 'hiragana-list':
        table = document.querySelector(".hiragana-table");
        data = Object.keys(hiragana[0]);
        generateTableHead(table, data);
        generateTable(table, hiragana);
        break;
    case 'katakana-list':
        table = document.querySelector(".katakana-table");
        data = Object.keys(katakana[0]);
        generateTableHead(table, data);
        generateTable(table, katakana);
        break;
    case 'radicals-list':
        table = document.querySelector(".radicals-table");
        data = Object.keys(radicals[0]);
        generateTableHead(table, data);
        generateTable(table, radicals);
        break;
  }
