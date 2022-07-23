const numbers = [
    1, 13, 24, 45, 67, 89, 95, 134, 234, 556, 653, 985, 1894, 2944,
];

// Линейный поиск
const linearSearch = (arr, item) => {
    const lastIndex = arr.length - 1;
    const lastEl = arr[lastIndex];
    let itemIndex = 0;
    if (lastEl === item) {
        return lastIndex;
    } else {
        arr[lastIndex] = item;
    }
    for (let i = 0; true; i++) {
        if (item === arr[i]) {
            itemIndex = i;
            // return i;
            break;
        }
    }
    arr[lastIndex] = lastEl;
    return itemIndex;
};

const res = linearSearch(numbers, 45);
console.log(res);

// Бинарный поиск
const binarySearch = (arr, item) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === item) {
            return mid;
        } else if (arr[mid] > item) {
            high = mid - 1;
        } else if (arr[mid] < item) {
            low = mid + 1;
        }
    }
    return null;
};

const res2 = binarySearch(numbers, 13);
console.log(res2);
