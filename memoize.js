const memoize = (cb) => {
  const cache = {};

  const traverseCache = (currentCache, cb, args, currentArgs) => {
    if (currentArgs.length) {
      if (!(currentArgs[0] in currentCache)) {
        currentCache[currentArgs[0]] = {};
      }
      return traverseCache(
        currentCache[currentArgs[0]],
        cb,
        args,
        currentArgs.slice(1)
      );
    } else {
      if (!('value' in currentCache)) {
        console.log('computed');
        const value = cb(...args);
        currentCache.value = value;
        return value;
      } else {
        console.log('cached');
        return currentCache.value;
      }
    }
  };

  return (...args) => traverseCache(cache, cb, args, args);
};

const func = (a, b, c) => a + b + c;

const memoized = memoize(func);

console.log(memoized(1, 2, 3));
console.log(memoized(1, 2, 3));
