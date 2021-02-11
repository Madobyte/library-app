import addBookToLibrary from './myLibrary.js'

export default function addNewBookModal() {
  const modalContainer = document.createElement('div');
  modalContainer.id = 'modal-container';
  modalContainer.classList.add('modal-container-active');

  const modal = document.createElement('div');
  modal.classList.add('modal-active')
  modal.id = 'modal';
  
  modalContainer.appendChild(modal);
  document.body.insertBefore(modalContainer, document.body.firstChild);
  
  createForm();

  addBookToLibrary();

  modalContainer.addEventListener('click', removeForm);
  
  const closeBtn = document.createElement('i');
  closeBtn.classList.add('fa', 'fa-times');
  modal.appendChild(closeBtn);
  
  closeBtn.addEventListener('click', removeForm)
  modal.classList.add('modal-active');
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

function createForm() {
  const modal = document.getElementById('modal');
  const bookForm = document.createElement('form');
  bookForm.id = "add-book-form";
  modal.appendChild(bookForm);
  const title = document.createElement('p');
  title.innerText = 'Add new book';
  bookForm.appendChild(title)

  formFields.forEach(element => {
    const label = document.createElement('label');
    label.for = element.label;
    label.classList.add('form-label');
    label.innerText = element.label;
    const field = document.createElement('input');
    field.name = element.id;
    field.id = element.id;
    field.classList.add('input-field');
    field.type = element.type;
    field.required = element.isImportant;

    bookForm.appendChild(label);
    bookForm.appendChild(field);
  });

  const addBtn = document.createElement('input');
  addBtn.classList.add('btn', 'add-btn');
  addBtn.type = "submit";
  addBtn.value = "add";

  const clearBtn = document.createElement('button');
  clearBtn.classList.add('btn', 'clear-btn');
  clearBtn.innerText = 'clear';
  bookForm.appendChild(addBtn);
  bookForm.appendChild(clearBtn);
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