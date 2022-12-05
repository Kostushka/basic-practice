const graph = {};
graph.you = ['bob', 'alice', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.anuj = [];
graph.peggy = [];
graph.claire = [];

const graphLesson = {
    getUp: ['make the bed', 'have breakfast', 'brush teeth', 'books'],
    ['have breakfast']: ['mango', 'bread', 'eggs'],
    books: ['network', 'algorithms', 'C', 'OC', 'rest'],
    react: ['React practice', 'rest'],
    rest: ['Youtube', 'chat with friends', 'react', 'goToBed'],
    goToBed: ['brush teeth again', 'think about the day'],
};

class List {
    constructor(first, graph) {
        this.list = [];
        this.firstEl = first;
        this.graph = graph;
    }
    add() {
        let test = {};
        let queue = [this.firstEl, ...this.graph[this.firstEl]];
        while (queue.length) {
            const el = queue.shift();
            if (!this.graph[el]) {
                this.graph[el] = [];
            }
            if (!test[el]) {
                this.list.push(el);
                queue = [...queue, ...this.graph[el]];
                test[el] = true;
            }
        }
        return this.list;
    }
}

const list = new List('getUp', graphLesson);
console.log(list.add());

function graphSearchSeller(graph, start) {
    let queue; // очередь
    const tested = {}; // проверенные элементы
    queue = [...graph[start]]; // добавляем в очередь всех соседей начальной точки

    // пока очередь не пуста
    while (queue.length) {
        const firstPeople = queue.shift(); // извлекаем первого соседа из очереди

        // если соседа нет в списке проверенных
        if (!tested[firstPeople]) {
            // если сосед удовлетворяет требованию, нашли искомый элемент
            if (isSellers(firstPeople)) {
                return `Yes! You have seller! It is ${firstPeople}`;
            } else {
                // иначе добавляем в очередь соседей первого соседа
                queue = [...queue, ...graph[firstPeople]];
                // добавляем соседа в список проверенных
                tested[firstPeople] = true;
                console.log(queue);
            }
        }
    }
    return null;
}

function isSellers(name) {
    if (name.slice(name.length - 1) === 'j') {
        return true;
    }
    return false;
}

console.log(graphSearchSeller(graph, 'you'));

// --------------------------------------------------------------------------

function graphSearchWithEnd(graph, start, end) {
    let count = 0;
    const tested = {};

    let queue;
    queue = [...graph[start]];

    while (queue.length) {
        const firstElQueue = queue.shift();

        if (!tested[firstElQueue])
            if (firstElQueue === end) {
                return count;
            } else {
                queue = [...queue, ...graph[firstElQueue]];
                tested[firstElQueue] = true;
                count++;
                console.log(queue);
            }
    }
    return false;
}

console.log(graphSearchWithEnd(graph, 'you', 'sandra'));
