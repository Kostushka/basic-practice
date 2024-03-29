const arr = [23, 87, 12, 45, 32, 98, 11, 3, 5, 45, 78, 32, 90, 2, 4];

// Сортировка выбором
// функция, которая принимает массив и возвращает индекс наименьшего элемента
const findMinIndex = (arr) => {
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
        const minIndex = findMinIndex(arr);
        // извлекаем наименьший элемент из неупорядоченного массива и помещаем в новый, пока неупорядоченный массив не закончится
        const minEl = arr.splice(minIndex, 1)[0];
        newArr.push(minEl);
    }

    return newArr;
};

module.exports = {
    selectionSort: selectionSort,
    findMinIndex: findMinIndex,
};

const a = selectionSort(arr);
console.log(a);

// -----------------------------------------------------------------------------------------------------------
// Способ второй сортировки выбором
const selectionSort2 = (array) => {
    for (let i = 0; i < array.length; i++) {
        // берем первый элемент массива
        let min = i;
        // перебираем массив, присваиваем индекс наименьшего элемента в min
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        // нашли индекс наименьшего элемента
        // меняем местами значение первого элемента и значение наименьшего элемента
        [array[i], array[min]] = [array[min], array[i]];
        // на следующей итерации работаем со вторым элементом массива и т.д.
    }
    return array;
};

console.log(selectionSort2(arr));

// ---------------------------------------------------------------------------------------
// быстрая сортировка
function qsort(arr, start, end) {
    let pivot, i;

    if (start >= end) {
        return;
    }

    swap(arr, start, Math.floor((start + end) / 2));

    pivot = start;

    for (i = start + 1; i <= end; i++) {
        if (arr[start] - arr[i] > 0) {
            swap(arr, ++pivot, i);
        }
    }

    swap(arr, start, pivot);

    qsort(arr, start, pivot - 1);
    qsort(arr, pivot + 1, end);
}

function swap(arr, i, j) {
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

qsort(arr, 0, arr.length - 1);
console.log(arr);
