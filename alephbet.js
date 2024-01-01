const elLetter = document.getElementById(`letter`);
const form = document.getElementById(`answer-form`);
const elAnswerList = document.getElementById(`answer-list`);
const ANSWERS_NUM = 5;
const REPEAT_MODE = true;
let isRepeatRound = true;

const getLettersSet = () => {
  const result = {};

  let letterRnd = randomInt(0, dictionary.length - 1);
  let letter = dictionary[letterRnd];
  result.currentLetter = letter;
  let answerOptions = [];
  answerOptions.push(letter);
  let i = 1;
  while (i < ANSWERS_NUM) {
    letterRnd = randomInt(0, dictionary.length - 1);
    letter = dictionary[letterRnd];

    if (!answerOptions.find((it) => it?.l === letter.l)) {
      answerOptions.push(letter);
      i++;
    }
  }
  result.answerOptions = shuffle(answerOptions);

  return result;
};

const getAnswerInput = (letter) => {
  const li = document.createElement(`li`);
  const lbl = document.createElement(`label`);
  const spn = document.createElement(`span`);
  const inp = document.createElement(`input`);
  spn.innerText = letter.t;
  inp.setAttribute(`type`, `radio`);
  inp.setAttribute(`name`, `answerLetter`);
  inp.value = letter.l;
  lbl.appendChild(inp);
  lbl.appendChild(spn);
  li.appendChild(lbl);
  return li;
};

const renderQuiz = (lettersSet) => {
  elLetter.innerHTML = lettersSet.currentLetter.l;
  elAnswerList.innerHTML = ``;
  for (let i = 0; i < lettersSet.answerOptions.length; i++) {
    elAnswerList.appendChild(getAnswerInput(lettersSet.answerOptions[i]));
  }
};

let lettersSet = getLettersSet();

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();
  const selected = form.querySelector(`input:checked`);
  if (selected.value === lettersSet.currentLetter.l) {
    elLetter.innerHTML = `Верно`;
    setTimeout(() => {
      if (REPEAT_MODE) {
        if (!isRepeatRound) {
          lettersSet = getLettersSet();
          isRepeatRound = true;
        } else {
          isRepeatRound = false;
        }
      } else {
        lettersSet = getLettersSet();
      }
      renderQuiz(lettersSet);
    }, 1500);
  } else {
    elAnswerList.classList.add(`shake`);
  }
});

elAnswerList.addEventListener(`animationend`, (evt) => {
  evt.target.classList.remove(`shake`);
});

renderQuiz(lettersSet);
