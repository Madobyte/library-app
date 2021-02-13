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

  
    const loadBooks = document.createElement('button');
    loadBooks.classList.add('load-books');
    loadBooks.innerText = 'Load books?';

    const appBody = document.getElementById('app-body');
    backgroundContainer.appendChild(backgroundImage);
    backgroundContainer.appendChild(backgroundText);
    backgroundContainer.appendChild(loadBooks);
    appBody.appendChild(backgroundContainer);

    loadBooks.addEventListener('click', loadSomeBooks)
}

function loadSomeBooks() {
  const books = [
    {
      title: "You Don't Know JS Yet",
      author: 'Kyle Simpson',
      pages: 88,
      language: 'English',
      published: '2020-01-28',
      added: '2020-02-01'
    },
    {
      title: 'Learn Enough Command Line to be Dangerous',
      author: 'Michael Hartl',
      pages: 2500,
      language: 'English',
      published: '2017-01-17',
      added: '2021-02-01'
    },
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J.K. Rowling',
      pages: 435,
      language: 'English',
      published: '1999-06-08',
      added: '2008-03-14'
    },
    {
      title: 'Genki: An Integrated Course in Elementary Japanese',
      author: 'Eri Banno et. al.',
      pages: 382,
      language: 'English',
      published: '2011-02-01',
      added: '2016-04-21'
    }
  ]

  for (let i = 0; i <= books.length - 1; i++) {
    localStorage.setItem(i, JSON.stringify(books[i]));
  }
  location.reload();
}