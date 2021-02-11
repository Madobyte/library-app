import {backgroundImageSrc} from './variables.js'
import createBookCards from './createBookCards.js'

export default function constructAppBody() {
  if (localStorage.length === 0) emptyAppBody();
  else createBookCards();
}

function emptyAppBody() {
  const backgroundImage = document.createElement('img');
  backgroundImage.src = backgroundImageSrc;
  backgroundImage.classList.add('background-image');

  const backgroundText = document.createElement('p');
  backgroundText.classList.add('background-text');
  backgroundText.innerText = 'Your library is empty. Add books!';

  const appBody = document.getElementById('app-body');
  appBody.appendChild(backgroundImage);
  appBody.appendChild(backgroundText);
}