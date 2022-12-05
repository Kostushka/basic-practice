const linearSearch1 = require('./search');

let arr;
let item;

beforeEach(() => {
    arr = [2, 3, 4, 9, 1];
    item = 4;
});

test('search function should return correct item', () => {
    const res = linearSearch1(arr, item);

    expect(res).toBe(2);
    expect(res).toBeDefined();
    expect(res).not.toBeNull();
});
