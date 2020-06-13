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
  // Using a Map allows for the memoized function to take an arg of any type.
  const cache = new Map();

  // Traverses the cache and computes the return value if not cached.
  const traverseCache = (currentCache, cb, args, currentArgs) => {
    if (currentArgs.length) {
      /**
       * If the arg is not cached, add it as a key to the cache
       * with empty Map as its value.
       * */
      if (!currentCache.has(currentArgs[0])) {
        currentCache.set(currentArgs[0], new Map());
      }

      // Continue traversing the cache at the next depth.
      return traverseCache(
        currentCache.get(currentArgs[0]),
        cb,
        args,
        currentArgs.slice(1)
      );
    } else {
      // Compute and cache the return value if needed and return it.
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
