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
        if (a.includes(uniqEl)) {
            finalStr = el;
        }
    });
    return finalStr;
};

console.log(
    findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter'])
);
