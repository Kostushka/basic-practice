const numbers = [
    1, 13, 24, 45, 67, 89, 95, 134, 234, 556, 653, 985, 1894, 2944,
];

// Линейный поиск

function linearSearch1(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return null;
}
const result = linearSearch1(numbers, 24);
console.log(result);

const linearSearch2 = (arr, item) => {
    const lastIndex = arr.length - 1;
    const lastEl = arr[lastIndex];
    let itemIndex = 0;
    if (lastEl === item) {
        return lastIndex;
    } else {
        arr[lastIndex] = item;
    }
    // цикл без условия
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

const res = linearSearch2(numbers, 45);
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
        } else {
            low = mid + 1;
        }
    }
    return null;
};

const res2 = binarySearch(numbers, 13);
console.log(res2);
