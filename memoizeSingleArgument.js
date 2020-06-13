/**
 * Memoizes a function that takes a primitive or symbol as its only argument.
 *
 * @param {function} cb - The function to memoize.
 */
const memoizeSingleArgument = (cb) => {
  const cache = {};

  return (arg) => {
    if (!(arg in cache)) {
      console.log('computed')
      cache[arg] = cb(arg);
    }
    return cache[arg];
  };
};

export default memoizeSingleArgument;
