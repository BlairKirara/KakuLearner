let katakana = [
    { Katakana: "ア", Romaji: 'a' },
    { Katakana: "イ", Romaji: 'i' },
    { Katakana: "ウ", Romaji: 'u' },
    { Katakana: "エ", Romaji: 'e' },
    { Katakana: "オ", Romaji: 'o' },
    { Katakana: "カ", Romaji: 'ka' },
    { Katakana: "キ", Romaji: 'ki' },
    { Katakana: "ク", Romaji: 'ku' },
    { Katakana: "ケ", Romaji: 'ke' },
    { Katakana: "コ", Romaji: 'ko' },
    { Katakana: "サ", Romaji: 'sa' },
    { Katakana: "シ", Romaji: 'shi' },
    { Katakana: "ス", Romaji: 'su' },
    { Katakana: "セ", Romaji: 'se' },
    { Katakana: "ソ", Romaji: 'so' },
    { Katakana: "タ", Romaji: 'ta' },
    { Katakana: "チ", Romaji: 'chi' },
    { Katakana: "ツ", Romaji: 'tsu' },
    { Katakana: "テ", Romaji: 'te' },
    { Katakana: "ト", Romaji: 'to' },
    { Katakana: "ナ", Romaji: 'na' },
    { Katakana: "ニ", Romaji: 'ni' },
    { Katakana: "ヌ", Romaji: 'nu' },
    { Katakana: "ネ", Romaji: 'ne' },
    { Katakana: "ノ", Romaji: 'no' },
    { Katakana: "ハ", Romaji: 'ha' },
    { Katakana: "ヒ", Romaji: 'hi' },
    { Katakana: "フ", Romaji: 'fu' },
    { Katakana: "ヘ", Romaji: 'he' },
    { Katakana: "ホ", Romaji: 'ho' },
    { Katakana: "マ", Romaji: 'ma' },
    { Katakana: "ミ", Romaji: 'mi' },
    { Katakana: "ム", Romaji: 'mu' },
    { Katakana: "メ", Romaji: 'me' },
    { Katakana: "モ", Romaji: 'mo' },
    { Katakana: "ヤ", Romaji: 'ya' },
    { Katakana: "ユ", Romaji: 'yu' },
    { Katakana: "ヨ", Romaji: 'yo' },
    { Katakana: "ラ", Romaji: 'ra' },
    { Katakana: "リ", Romaji: 'ri' },
    { Katakana: "ル", Romaji: 'ru' },
    { Katakana: "レ", Romaji: 're' },
    { Katakana: "ロ", Romaji: 'ro' },
    { Katakana: "ワ", Romaji: 'wa' },
    { Katakana: "ヲ", Romaji: 'wo' },
    { Katakana: "ン", Romaji: 'n' }
  ];

  let page = document.body.id;

  let table;

  switch (page) {
    case 'hiragana-quiz':
        table = hiragana;
        break;
    case 'katakana-quiz':
        table = katakana;
        break;
    case 'radicals-quiz':
        table = radicals;
        break;
  }
 
  let randomCharacter;
  let questionCount = 0;
  let correctCount = 0;

  function getRandomCharacter() {
      randomCharacter = [];
      while (randomCharacter.length < 3) {
          let index = Math.floor(Math.random() * katakana.length);
          let kata = katakana[index];
          if (!randomCharacter.includes(kata)) {
              randomCharacter.push(kata);
          }
      }
  }

  function displayQuestion() {
      questionCount++;
      if (questionCount <= 10) {
          getRandomCharacter();
          let question = "";
          randomCharacter.forEach(kata => {
              question += kata.Katakana;
          });
          document.getElementById("question").innerText = "Enter the romaji reading for: " + question;
          document.getElementById("answer").value = ""; // Clear previous answer
          document.getElementById("questionNumber").innerText = "Question " + questionCount + " of 10";
      } else {
          showScore();
      }
  }

  function checkAnswer() {
      let userInput = document.getElementById("answer").value.trim();
      if (userInput === "") {
          document.getElementById("result").innerText = "Please provide an answer";
          return;
      }
      let correctReading = "";
      randomCharacter.forEach(kata => {
          correctReading += kata.Romaji;
      });
      let result = userInput === correctReading;
      let resultDiv = document.getElementById("result");
      if (result) {
          resultDiv.innerText = "Correct!";
          correctCount++;
      } else {
          resultDiv.innerText = "Incorrect!";
      }
      displayQuestion();
  }

  function showScore() {
      document.getElementById("question").innerText = "Quiz finished! Your score: " + correctCount + " out of 10";
      document.getElementById("answer").style.display = "none";
      document.getElementById("result").style.display = "none";
      document.getElementById("questionNumber").innerText = ""; // Hide question number
  }

  displayQuestion();