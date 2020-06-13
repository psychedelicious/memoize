import memoizeSingleArgument from './memoizeSingleArgument';
import memoizeSingleArgumentMap from './memoizeSingleArgumentMap';
import memoizeMultipleArgumentsMap from './memoizeMultipleArgumentsMap';
import memoizeMultipleArgumentsMapSymbol from './memoizeMultipleArgumentsMapSymbol';

const singleArgFn = (x) => x * 10;
const multipleArgFn = (x, y, z) => x + y + z;

const memoizedSingleArgFn = memoizeSingleArgument(singleArgFn);
const memoizedSingleArgMapFn = memoizeSingleArgumentMap(singleArgFn);
const memoizedMultipleArgFnMap = memoizeMultipleArgumentsMap(multipleArgFn);
const memoizedMultipleArgFnMapSymbol = memoizeMultipleArgumentsMapSymbol(
  multipleArgFn
);

console.log(memoizedSingleArgFn(5));
console.log(memoizedSingleArgFn(6));
console.log(memoizedSingleArgFn(7));
console.log(memoizedSingleArgFn(5));
console.log(memoizedSingleArgFn(5));

console.log(memoizedSingleArgMapFn(5));
console.log(memoizedSingleArgMapFn(6));
console.log(memoizedSingleArgMapFn(7));
console.log(memoizedSingleArgMapFn(5));
console.log(memoizedSingleArgMapFn(5));

console.log(memoizedMultipleArgFnMap(1, 2, 3));
console.log(memoizedMultipleArgFnMap(1, 2, 4));
console.log(memoizedMultipleArgFnMap(4, 5, 6));
console.log(memoizedMultipleArgFnMap(1, 2, 3));
console.log(memoizedMultipleArgFnMap(1, 2, 3));

console.log(memoizedMultipleArgFnMapSymbol(1, 2, 3));
console.log(memoizedMultipleArgFnMapSymbol(1, 2, 4));
console.log(memoizedMultipleArgFnMapSymbol(4, 5, 6));
console.log(memoizedMultipleArgFnMapSymbol(1, 2, 3));
console.log(memoizedMultipleArgFnMapSymbol(1, 2, 3));
