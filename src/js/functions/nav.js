export default function navToggle() {

  const hamburger = document.querySelector('.js-hamburger');
  const body = document.querySelector('body');

  if(hamburger != null) {
    hamburger.addEventListener('click', function() {
      body.classList.toggle('menu-open');
    })
  }
  
};
