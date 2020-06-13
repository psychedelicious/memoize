# Memoizing exercise

Some simple exercises in building a generalized memoizing function.

Each memoizing function improves on the previous as described below.

See `test.js` for quick testing of the memoizing functions. The console should output 'computed' when the memoized function is called with whichever argument(s) for the first time.

## memoizeSingleArgument

- Uses an `Object` for the cache. Memoized function can only accept a single argument with a primitive or Symbol type.

## memoizeSingleArgumentMap

- Improves on the previous memoizing by using a `Map` for the cache, allowing the memoized function to accept arguments of any type.

## memoizeMultipleArgumentsMap

- Improves on the previous memoizing function by structuring the cache as a hash tree, allowing for an arbitrary (and variable) number of arguments to by accepted by the memoized function.
- Has a bug when the memoized function has an argument with value of the string 'value', due to how the leaf node of the tree is designated.

## memoizeMultipleArgumentsMapSymbol

- Improves on the previous memoizing function by using a `Symbol` for the leaf node designation. The string 'value' can now by used as an argument to the memoized function.
