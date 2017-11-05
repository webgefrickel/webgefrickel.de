export default link => {
  // this adds a delay to the section-change click-action,
  // faking a slide transition by adding the --change class

  link.classList.add('link-section--change');

  window.setTimeout(() => {
    window.location.href = link.getAttribute('href');
  }, 200); // animation is 300ms, so wait 200ms
};
