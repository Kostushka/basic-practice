const arr = [23, 87, 12, 45, 32, 98, 11, 3, 5, 45, 78, 32, 90, 2, 4];

// Сортировка выбором
// функция, которая принимает массив и возвращает индекс наименьшего элемента
const findMinEl = (arr) => {
    let minEl = arr[0];
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minEl) {
            // перебираем элементы массива, пока не найдем наименьший
            minEl = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
};
const selectionSort = (arr) => {
    const newArr = [];

    while (arr.length) {
        const minIndex = findMinEl(arr);
        // извлекаем наименьший элемент из неупорядоченного массива и помещаем в новый, пока неупорядоченный массив не закончится
        const minEl = arr.splice(minIndex, 1)[0];
        newArr.push(minEl);
    }

    return newArr;
};

const a = selectionSort(arr);
console.log(a);
