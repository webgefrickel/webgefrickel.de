const closeWelcome = document.getElementById('close-welcome');

const welcomeDone = () => {
  window.setTimeout(() => {
    document.querySelector('.js-welcome').classList.add('welcome--done');
  }, 800); // animation time is 700ms
};

export default () => {
  // set the event to the esc-key to dismiss splash intro
  document.onkeydown = e => {
    const event = e || window.event;
    const isHomepage = document.body.classList.contains('site--homepage');

    if (event.keyCode === 27 && isHomepage && closeWelcome) {
      closeWelcome.setAttribute('checked', 'checked');
      welcomeDone();
    }
  };

  // remove the transition after it changed
  if (closeWelcome) {
    closeWelcome.addEventListener('change', welcomeDone);
    closeWelcome.addEventListener('click', welcomeDone);
  }
};
