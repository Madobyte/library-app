import addNewBookModal from './addNewBookModal.js'

export default function addBookBtn() {
  const addBookBtn = document.createElement('span');
  addBookBtn.classList.add('add-book-btn');

  const footer = document.getElementById('footer');
  document.body.insertBefore(addBookBtn, footer.nextSibling);

  addBookBtn.addEventListener('click', addNewBookModal)
}