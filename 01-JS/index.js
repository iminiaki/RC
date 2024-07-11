class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const list = new Node('a',new Node('b'));
console.log(list);

// convert linked list to array
const linkedListToArray = (list) => {
    const array = [];
    let current = list;
    while (current !== null) {
        array.push(current.value);
        current = current.next;
    }
    return array;
};

// convert array to linked list
const arrayToLinkedList = (array) => {
    if (array.length === 0) return null;
    const list = new Node(array[0]);
    let current = list;
    for (let i = 1; i < array.length; i++) {
        current.next = new Node(array[i]);
        current = current.next;
    }
    return list;
};

// insert fn declaration
const insert = (value, list) => {
    return new Node(value, list);
};
console.log(insert('c',list));

// insertToEnd fn declaration
const insertToEnd = (value, list) => {
    const array = linkedListToArray(list);
    array.push(value);
    return arrayToLinkedList(array);
};
console.log(insertToEnd('d',list));

// size fn declaration
const size = (list) => {
    return linkedListToArray(list).length;
};
console.log(size(list));

// at fn declaration
const at = (list, n) => {
    return linkedListToArray(list)[n];
};
console.log(at(list,1));

// join fn declaration
const join = (list, separator) => {
    return linkedListToArray(list).join(separator);
};
console.log(join(list,' ~ '));

// map fn declaration
const map = (list, fn) => {
    const array = linkedListToArray(list);
    const mappedArray = array.map(fn);
    return arrayToLinkedList(mappedArray);
};
console.log(map(list, (list,value => value.toUpperCase())));

// filter fn declaration
const filter = (list, fn) => {
    const array = linkedListToArray(list);
    const filteredArray = array.filter(fn);
    return arrayToLinkedList(filteredArray);
};
console.log(join(filter(list, value => value === 'a'), '-')); // b

// find fn declaration
const find = (list, fn) => {
    return linkedListToArray(list).find(fn);
};
console.log(find(list, value => value === 'b'));