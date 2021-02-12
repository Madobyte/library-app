import editBookModal from './editBookModal.js'

export default function deleteOrEditCard() {
  let cards = document.querySelectorAll('.card');
  const background = document.getElementById('background-container');
  
  if (cards) {
    cards.forEach(card => {
      const cardIndex = card.id;

      const removeBtn = document.createElement('i');
      removeBtn.classList.add('fa', 'fa-times');
      card.appendChild(removeBtn);

      const editBtn = document.createElement('span');
      editBtn.classList.add('edit-btn');
      editBtn.innerText = 'edit';
      card.appendChild(editBtn);

      card.addEventListener('mouseenter', (e) => {
        removeBtn.classList.toggle('active');
        editBtn.classList.toggle('active');
      })

      card.addEventListener('mouseleave', (e) => {
        removeBtn.classList.toggle('active');
        editBtn.classList.toggle('active');
      })

      removeBtn.addEventListener('click', () => {
        card.classList.add('close');
        localStorage.removeItem(cardIndex);
        card.addEventListener('transitionend', () => {
          card.remove();
          cards = document.querySelectorAll('.card');
          if (cards.length === 0) background.style.cssText = 'display: block;';
        });
      });

      editBtn.addEventListener('click', () => {
        console.log(card.id);
        const cardToEdit = localStorage.getItem(cardIndex);
        console.log(cardToEdit);
        editBookModal(cardIndex);
      })
    })
  }
}