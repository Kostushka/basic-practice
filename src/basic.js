// Переменные
let a = 5;
a = 8;
const b = 10;

// Циклы
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 5) {
    i++;
    console.log(i);
}

// Объект
const obj = {
    a: 2,
    b: {
        c: 1,
    },
};

const copy = JSON.parse(JSON.stringify(obj));
console.log(copy.b === obj.b);

class Obj {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}
const object = new Obj(5, 6);
console.log(object);

function objectFunc(a, b) {
    this.a = a;
    this.b = b;
    this.c = 5;
}
const object2 = new objectFunc(5, 6);
console.log(object2);
