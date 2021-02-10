const form = document.getElementById('add-book-form');
if (form) {
  form.addEventListener('submit', submitForm(e, this))
}

async function submitForm(e, form) {
  e.preventDefault();
}