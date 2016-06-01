import highlight from './highlight';

const buttons = document.querySelectorAll('.js-code');

const hideWelcome = () => {
  document.getElementById('close-welcome').setAttribute('checked', 'checked');
};

const injectSourcebox = (html) => {
  const sourcebox = document.createElement('div');

  sourcebox.classList.add('sourcebox');
  sourcebox.innerHTML = `
    <div class="sourcebox__inner">
      <pre><code class="language-html js-sourcebox"></code></pre>
    </div>
  `;

  document.body.appendChild(sourcebox);
  document.querySelector('.js-sourcebox').textContent = html;
  highlight();
  hideWelcome();
};

const buttonClick = () => {
  const sourcebox = document.querySelector('.sourcebox');

  // get the sourcecode for the page, if it is not already shown, via ajax
  if (!sourcebox) {
    const request = new XMLHttpRequest();

    request.open('GET', window.location.href, true);
    request.onload = function ajaxCall () {
      if (this.status >= 200 && this.status < 400) {
        injectSourcebox(this.response);
      }
    };

    request.send();

  } else { // remove the sourcebox
    document.body.removeChild(sourcebox);
  }
};


// set the click events, if the code button is clicked, show
// the sourcecode of the page, just a small gimmick ;)
export default () => {
  [ ...buttons ].forEach((button) => {
    button.addEventListener('click', buttonClick);
  });
};
