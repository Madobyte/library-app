import createBookCards from "./createBookCards.js";
import createSingleBookCard from "./createSingleBookCard.js";
import uniqueIdGenerator from "./uniqueIdGenerator.js";

//let myLibrary = JSON.parse(localStorage.getItem('myLibrary'))
let myLibrary = []

function Book(title, author, pages, language, published) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.language = language,
  this.published = published
}

export default function addBookToLibrary() {
  //if (!myLibrary) myLibrary = []

  let newBook = new Book();

  const inputFields = document.querySelectorAll('input');
  inputFields.forEach(input => input.addEventListener('input', (e) => {
    e.preventDefault();
    newBook[e.target.name] = e.target.value;
  }));

  const form = document.getElementById('add-book-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const currentDay = new Date();
    const day = currentDay.getDay();
    const month = currentDay.getMonth();
    const year = currentDay.getFullYear();

    newBook['added'] = `${year}-${month}-${day}`;

    myLibrary.push(newBook);
    let index = uniqueIdGenerator();
    localStorage.setItem(index, JSON.stringify(newBook))
    
    form.remove();
    
    const successMsg = document.createElement('p');
    successMsg.innerText = "Book added!"
    
    const modal = document.getElementById('modal');
    modal.insertBefore(successMsg, modal.firstChild);
    modal.style.cssText = 'height: 100px; width: 200px;'
  
    createSingleBookCard(newBook, index);
  })

  const clearBtn = document.querySelector('.clear-btn');
  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    inputFields.forEach(input => {
      if (input.value != 'add') input.value = '';
    })
  })
}

addBookToLibrary.prototype = Object.create(Book.prototype);