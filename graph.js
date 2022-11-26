const graph = {};
graph.you = ['bob', 'alice', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.anuj = [];
graph.peggy = [];
graph.claire = [];

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

console.log(graphSearchWithEnd(graph, 'you', 'peggy'));
