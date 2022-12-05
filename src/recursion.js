const countDown = (num) => {
    console.log(num);
    // базовый случай
    if (num <= 0) {
        return;
    }
    // рекурсивный случай
    countDown(num - 1);
};
countDown(10);

const recurFac = (x) => {
    // базовый случай
    if (x === 1) {
        return 1;
    }
    // рекурсивный случай
    return x * recurFac(x - 1);
};
console.log(recurFac(3));

const noRecurFac = (x) => {
    let a = 1;
    for (let i = 2; i <= x; i++) {
        a *= i;
    }
    return a;
};
console.log(noRecurFac(3));
