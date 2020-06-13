/**
 * Memoizes a function that takes a primitive or symbol as its only argument.
 *
 * @param {function} cb - The function to memoize.
 */
const memoizeSingleArgument = (cb) => {
  // Use an Object for the cache. Args can be primitives or Symbols.
  const cache = {};

  return (arg) => {
    /**
     * If we don't already have the return value cached,
     * compute it before returning.
     */
    if (!(arg in cache)) {
      console.log('computed');
      cache[arg] = cb(arg);
    }

    return cache[arg];
  };
};

export default memoizeSingleArgument;
