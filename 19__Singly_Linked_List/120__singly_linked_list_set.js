class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) this.unshift(val);
    
    
    if (index > 0) {
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
    }
    this.length++;
    return true;
  }
}

var list = new SinglyLinkedList();

list.push("don't");
list.push("Know");
list.push("JS");

list.unshift("You");
console.log(list, " = LIST");

console.log(list.get(-1), " get element of index -1");
console.log(list.get(0), " get element of index 0");
console.log(list.get(1), " get element of index 1");
console.log(list.get(2), " get element of index 2");
console.log(list.get(3), " get element of index 3");
console.log(list.get(4), " get element of index 4");

list.set(3, "React");
list.set(6, "Angular");
console.log(list, " = LIST after Set");

list.insert(4, "Edition");
console.log(list, " = LIST after Insert");

list.insert(4, "Second");
console.log(list, " = LIST after Insert");

list.insert(0, "Title: ");
console.log(list, " = LIST after Insert");
