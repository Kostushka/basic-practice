// Задача:
// Найти кол-во дублирующихся сиволов в строке,
// если строка состоит из символов англ. алфавита и цифр.
// Регистр не учитывать.
// Кол-во дублей неважно, важен сам факт дубля.
// Пример: f('aaabb') = 2; f(absd) = 0

// Вариант 1
const func = (str) => {
    const arr = []; //массив для записи дубл. символов
    const countObj = {}; //хэш-таблица бля счетчиков дубл. символов
    for (let char of str) {
        countObj[char] = 0; //записываем символы строки в таблицу как свойсво со значением ноль: 'a': 0
        for (let i = 0; i < str.length; i++) {
            if (char === str[i]) {
                countObj[char]++; //увеличиваем счетчик, на каждое совпадение взятого символа с символами строки
            }
        }
    }
    for (let key in countObj) {
        //ищем в таблице ключи со значениями больше 1 (дубли)
        if (countObj[key] > 1) {
            arr.push(key);
        }
    }
    return arr.length; //возвращаем кол-во дубл. символов
};
const res = func('aaabb');
const res2 = func('abcd');
const res3 = func('aabccdee');
console.log(res, res2, res3);

// -------------------------------------------------------------------------------------------

// Вариант 2
const func2 = (str) => {
    let count = 0; //счетчик для кол-ва дубл. символов вместо массива, который занимает память
    const countObj = {}; //хэш-таблица бля счетчиков дубл. символов
    for (let char of str) {
        // записываем символ в таблицу как счетчик или, если он уже записан, инкрментируем счетчик в таблице
        if (char in countObj) {
            countObj[char]++;
            if (countObj[char] === 2) {
                // если сивол встречается второй раз, инкрементируем счетчик кол-ва дублей
                count++;
            }
        } else {
            countObj[char] = 1;
        }
    }
    return count; //возвращаем счетчик
};
const result = func('aaabb');
const result2 = func('abcd');
const result3 = func('aabccdee');
console.log(result, result2, result3);

// --------------------------------------------------------------------------------------------------------

// Строка с хэштегом
function generateHashtag(string) {
    if (string.trim() === '') return false;

    const stringWithCamelCase = string
        .split(' ')
        .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
        .join('');

    const stringWithHashtag = `#${stringWithCamelCase.trim()}`;

    return stringWithHashtag.length > 140 ? false : stringWithHashtag;
}

console.log(generateHashtag('Hello my Friend!'));

// Перевернуть каждый второй элемент строки

function reverse(str) {
    return str
        .split(' ')
        .map((el, i) => {
            return i % 2 !== 0 ? el.split('').reverse().join('') : el;
        })
        .join(' ')
        .trim();
}
console.log(reverse('Hello friend hello my dear!'));

// Посчитать количество символов в строке и записать в хэш-таблицу: 'aba' => {'a': 2, 'b': 1}

function count(string) {
    if (string) {
        const countEl = {};
        for (let char of string) {
            countEl[char] = 0;
            console.log(countEl);
            for (let i = 0; i < string.length; i++) {
                if (char === string[i]) {
                    countEl[char]++;
                }
            }
        }
        console.log(countEl);
        return countEl;
    }
    return {};
}
count('Hello');

// Убрать разделитель и строку сделать camelCase

function toCamelCase(str) {
    if (str === '') return '';
    return str
        .split(/[-_]/)
        .map((el, i) => {
            return i === 0 ? el : el.charAt(0).toUpperCase() + el.slice(1);
        })
        .join('');
}
console.log(toCamelCase('the_stealth_warrior'));

const toCamelCase2 = (str) => {
    const arr = str.split(/[-_]/);
    if (arr.length < 2) {
        return str;
    } else {
        return (
            arr[0] +
            arr
                .slice(1)
                .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
                .join('')
        );
    }
};
console.log(toCamelCase2('the_stealth_warrior'));

function toCamelCase3(str) {
    arr = str.split('');
    out = [];
    toUpper = false;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '-':
            case '_':
                toUpper = true;
                break;
            default:
                out.push(toUpper ? arr[i].toUpperCase() : arr[i]);
                toUpper = false;
        }
    }
    return out.join('');
}
console.log(toCamelCase3('the_stealth_warrior'));

// --------------------------------------------------------------------------------------------------------

// > 1. Научиться нормализовать строки, приводя их все к единому виду, чтобы можно было определять точно какая на какую похожа или нет
// > 2. Найти большинство и "не такую как всех"

