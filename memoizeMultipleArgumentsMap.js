/**
 * Memoizes a function that takes any number of arguments of any type.
 *
 * Because the cache uses the string 'value' to signify a leaf node,
 * the string 'value' cannot be used as an argument for the memoized
 * function.
 *
 * @param {function} cb - The function to memoize.
 */
const memoizeMultipleArgumentsMap = (cb) => {
  const cache = new Map();

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
      if (!currentCache.has('value')) {
        console.log('computed');
        currentCache.set('value', cb(...args));
      }
      return currentCache.get('value');
    }
  };

  return (...args) => traverseCache(cache, cb, args, args);
};

export default memoizeMultipleArgumentsMap;
