class CreateQueue {
    constructor() {
        this.queue = [];
    }
    add(x) {
        this.queue.push(x);
    }
    get() {
        this.queue.shift(queue[0]);
    }
}

const queue = new CreateQueue();
queue.add(2);
queue.add(5);
queue.add(5);
queue.add(4);
queue.get();
console.log(queue);

class CreateStack {
    constructor() {
        this.stack = [];
    }
    add(x) {
        this.stack.push(x);
    }
    get() {
        this.stack.pop();
    }
}

const stack = new CreateStack();
stack.add(2);
stack.add(1);
stack.add(5);
stack.add(3);
stack.get();
console.log(stack);

class CreateList {
    constructor() {
        this.list = [];
    }
    add(x) {
        this.list.push(x);
    }
}

const list = new CreateList();
list.add(312);
list.add(3);
list.add(5);
list.add(90);
list.add(3);
console.log(list);
