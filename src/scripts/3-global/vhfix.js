export default () => {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setVh();
  window.addEventListener('resize', () => {
    window.requestAnimationFrame(() => {
      setVh();
    });
  });
};
