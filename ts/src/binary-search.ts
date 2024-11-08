export function binarySearch(collection: Array<number>, target: number): number {
  function recursiveBinarySearch(collection: Array<number>, target: number, start: number, end: number): number {
    if (start > end) {
      return -1;
    }

    const mid = Math.floor((start + end) / 2);
    const current = collection[mid];

    if (current === target) {
      return mid;
    }

    if (current < target) {
      return recursiveBinarySearch(collection, target, mid + 1, end);
    }

    if (current > target) {
      return recursiveBinarySearch(collection, target, start, end - 1);
    }

    return -1;
  }

  return recursiveBinarySearch(collection, target, 0, collection.length - 1);
}
