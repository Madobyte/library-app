export default function constructFooter() {
  const credits = document.createElement('h2');
  credits.classList.add('credits');
  credits.innerText = "Made by M. Bambalan";

  const footer = document.getElementById('footer');
  footer.appendChild(credits);
}