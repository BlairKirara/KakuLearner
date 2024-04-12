let hiragana = [
    { Hiragana: "あ", Romaji: 'a' },
    { Hiragana: "い", Romaji: 'i' },
    { Hiragana: "う", Romaji: 'u' },
    { Hiragana: "え", Romaji: 'e' },
    { Hiragana: "お", Romaji: 'o' },
    { Hiragana: "か", Romaji: 'ka' },
    { Hiragana: "き", Romaji: 'ki' },
    { Hiragana: "く", Romaji: 'ku' },
    { Hiragana: "け", Romaji: 'ke' },
    { Hiragana: "こ", Romaji: 'ko' },
    { Hiragana: "さ", Romaji: 'sa' },
    { Hiragana: "し", Romaji: 'shi' },
    { Hiragana: "す", Romaji: 'su' },
    { Hiragana: "せ", Romaji: 'se' },
    { Hiragana: "そ", Romaji: 'so' },
    { Hiragana: "た", Romaji: 'ta' },
    { Hiragana: "ち", Romaji: 'chi' },
    { Hiragana: "つ", Romaji: 'tsu' },
    { Hiragana: "て", Romaji: 'te' },
    { Hiragana: "と", Romaji: 'to' },
    { Hiragana: "な", Romaji: 'na' },
    { Hiragana: "に", Romaji: 'ni' },
    { Hiragana: "ぬ", Romaji: 'nu' },
    { Hiragana: "ね", Romaji: 'ne' },
    { Hiragana: "の", Romaji: 'no' },
    { Hiragana: "は", Romaji: 'ha' },
    { Hiragana: "ひ", Romaji: 'hi' },
    { Hiragana: "ふ", Romaji: 'fu' },
    { Hiragana: "へ", Romaji: 'he' },
    { Hiragana: "ほ", Romaji: 'ho' },
    { Hiragana: "ま", Romaji: 'ma' },
    { Hiragana: "み", Romaji: 'mi' },
    { Hiragana: "む", Romaji: 'mu' },
    { Hiragana: "め", Romaji: 'me' },
    { Hiragana: "も", Romaji: 'mo' },
    { Hiragana: "や", Romaji: 'ya' },
    { Hiragana: "ゆ", Romaji: 'yu' },
    { Hiragana: "よ", Romaji: 'yo' },
    { Hiragana: "ら", Romaji: 'ra' },
    { Hiragana: "り", Romaji: 'ri' },
    { Hiragana: "る", Romaji: 'ru' },
    { Hiragana: "れ", Romaji: 're' },
    { Hiragana: "ろ", Romaji: 'ro' },
    { Hiragana: "わ", Romaji: 'wa' },
    { Hiragana: "を", Romaji: 'wo' },
    { Hiragana: "ん", Romaji: 'n' }
];

 
  let randomCharacter;
  let questionCount = 0;
  let correctCount = 0;

  function getRandomCharacter() {
      randomCharacter = [];
      while (randomCharacter.length < 3) {
          let index = Math.floor(Math.random() * hiragana.length);
          let hira = hiragana[index];
          if (!randomCharacter.includes(hira)) {
              randomCharacter.push(hira);
          }
      }
  }

  function displayQuestion() {
      questionCount++;
      if (questionCount <= 10) {
          getRandomCharacter();
          let question = "";
          randomCharacter.forEach(hira => {
              question += hira.Hiragana;
          });
          document.getElementById("question").innerText = question;
          document.getElementById("answer").value = ""; 
          document.getElementById("questionNumber").innerText = "Question " + questionCount + " of 10";
      } else {
          showScore();
      }
  }

  function checkAnswer() {
      let userInput = document.getElementById("answer").value.trim();
      if (userInput === "") {
          document.getElementById("result").innerText = "Please provide an answer";
          document.getElementById("result").style.color = "red";
          document.getElementById("result").style.fontWeight = "700";
          return;
      }
      let correctReading = "";
      randomCharacter.forEach(hira => {
          correctReading += hira.Romaji;
      });
      let result = userInput === correctReading;
      let resultDiv = document.getElementById("result");
      if (result) {
          resultDiv.innerText = "Correct!";
          resultDiv.style.color = "green";
          resultDiv.style.fontWeight = "700";
          correctCount++;
      } else {
          resultDiv.innerText = "Incorrect!";
          resultDiv.style.color = "red";
          resultDiv.style.fontWeight = "700";
      }
      displayQuestion();
  }

  function showScore() {
      document.getElementById("question").innerText = "Quiz finished! Your score: " + correctCount + " out of 10";
      document.getElementById("question").style.fontSize = "30px"
      document.getElementById("go_back_to").innerText = "Go back to:";
      document.getElementById("go_back_front").innerHTML = "<a href='index.html'>Front Page</a>";
      document.getElementById("go_back_hiragana").innerHTML = "<a href='hiragana_list.html'>Hiragana List</a>";
      document.getElementById("submit_answer").style.display = "none";
      document.getElementById("answer").style.display = "none";
      document.getElementById("result").style.display = "none";
      document.getElementById("questionNumber").innerText = ""; 
  }

  displayQuestion();