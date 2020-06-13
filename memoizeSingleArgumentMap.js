/**
 * Memoizes a function that takes a single argument of any type.
 *
 * @param {function} cb - The function to memoize.
 */
const memoizeSingleArgumentMap = (cb) => {
  const cache = new Map();

  return (arg) => {
    if (!cache.has(arg)) {
      console.log('computed');
      cache.set(arg, cb(arg));
    }
    return cache.get(arg);
  };
};

export default memoizeSingleArgumentMap;
