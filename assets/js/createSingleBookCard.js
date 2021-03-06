import deleteOrEditCard from "./deleteOrEditCard.js";

export default function createSingleBookCard(object, index) {
  const background = document.getElementById('background-container');
  const card = document.createElement('div');
  card.id = index;
  card.classList.add('card');
  card.style.cssText = "animation: card-popin 0.5s;"
  Object.keys(object).forEach(data => {
    if (data === 'title') {
      const entry = document.createElement('h2');
      entry.classList.add(data);
      entry.innerText = `${object[data]}`;
      card.appendChild(entry);
    } else {
      const entry = document.createElement('p');
      entry.classList.add(data);
      entry.innerText = `${data[0].toUpperCase()}${data.slice(1)}: ${object[data]}`;
      card.appendChild(entry);
    }
    if (background) background.style.cssText = 'display: none;';
    const appBody = document.getElementById('app-body');
    appBody.appendChild(card);
  })

  deleteOrEditCard();
}