export default () => {
  const nav = document.querySelector('.js-nav');
  const button = document.querySelector('.js-toggle-nav');
  const header = document.querySelector('.js-header');

  // navigation button on click, basic toggling of classes
  if (button) {
    button.addEventListener('click', () => {
      nav.classList.toggle('nav--active');
      header.classList.toggle('header--nav--active');
    });
  }
};
