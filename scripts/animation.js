document.addEventListener('DOMContentLoaded', () => {
  const text = document.querySelector('.main__text');
  const button = document.querySelector('.main__button');

  text.style.transform = 'translateX(5rem)';
  text.style.opacity = '1';
  button.style.transform = 'translateX(-5rem)';
  button.style.opacity = '1';
});
