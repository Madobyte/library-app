export default function constructSortBar() {
  const sortLabel = document.createElement('label');
  sortLabel.for = 'sort';
  sortLabel.innerText = 'Sort by:';

  const sortSelectInput = document.createElement('select');
  sortSelectInput.id = 'sort';

  sortOptions.forEach(element => {
    const option = document.createElement('option');
    option.label = element;
    option.innerText = element;

    sortSelectInput.appendChild(option);
  })

  const sortIcon = document.createElement('i');
  sortIcon.classList.add('fa', 'fa-sort-amount-asc');

  const sortBar = document.getElementById('sort-bar');
  sortBar.appendChild(sortLabel);
  sortBar.appendChild(sortSelectInput);
  sortBar.appendChild(sortIcon);
}

const sortOptions = ['added date', 'published date'];