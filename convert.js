function convert() {
    const romajiToHiragana = {
        "a": "あ", "i": "い", "u": "う", "e": "え", "o": "お",
        "ka": "か", "ki": "き", "ku": "く", "ke": "け", "ko": "こ",
        "sa": "さ", "shi": "し", "su": "す", "se": "せ", "so": "そ",
        "ta": "た", "chi": "ち", "tsu": "つ", "te": "て", "to": "と",
        "na": "な", "ni": "に", "nu": "ぬ", "ne": "ね", "no": "の",
        "ha": "は", "hi": "ひ", "fu": "ふ", "he": "へ", "ho": "ほ",
        "ma": "ま", "mi": "み", "mu": "む", "me": "め", "mo": "も",
        "ya": "や", "yu": "ゆ", "yo": "よ",
        "ra": "ら", "ri": "り", "ru": "る", "re": "れ", "ro": "ろ",
        "wa": "わ", "wo": "を", "n": "ん",
    };

    const inputText = document.getElementById("input").value.toLowerCase();
    let outputText = "";

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        let nextChar = inputText[i + 1];
        
        let syllable = char + (nextChar ? nextChar : "");
        if (romajiToHiragana[syllable]) {
            outputText += romajiToHiragana[syllable];
            i++; 
        } else if (romajiToHiragana[char]) {
            outputText += romajiToHiragana[char];
        } else {
            outputText += char;
        }
    }

    document.getElementById("output").innerText = outputText;
}