const cutLetter = (arr, idx) => {
  return [...arr.slice(0, idx), ...arr.slice(idx + 1, arr.length)]
}
const letterView = {
  visible: `t`,
  hidden: `l`
}
const elLetter = document.getElementById(`letter`);
let dictCopy = [...dictionary];
let letterRnd = randomInt(0, dictCopy.length - 1);
let letter = dictCopy[letterRnd];
dictCopy = cutLetter(dictCopy, letterRnd);
elLetter.innerHTML = letter[letterView.hidden];

const fontForm = document.querySelector("#font");
fontForm.addEventListener('change', (evt) => {
  elLetter.classList.remove('letter--handwrite');
  if (evt.target.value === `handwrite`) {
    elLetter.classList.add('letter--handwrite');
  }
});

const typeForm = document.querySelector(`#type`);
typeForm.addEventListener('change', (evt) => {
  if (evt.target.value === `letters`) {
    letterView.visible = `t`;
    letterView.hidden = `l`;
  } else {
    letterView.visible = `l`;
    letterView.hidden = `t`;
  }
});

const toNextLetter = (evt) => {
  evt.preventDefault();
  elLetter.innerHTML = letter[letterView.hidden];
  setTimeout(() => {
    if (dictCopy.length === 0) {
      console.log(`restart`);
      dictCopy = [...dictionary];
    }
    letterRnd = randomInt(0, dictCopy.length - 1);
    letter = dictCopy[letterRnd];
    dictCopy = cutLetter(dictCopy, letterRnd);
    elLetter.innerHTML = letter[letterView.visible]
  }, 1000);
}

document.addEventListener(`keypress`, toNextLetter);
document.addEventListener(`touchstart`, toNextLetter);


