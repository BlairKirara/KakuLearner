function convert() {
    const romajiToKatakana = {
        "a": "ア", "i": "イ", "u": "ウ", "e": "エ", "o": "オ",
        "ka": "カ", "ki": "キ", "ku": "ク", "ke": "ケ", "ko": "コ",
        "sa": "サ", "shi": "シ", "su": "ス", "se": "セ", "so": "ソ",
        "ta": "タ", "chi": "チ", "tsu": "ツ", "te": "テ", "to": "ト",
        "na": "ナ", "ni": "ニ", "nu": "ヌ", "ne": "ネ", "no": "ノ",
        "ha": "ハ", "hi": "ヒ", "fu": "フ", "he": "ヘ", "ho": "ホ",
        "ma": "マ", "mi": "ミ", "mu": "ム", "me": "メ", "mo": "モ",
        "ya": "ヤ", "yu": "ユ", "yo": "ヨ",
        "ra": "ラ", "ri": "リ", "ru": "ル", "re": "レ", "ro": "ロ",
        "wa": "ワ", "wo": "ヲ", "n": "ン",
    };

    const inputText = document.getElementById("input").value.toLowerCase();
    let outputText = "";

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        let nextChar = inputText[i + 1];
        
        let syllable = char + (nextChar ? nextChar : "");
        if (romajiToKatakana[syllable]) {
            outputText += romajiToKatakana[syllable];
            i++;
        } else if (romajiToKatakana[char]) {
            outputText += romajiToKatakana[char];
        } else {
            outputText += char;
        }
    }

    document.getElementById("output").innerText = outputText;
}