// const arr1 = [
//     45, 38, 90, 1, 3, 4, 7, 87, 32, 98, 67, 345, 987, 432, 793, 488, 666, 44,
// ];
// const arr2 = [
//     45, 38, 90, 1, 3, 4, 7, 87, 32, 98, 67, 345, 987, 432, 793, 488, 666, 44,
// ];

// // selectSort

// function getMinI(arr) {
//     let minEl = arr[0];
//     let minI = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < minEl) {
//             minEl = arr[i];
//             minI = i;
//         }
//     }
//     return minI;
// }

// function selectSort(arr) {
//     const newArr = [];
//     while (arr.length) {
//         const minI = getMinI(arr);
//         const minEl = arr.splice(minI, 1)[0];
//         newArr.push(minEl);
//     }
//     return newArr;
// }
// const res1 = selectSort(arr1);
// console.log(res1);

// // qSort

// function qSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     const x = arr[Math.floor(arr.length / 2)];
//     const minArr = [];
//     const maxArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < x) {
//             minArr.push(arr[i]);
//         } else if (arr[i] > x) {
//             maxArr.push(arr[i]);
//         }
//     }
//     return [...qSort(minArr), x, ...qSort(maxArr)];
// }

// const res2 = qSort(arr2);
// console.log(res2);

// // linearSearch

// function linearSearch(arr, item) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === item) {
//             return i;
//         }
//     }
//     return null;
// }

// console.log(linearSearch(res1, 45));

// // bSearch

// function bSearch(arr, item) {
//     let low = 0;
//     let high = arr.length - 1;
//     while (low <= high) {
//         const mid = Math.floor((low + high) / 2);
//         if (arr[mid] === item) {
//             return mid;
//         } else if (arr[mid] < item) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return null;
// }
// console.log(bSearch(res2, 45));

// // recursion

// function fac(num) {
//     if (num < 2) {
//         return 1;
//     }
//     return num * fac(num - 1);
// }

// const f = (num) => {
//     let x = 1;
//     for (let i = 2; i <= num; i++) {
//         x = x * i;
//     }
//     return x;
// };

// console.log(f(4));

// console.log(fac(6));

const arr = [3, 44, 56, 32, 564, 43, 90, 1];

const graph = {
    a: ['b', 'c'],
    b: ['d', 'f'],
    c: [],
};

// написать юнит тесты для функций
