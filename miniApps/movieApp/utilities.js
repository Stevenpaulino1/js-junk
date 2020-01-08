const debounce = (func, delay = 500) => {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
