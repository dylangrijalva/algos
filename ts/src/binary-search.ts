function binarySearch(collection: Array<number>, target: number): number {
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

const collection: Array<number> = [24, 51, 69, 78, 96, 104, 111, 116, 127, 139, 145, 160] as const;
const index = binarySearch(collection, 127);
const message = index !== -1 ? `Element found at index ${index}` : "Element were not found in the collection";
console.log(message);
