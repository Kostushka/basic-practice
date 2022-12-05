// цикл для суммирования элементов массива
const sumElArr = (arr) => {
    let sum = 0;
    for (let el of arr) {
        sum += el;
    }
    return sum;
};
console.log(sumElArr([2, 4, 5, 9]));

// ---------------------------------------------------------

// рекурсия для суммирования элементов массива
const recurSumElArr = (arr) => {
    // базовый случай: один элемент в массиве
    if (arr.length === 1) {
        return arr[0];
    }
    // рекурсивный вызов: первый элемент плюс массив остальных
    return arr[0] + recurSumElArr(arr.splice(1, arr.length - 1));
};

console.log(recurSumElArr([2, 4, 5, 9, 5]));

// ---------------------------------------------------------

// рекурсия для получения количества элементов в массиве
const recurCountElArr = (arr) => {
    // базовый случай: пустой массив
    if (!arr.length) {
        return 0;
    }
    return 1 + recurCountElArr(arr.splice(1, arr.length - 1));
};
console.log('count ' + recurCountElArr([1, 4, 8, 90, 43, 3]));

// ---------------------------------------------------------

// рекурсия для получения наибольшего числа в массиве
const recurMaxElArr = (arr) => {
    // базовый случай: 2 элемента в массиве
    if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            return arr[0];
        } else {
            return arr[1];
        }
    }
    let max = recurMaxElArr(arr.splice(1, arr.length - 1));
    // console.log(arr[0], max);
    if (arr[0] > max) {
        return arr[0];
    } else {
        return max;
    }
};

console.log('max ' + recurMaxElArr([499, 5, 85, 356, 98, 2, 54]));

// --------------------------------------------------------------

// Быстрая сортировка массива
const num = [4, 3, 90, 58, 43, 21, 12, 45, 844, 333, 859, 23, 89, 75];
function qSort(arr) {
    // базовый случай
    if (arr.length < 2) {
        return arr;
    }

    // let num = arr[0]; // опорный элемент
    const betterEl = arr[Math.floor(arr.length / 2)]; // лучший вариант опорного элемента
    const min = [];
    const max = [];
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] < num) {
    //         min.push(arr[i]);
    //     } else {
    //         max.push(arr[i]);
    //     }
    // }
    for (let char of arr) {
        if (char < betterEl) {
            min.push(char);
        } else if (char > betterEl) {
            max.push(char);
        }
    }
    return [...qSort(min), betterEl, ...qSort(max)];
}
const result = qSort(num);
console.log(result);
