let hiragana = [
    { Hiragana: "あ", Romaji: 'a', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place" },
    { Hiragana: "い", Romaji: 'i', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "う", Romaji: 'u', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "え", Romaji: 'e', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "お", Romaji: 'o', Dakuten: "Siena", Handakuten: "place"  },
    { Hiragana: "か", Romaji: 'ka', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place" },
    { Hiragana: "き", Romaji: 'ki', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "く", Romaji: 'ku', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "け", Romaji: 'ke', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "こ", Romaji: 'ko', Dakuten: "Siena", Handakuten: "place"  },
    { Hiragana: "さ", Romaji: 'sa', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place" },
    { Hiragana: "し", Romaji: 'shi', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "す", Romaji: 'su', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "せ", Romaji: 'se', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "そ", Romaji: 'so', Dakuten: "Siena", Handakuten: "place"  },
    { Hiragana: "た", Romaji: 'ta', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place" },
    { Hiragana: "ち", Romaji: 'chi', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "つ", Romaji: 'tsu', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "て", Romaji: 'te', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "と", Romaji: 'to', Dakuten: "Siena", Handakuten: "place"  },
    { Hiragana: "な", Romaji: 'na', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place" },
    { Hiragana: "に", Romaji: 'ni', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "ぬ", Romaji: 'nu', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "ね", Romaji: 'ne', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "の", Romaji: 'no', Dakuten: "Siena", Handakuten: "place"  },
    { Hiragana: "は", Romaji: 'ha', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place" },
    { Hiragana: "ひ", Romaji: 'hi', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "ふ", Romaji: 'fu', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "へ", Romaji: 'he', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "ほ", Romaji: 'ho', Dakuten: "Siena", Handakuten: "place"  },
    { Hiragana: "ま", Romaji: 'ma', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place" },
    { Hiragana: "み", Romaji: 'mi', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "む", Romaji: 'mu', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "め", Romaji: 'me', Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "も", Romaji: 'mo', Dakuten: "Siena", Handakuten: "place"  }

  ];
  
  let katakana = [
    { Hiragana: "Monte Falco", Romaji: 1658, Dakuten: "Parco Foreste Casentinesi", Handakuten: "place" },
    { Hiragana: "Monte Falterona", Romaji: 1654, Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "Poggio Scali", Romaji: 1520, Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "Pratomagno", Romaji: 1592, Dakuten: "Parco Foreste Casentinesi", Handakuten: "place"  },
    { Hiragana: "Monte Amiata", Romaji: 1738, Dakuten: "Siena", Handakuten: "place"  }
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
    for (let element of data) {
      let row = table.insertRow();
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
