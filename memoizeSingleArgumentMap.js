/**
 * Memoizes a function that takes a single argument of any type.
 *
 * @param {function} cb - The function to memoize.
 */
const memoizeSingleArgumentMap = (cb) => {
  // Using a Map allows for the memoized function to take an arg of any type.
  const cache = new Map();

  return (arg) => {
    /**
     * If we don't already have the return value cached,
     * compute it before returning.
     */
    if (!cache.has(arg)) {
      console.log('computed');
      cache.set(arg, cb(arg));
    }

    return cache.get(arg);
  };
};

export default memoizeSingleArgumentMap;
