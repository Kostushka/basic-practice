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
