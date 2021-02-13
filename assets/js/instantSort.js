import createSingleBookCard from "./createSingleBookCard.js";
import sortCards from "./sortCards.js";

export default function instantSort() {
  const currentCards = document.querySelectorAll('.card');
  const sortSelect = document.getElementById('sort-select');
  const sortIcon = document.getElementById('sort-icon');

  let sortedLibrary;

  if (sortIcon.classList[1] === 'fa-sort-amount-desc') {
    sortedLibrary = sortCards(sortSelect.value);
  } else if (sortIcon.classList[1] === 'fa-sort-amount-asc') {
    sortedLibrary = sortCards(sortSelect.value).reverse();
  }

  currentCards.forEach(card => {
    card.classList.add('close');
    card.addEventListener('transitionend', () => {
      card.remove();
    });
  });

  setTimeout(() => {
    sortedLibrary.forEach(book => {
      const object = JSON.parse(book[1]);
      const index = book[0];
      createSingleBookCard(object, index);
    })
    
    setTimeout(() => {sortIcon.style.pointerEvents = 'auto'}, 300);
  }, 500);

}