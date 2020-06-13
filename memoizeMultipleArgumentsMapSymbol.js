/**
 * Memoizes a function that takes any number of arguments of any type.
 *
 * Because Symbol is used in the cache to signify a value instead of a
 * string, arguments can now have a value of 'value'.
 *
 * @param {function} cb - The function to memoize.
 */
const memoizeMultipleArgumentsMapSymbol = (cb) => {
  const cache = new Map();
  const value = Symbol('value');

  const traverseCache = (currentCache, cb, args, currentArgs) => {
    if (currentArgs.length) {
      if (!currentCache.has(currentArgs[0])) {
        currentCache.set(currentArgs[0], new Map());
      }
      return traverseCache(
        currentCache.get(currentArgs[0]),
        cb,
        args,
        currentArgs.slice(1)
      );
    } else {
      if (!currentCache.has(value)) {
        console.log('computed');
        currentCache.set(value, cb(...args));
      }
      return currentCache.get(value);
    }
  };

  return (...args) => traverseCache(cache, cb, args, args);
};

export default memoizeMultipleArgumentsMapSymbol;
