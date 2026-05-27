const menuButton = document.querySelector('#menu-btn');
const menuLinks = document.querySelector('#menu-links');

menuButton.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});
