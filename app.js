console.log('Hi there! 🔥');
AOS.init();
const shit = '💩',
  fire = '🔥',
  rocket = '🚀',
  poudzo = '👍🏻';

const nav = document.querySelector('nav');
window.addEventListener('scroll', showNav);

function showNav() {
  console.log(pageYOffset);
  if (pageYOffset > 250) {
    if (nav.classList.contains('backdrop-blur')) return;
    nav.style.transform = 'translateY(-200px)';
    setTimeout(() => {
      nav.classList.remove('bg-transparent');
      nav.classList.add('backdrop-blur');
      nav.style.transform = 'translateY(0)';
    }, 100);
  }

  if (pageYOffset === 0) {
    nav.style.transform = 'translateY(-200px)';
    setTimeout(() => {
      nav.style.transform = 'translateY(0)';
      nav.classList.add('bg-transparent');
      nav.classList.remove('backdrop-blur');
    }, 100);
  }
}
