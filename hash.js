// Хэш-таблица - массив + хэш-функция: (строка) => i в массиве для значения

const book = {};

book['a'] = 200;
book['b'] = 250;
book['c'] = 300;

console.log(book, book['a']);

// исключение дубликатов
// использовать массив плохо, потому что надо пробегать по каждому элементу массива :(
const pN = [];
function addPN(name) {
    for (let char of pN) {
        if (char === name) {
            return;
        }
    }
    pN.push(name);
}
addPN('mm');
addPN('ko');
addPN('lo');
addPN('mm');
console.log(pN);

// хэш-таблица сразу сообщает, есть ли свойство в списке :)
const phoneNum = {};

function addPhoneNum(name, num) {
    if (phoneNum[name]) {
        return;
    } else {
        phoneNum[name] = num;
    }
}

addPhoneNum('jane', 123);
addPhoneNum('tom', 1223);
addPhoneNum('john', 23);
addPhoneNum('jane', 123);
console.log(phoneNum);

// использование хэш-таблицы как кэша
const cash = {};

function getEl(el) {
    let res;
    if (cash[el]) {
        return cash[el];
    } else {
        res = el + 5;
        cash[el] = res;
        return res;
    }
}

console.log(getEl(5));
console.log(getEl(5));
