const cutLetter = (arr, idx) => {
  return [...arr.slice(0, idx), ...arr.slice(idx + 1, arr.length)]
}
const elLetter = document.getElementById(`letter`);
let dictCopy = [...dictionary];
let letterRnd = randomInt(0, dictCopy.length - 1);
let letter = dictCopy[letterRnd];
dictCopy = cutLetter(dictCopy, letterRnd);
elLetter.innerHTML = letter.t

document.addEventListener('keypress', (evt) => {
  evt.preventDefault();
  elLetter.innerHTML = letter.l;
  setTimeout(() => {
    if (dictCopy.length === 0) {
      console.log(`restart`);
      dictCopy = [...dictionary];
    }
    letterRnd = randomInt(0, dictCopy.length - 1);
    letter = dictCopy[letterRnd];
    dictCopy = cutLetter(dictCopy, letterRnd);
    elLetter.innerHTML = letter.t
  }, 1000);
})

document.addEventListener('ontouchstart', (evt) => {
  evt.preventDefault();
  elLetter.innerHTML = letter.l;
  setTimeout(() => {
    if (dictCopy.length === 0) {
      console.log(`restart`);
      dictCopy = [...dictionary];
    }
    letterRnd = randomInt(0, dictCopy.length - 1);
    letter = dictCopy[letterRnd];
    dictCopy = cutLetter(dictCopy, letterRnd);
    elLetter.innerHTML = letter.t
  }, 1000);
})
