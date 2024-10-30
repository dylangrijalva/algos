import { binarySearch } from "./binary-search";

describe("binarySearch", () => {
  test("when searching the target, should return the right index", () => {
    const collection: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
    const expectedIndex = 2;
    const target = 3;
    const index = binarySearch(collection, target);
    expect(index).toBe(expectedIndex);
  });

  test("when searching an element that is not in the collection, should return -1", () => {
    const collection: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
    const expectedIndex = -1;
    const target = 10;
    const index = binarySearch(collection, target);
    expect(index).toBe(expectedIndex);
  });
});
