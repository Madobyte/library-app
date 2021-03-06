import instantSort from "./instantSort.js";

export default function constructSortBar() {
  const sortLabel = document.createElement('label');
  sortLabel.for = 'sort';
  sortLabel.innerText = 'Sort by:';

  const sortSelectInput = document.createElement('select');
  sortSelectInput.id = 'sort-select';
  
  sortOptions.forEach(element => {
    const option = document.createElement('option');
    option.label = element;
    option.innerText = element;
    
    sortSelectInput.appendChild(option);
  })
  sortSelectInput.lastChild.setAttribute('selected', true);
  
  const sortIcon = document.createElement('i');
  sortIcon.id = 'sort-icon';
  sortIcon.classList.add('fa', 'fa-sort-amount-asc');

  const sortBar = document.getElementById('sort-bar');
  sortBar.appendChild(sortLabel);
  sortBar.appendChild(sortSelectInput);
  sortBar.appendChild(sortIcon);


  sortSelectInput.addEventListener('change', instantSort);
  sortIcon.addEventListener('click', () => {

    if (sortIcon.classList[1] === 'fa-sort-amount-asc') {
      sortIcon.classList.remove('fa-sort-amount-asc');
      sortIcon.classList.add('fa-sort-amount-desc'); 
    } else if (sortIcon.classList[1] === 'fa-sort-amount-desc') {
      sortIcon.classList.remove('fa-sort-amount-desc');
      sortIcon.classList.add('fa-sort-amount-asc'); 
    }
    sortIcon.style.pointerEvents = 'none';
    instantSort();
  })
}

const sortOptions = ['added date', 'published date'];