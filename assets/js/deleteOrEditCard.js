export default function deleteOrEditCard() {
  const cards = document.querySelectorAll('.card');
  
  if (cards) {
    cards.forEach(card => {
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
        console.log('clicked!')
        const cardIndex = card.id;
        card.classList.add('close')
        localStorage.removeItem(cardIndex);
        card.addEventListener('animationend', () => {card.remove()})
      });
    })
  }
}