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
