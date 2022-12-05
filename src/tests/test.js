// 1. toBe() - соотвествие ===
let number;

beforeEach(() => {
    number = 26;
});

test('number should be correct for toBe', () => {
    expect(number).toBe(26);
});

// 2. toMatchObject - неполное соответсвие двух объектов по свойствам / соотвествие массивов объектов по кол-ву объектов

let obj;
let obj2;

beforeEach(() => {
    obj = {
        name: 'Nastya',
        age: 24,
        job: false,
    };
    obj2 = {
        age: 24,
    };
});

test('value should be correct for toMatchObject', () => {
    expect(obj).toMatchObject(obj2); // {name: 'Nastya', age: 24, job: false} => {age: 24}
    expect([{ name: 'K' }, { age: 'b', with: 2 }]).toMatchObject([
        { name: 'K' },
        {},
    ]); // [{name: 'K'}, {...}] => [{}, {}]
});

// 3. toBeInstanceOf - объект является экземпляром класса

let array;
let object;
class StringConstructor {
    constructor(a) {
        this.key = a;
    }
    leave() {
        return 'bye';
    }
}

beforeEach(() => {
    array = [];
    object = {};
});

test('value should be correct for toBeInstanceOf', () => {
    const string = new StringConstructor('hello');

    expect(array).toBeInstanceOf(Array); // объект яыляется экземпляром класса Array
    expect(object).toBeInstanceOf(Object); // объект яыляется экземпляром класса Object
    expect(string).toBeInstanceOf(StringConstructor); // объект string является экземпляром класса StringConstructor
    expect(string.key).toBe('hello');
    expect(string.leave()).toBe('bye');
});
