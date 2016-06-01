import load from 'fg-loadjs';

export default () => {
  const pre = document.querySelectorAll('pre');

  // if there are any pre-elements on the page, load the code-highlighting
  // plugin with filamentgroups load-js, and then execute it on every pre
  if (pre.length > 0) {
    // load the highlight js
    load('/assets/js/highlight.min.js', () => {
      [ ...pre ].forEach((codeblock) => {
        window.hljs.highlightBlock(codeblock);
      });
    });
  }
};
