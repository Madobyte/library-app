import createSingleBookCard from "./createSingleBookCard.js";

export default function editBookModal(index) {
  const cardIndex = index;

  const modalContainer = document.createElement('div');
  modalContainer.id = 'modal-container';
  modalContainer.classList.add('modal-container-active');

  const modal = document.createElement('div');
  modal.classList.add('modal-active')
  modal.id = 'modal';
  
  modalContainer.appendChild(modal);
  document.body.insertBefore(modalContainer, document.body.firstChild);
  
  createForm(cardIndex);

  const form = document.getElementById('edit-book-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    updateForm(cardIndex);

    form.remove();
      
    const successMsg = document.createElement('p');
    successMsg.classList.add('success-msg');
    successMsg.innerText = "Book edited!"
    
    modal.insertBefore(successMsg, modal.firstChild);
    modal.style.cssText = 'height: 100px; width: 200px;'
  })

  modalContainer.addEventListener('click', removeForm);
  
  const closeBtn = document.createElement('i');
  closeBtn.classList.add('fa', 'fa-times');
  modal.appendChild(closeBtn);
  
  closeBtn.addEventListener('click', removeForm)
  modal.classList.add('modal-active');

  const inputFields = document.querySelectorAll('input');
  const clearBtn = document.querySelector('.clear-btn');
  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    inputFields.forEach(input => {
      if (input.value != 'save') input.value = '';
    })
  })
}

const formFields = [
  {
    label: 'Book title',
    id: 'title',
    type: 'text',
    isImportant: true
  },
  {
    label: 'Book author',
    id: 'author',
    type: 'text',
    isImportant: true
  },
  {
    label: 'Number of pages',
    id: 'pages',
    type: 'number',
    isImportant: true
  },
  {
    label: 'Language',
    id: 'language',
    type: 'text',
    isImportant: true
  },
  {
    label: 'Published date',
    id: 'published',
    type: 'date',
    isImportant: true
  },
]

function createForm(cardIndex) {
  const modal = document.getElementById('modal');
  const bookToEdit = JSON.parse(localStorage.getItem(cardIndex));

  const bookForm = document.createElement('form');
  bookForm.id = "edit-book-form";
  modal.appendChild(bookForm);
  const title = document.createElement('p');
  title.innerText = `Edit ${bookToEdit.title}`;
  bookForm.appendChild(title)

  formFields.forEach(element => {
    const label = document.createElement('label');
    label.for = element.label;
    label.classList.add('form-label');
    label.innerText = element.label;
    const field = document.createElement('input');
    field.name = element.id;
    field.id = element.id;
    field.value = bookToEdit[element.id];
    field.classList.add('input-field');
    field.type = element.type;
    field.required = element.isImportant;

    bookForm.appendChild(label);
    bookForm.appendChild(field);
  });

  const saveBtn = document.createElement('input');
  saveBtn.classList.add('btn', 'save-btn');
  saveBtn.type = "submit";
  saveBtn.value = "save";

  const clearBtn = document.createElement('button');
  clearBtn.classList.add('btn', 'clear-btn');
  clearBtn.innerText = 'clear';
  bookForm.appendChild(saveBtn);
  bookForm.appendChild(clearBtn);
}

function updateForm(cardIndex) {
  const completedFormFields = document.querySelectorAll('input');
  const bookToEdit = JSON.parse(localStorage.getItem(cardIndex));
  completedFormFields.forEach(input => {
    if (input.id != '') bookToEdit[input.id] = input.value;
  })
  localStorage.setItem(cardIndex, JSON.stringify(bookToEdit));

  updateBookCard(bookToEdit, cardIndex);
}

function removeForm(e) {
  const modalContainer = document.getElementById('modal-container');
  const modal = document.getElementById('modal');
  if (e.target.id === 'modal-container' || 
      e.target.classList[1] === 'fa-times') {
        modalContainer.classList.remove('modal-container-active');
        modalContainer.classList.add('modal-container-inactive');

        modal.classList.remove('modal-active');
        modal.classList.add('modal-inactive');
        modalContainer.addEventListener('animationend', () => {
        modalContainer.remove();
        })
  }
}

function updateBookCard(book, cardIndex) {
  const card = document.getElementById(cardIndex);
  const background = document.getElementById('app-body');
  card.classList.add('close');
  card.addEventListener('transitionend', () => {
    console.log('end!')
    card.remove();
    const cards = document.querySelectorAll('.card');
    if (cards.length === 0) background.style.cssText = 'display: block;';
    createSingleBookCard(book, cardIndex);
  });
}