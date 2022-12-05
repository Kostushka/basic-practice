const { selectionSort, findMinIndex } = require('./sort');

let arr;

beforeEach(() => {
    arr = [3, 5, 6, 9, 2, 45, 32];
});

test('sortFunction should return correct value', () => {
    const res = selectionSort([...arr]);

    expect(res).toEqual([2, 3, 5, 6, 9, 32, 45]);
    expect(res).toBeInstanceOf(Array);
});

test('findMinIndex should return correct value', () => {
    const index = findMinIndex(arr);

    expect(index).toBe(4);
});
