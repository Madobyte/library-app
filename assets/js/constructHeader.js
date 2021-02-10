import {logoSrc, appTitle} from './variables.js'

export default function constructHeader() {
  const header = document.getElementById('header')
  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = logoSrc;

  const title = document.createElement('h1');
  title.id = 'app-title';
  title.innerText = appTitle;

  header.insertBefore(logo, header.firstChild);
  header.insertBefore(title, logo.nextSibling);
}