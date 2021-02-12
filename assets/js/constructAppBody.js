import {backgroundImageSrc} from './variables.js'
import createBookCards from './createBookCards.js'

export default function constructAppBody() {
  if (localStorage.length === 0) emptyAppBody();
  else {
    emptyAppBody();
    const background = document.getElementById('background-container');
    background.style.cssText = 'display: none;';
    createBookCards();
  }
}

function emptyAppBody() {
    const backgroundContainer = document.createElement('div');
    backgroundContainer.id = 'background-container';

    const backgroundImage = document.createElement('img');
    backgroundImage.src = backgroundImageSrc;
    backgroundImage.classList.add('background-image');

    const backgroundText = document.createElement('p');
    backgroundText.classList.add('background-text');
    backgroundText.innerText = 'Your library is empty. Add books!';

    const appBody = document.getElementById('app-body');
    backgroundContainer.appendChild(backgroundImage);
    backgroundContainer.appendChild(backgroundText);
    appBody.appendChild(backgroundContainer);
}