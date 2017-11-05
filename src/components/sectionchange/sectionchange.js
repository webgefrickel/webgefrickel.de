import mediaquery from '@helpers/mediaquery';

const sectionLinks = document.querySelectorAll('.js-sectionchange');
const links = document.querySelectorAll('.js-nav__link');
const page = document.querySelector('.js-page');

const clicksection = link => {
  link.classList.add('link-section--change');

  window.setTimeout(() => {
    window.location.href = link.getAttribute('href');
  }, 100); // animation is 150ms, so wait 100ms
};

// simulate sectionchange for navigation clicks on large displays
// but only if we are on contact/work/blog/legal-notice pages
const changeSections = (mediaquery('xl') && (
  page.classList.contains('page--work') ||
  page.classList.contains('page--contact') ||
  page.classList.contains('page--blog') ||
  page.classList.contains('page--legal-notice')
));

const menuClick = link => {
  const target = link.getAttribute('data-target');
  const sections = [ 'work', 'fake', 'blog', 'contact' ];
  let sectionLink = document.querySelector(`.link-section--${target}`);

  // if the sectionchange link does not exist, the modify the one existing
  // and change color + target
  if (!sectionLink) {
    sectionLink = document.querySelector('.link-section');
    sections.forEach(sec => {
      sectionLink.classList.remove(`link-section--${sec}`);
    });
    sectionLink.setAttribute('href', link.getAttribute('href'));
    sectionLink.classList.add(`link-section--${target}`);
  }

  clicksection(sectionLink);
};

export default () => {
  // always apply this event to all the sectionlinks
  [ ...sectionLinks ].forEach(sectionLink => {
    sectionLink.addEventListener('click', e => {
      e.preventDefault();
      clicksection(sectionLink);
    }, false);
  });

  // and to the menu links if needed
  if (changeSections) {
    [ ...links ].forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        menuClick(link);
      });
    });
  }
};
