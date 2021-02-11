import deleteOrEditCard from "./deleteOrEditCard.js";

export default function createBookCards() {
  const appBody = document.getElementById('app-body');
  const backgroundImage = document.querySelector('.background-image');
  console.log(backgroundImage);
  if (backgroundImage) appBody.textContent = '';
  Object.keys(localStorage).forEach(index => {
    const book = JSON.parse(localStorage.getItem(index));
    const card = document.createElement('div');
    card.id = index;
    card.classList.add('card');
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