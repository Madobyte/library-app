export default function sortCards(choice = 'published date') {
  const bookArray = Object.entries(localStorage);
  var sortedLibrary;

  switch (choice) {
    case 'published date':
      sortedLibrary = bookArray.sort((a, b) => new Date(JSON.parse(a[1]).published) - new Date(JSON.parse(b[1]).published)) // published asc
      break;
    case 'added date':
      sortedLibrary = bookArray.sort((a, b) => new Date(JSON.parse(a[1]).added) - new Date(JSON.parse(b[1]).added)) // added asc
      break
  }
  return sortedLibrary; 
}