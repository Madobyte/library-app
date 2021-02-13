import deleteOrEditCard from "./deleteOrEditCard.js";
import sortCards from "./sortCards.js";

export default function createBookCards() {
  const appBody = document.getElementById('app-body');
  let sortedLibrary = sortCards();

  sortedLibrary.forEach(entry => {
    const card = document.createElement('div');
    card.id = entry[0];
    card.classList.add('card');

    const book = JSON.parse(entry[1]);
    Object.keys(book).forEach(data => {
      if (data === 'title') {
        const entry = document.createElement('h2');
        entry.classList.add(data);
        entry.innerText = `${book[data]}`;
        card.appendChild(entry);
      } else {
        const entry = document.createElement('p');
        entry.classList.add(data);
        entry.innerText = `${data[0].toUpperCase()}${data.slice(1)}: ${book[data]}`;
        card.appendChild(entry);
      }
      appBody.appendChild(card)
    })
  })
  deleteOrEditCard();
}