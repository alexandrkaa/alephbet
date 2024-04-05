const cutLetter = (arr, idx) => {
  return [...arr.slice(0, idx), ...arr.slice(idx + 1, arr.length)]
}
const letterView = {
  visible: `t`,
  hidden: `l`
}
let type = `letters`;
const elLetter = document.getElementById(`letter`);
let dictCopy = [...dictionary];
let letterRnd = randomInt(0, dictCopy.length - 1);
let letter = dictCopy[letterRnd];
dictCopy = cutLetter(dictCopy, letterRnd);
elLetter.innerHTML = letter[letterView.hidden];
const totalEl = document.querySelector(`#total > span`);
const tillEndEl = document.querySelector(`#till-end > span`);
totalEl.innerText = dictionary.length;
tillEndEl.innerText = dictionary.length;

const fontForm = document.querySelector("#font");
fontForm.addEventListener('change', (evt) => {
  elLetter.classList.remove('letter--handwrite');
  if (evt.target.value === `handwrite`) {
    elLetter.classList.add('letter--handwrite');
  }
});

const typeForm = document.querySelector(`#type`);
typeForm.addEventListener('change', (evt) => {
  type = evt.target.value;
  if (evt.target.value === `letters`) {
    letterView.visible = `t`;
    letterView.hidden = `l`;
  } else {
    letterView.visible = `l`;
    letterView.hidden = `t`;
  }
});

const renderLetter = () => {
  if (dictCopy.length === 0) {
    console.log(`restart`);
    dictCopy = [...dictionary];
  }
  tillEndEl.innerText = dictCopy.length;
  letterRnd = randomInt(0, dictCopy.length - 1);
  letter = dictCopy[letterRnd];
  dictCopy = cutLetter(dictCopy, letterRnd);
  elLetter.innerHTML = letter[letterView.visible]
}

let step = 1;
const toNextLetter = (evt) => {
  evt.preventDefault();
  if (step === 1) {
    elLetter.innerHTML = letter[letterView.hidden];
    step = 2;
  } else {
    renderLetter();
    step = 1;
  }

}

// const toNextLetter = (evt) => {
//   evt.preventDefault();
//   console.log(type);
//   if (type !== `letters`) {
//     elLetter.innerHTML = letter[letterView.hidden];
//     setTimeout(() => {
//       renderLetter();
//     }, 2000);
//   } else {
//     console.log(step);
//     if (step === 2) {
//       step = 1;
//       renderLetter();
//     }
//     elLetter.innerHTML = letter[letterView.hidden];
//     step = 2;
//   }
// }

document.addEventListener(`keypress`, toNextLetter);
document.addEventListener(`touchstart`, toNextLetter);