function normalString(string) {
    // убираем дубли, сортируем символы
    const uniq = {};
    const stringArr = [];

    for (let char of string.toLowerCase()) {
        uniq[char] = 1;
    }
    for (let el in uniq) {
        stringArr.push(el);
    }
    return stringArr.sort().join('');
}
const findUniq = (arr) => {
    const count = {}; // счетчик для строк в нормализованном массиве, например: {abc: 5, foo: 1}
    const finalArr = []; // массив для извлечения из счетчика уникальной строки
    let finalStr = ''; // итоговая строка

    const normalArr = arr.map((el) => normalString(el)); // приведение всех строк к одному виду для сравнения

    // записываем в счетчик элементы нормализованного массива
    for (let el of normalArr) {
        if (el in count) {
            count[el]++;
        } else {
            count[el] = 1;
        }
    }
    // записываем в массив уникальную строку со значением 1 в счетчике
    for (let key in count) {
        if (count[key] === 1) {
            finalArr.push(key);
        }
    }
    // преобразуем массив в строку
    const uniqEl = finalArr.join('');

    // находим в изначальном массиве элемент, включающий уникальную строку
    arr.map((el) => {
        const newEl = el.toLowerCase().split('').sort(); // преобразуем строки к виду нормализованных строк
        const a = [...new Set(newEl)].join(''); // убираем дубли, если есть
        // if (a.includes(uniqEl)) {
        //     finalStr = el;
        // }
        if (a === uniqEl) {
            finalStr = el;
        }
    });
    return finalStr;
};

console.log(
    findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter'])
);

// --------------------------------------------------------------------------
// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без каких-либо элементов с одинаковым значением рядом друг с другом и с сохранением исходного порядка элементов.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
    const arr = [];
    const newArr = [];
    for (let char of iterable) {
        arr.push(char);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            continue;
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

const resultcode = uniqueInOrder('AAAABBBCCDAABBB');
console.log(resultcode);

// Есть 8 шариков. 1 тяжелее остальных. Надо через два взвешивания на весах найти более тяжелый шарик.

const arr = [ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8];

function getMas(el) {
    // типа получаю массу переданных элементов
}

function findAnotherBall(arr) {
    const firstArr = [];
    const secondArr = [];
    const thirdArr = [];

    firstArr.push(arr[0], arr[1], arr[2]);
    secondArr.push(arr[3], arr[4], arr[5]);
    thirdArr.push(arr[7], arr[8]);

    if (getMas(firstArr) === getMas(secondArr)) {
        if (getMas(thirdArr[0]) > getMas(thirdArr[1])) {
            return thirdArr[0];
        } else {
            return thirdArr[1];
        }
    } else if (getMas(firstArr) > getMas(secondArr)) {
        if (getMas(firstArr[0] === firstArr[1])) {
            return firstArr[2];
        } else if (getMas(firstArr[0] > firstArr[1])) {
            return firstArr[0];
        } else {
            return firstArr[1];
        }
    } else {
        if (getMas(secondArr[0] === secondArr[1])) {
            return secondArr[2];
        } else if (getMas(secondArr[0] > secondArr[1])) {
            return secondArr[0];
        } else {
            return secondArr[1];
        }
    }
}

// vowelOne( "123, arou" ) => "000001011"

function vowelOne(s) {
    const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const arrS = s.split('');
    const resArr = [];
    arrS.map((el) => {
        if (vowel.includes(el)) {
            resArr.push(1);
        } else {
            resArr.push(0);
        }
    });
    return resArr.join('');
}

// Найти общие элементы массивов

const arr1 = [1, 4, 23, 23, 67, 43, 3];
const arr2 = [34, 1, 65, 65, 22, 6, 4, 23, 23];

function elements(arr1, arr2) {
    // const newArr = [];
    // // const count = {};
    // for (let char1 of arr1) {
    //     // if (!count[char1]) {
    //     for (let char2 of arr2) {
    //         if (char1 === char2) {
    //             newArr.push(char1);
    //             count[char1] = 1;
    //         }
    //     }
    //     // }
    // }
    // return newArr;
    const res = [];
    const arr1Hash = {};
    for (let char of arr1) {
        arr1Hash[char] = true;
    }
    for (let char of arr2) {
        if (arr1Hash[char]) {
            res.push(char);
            arr1Hash[char] = false;
        }
    }
    return res;
}

console.log(elements(arr1, arr2));
