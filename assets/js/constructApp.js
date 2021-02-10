import constructHeader from './constructHeader.js'
import constructSortBar from './constructSortBar.js'
import constructAppBody from './constructAppBody.js'
import constructFooter from './constructFooter.js'
import addBookBtn from './addBookBtn.js'

export default function constructApp() {
  const header = document.createElement('header');
  header.id = 'header';
  
  const sortBar = document.createElement('div');
  sortBar.id = 'sort-bar';
  
  const appBody = document.createElement('section');
  appBody.id = 'app-body';
  
  const footer = document.createElement('footer');
  footer.id = 'footer';
  
  document.body.insertBefore(header, document.body.firstChild);
  document.body.insertBefore(sortBar, header.nextSibling);
  document.body.insertBefore(appBody, sortBar.nextSibling);
  document.body.insertBefore(footer, appBody.nextSibling);
  
  constructHeader();
  constructSortBar();
  constructAppBody();
  constructFooter();
  addBookBtn();
}