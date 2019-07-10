import warn from './warn';

export default async (fn, options) => {
  const task = typeof fn.default === 'undefined' ? fn : fn.default;

  // catch errors for all tasks and output any warnings
  return task(options)
    .then(resolution => {
      return resolution;
    })
    .catch(error => {
      warn(error);
    });
};
