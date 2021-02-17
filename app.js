console.log('Hi there! 🔥');
const shit = '💩',
  fire = '🔥',
  rocket = '🚀',
  poudzo = '👍🏻';

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (pageYOffset > 250) {
    if (nav.classList.contains('backdrop-blur')) {
      return;
    } else {
      nav.style.transform = 'translateY(-200px)';
    }
    setTimeout(() => {
      nav.style.transform = 'translateY(0)';
      nav.classList.remove('bg-transparent');
      nav.classList.add('backdrop-blur');
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
});
