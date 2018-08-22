
class Memento {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

class Caretaker {
  constructor() {
    this.mementos = [];
  }

  add(memento) {
    this.mementos.push(memento);
  }

  get(index) {
    return this.mementos[index];
  }

  pop() {
    return this.mementos.pop();
  }

  len() {
    return this.mementos.length;
  }

  forget() {
    this.mementos = [];
  }
}

export {
  Caretaker,
  Memento
};

