import {Caretaker, Memento} from './memento'

export class Sort {
  constructor() {
    this.values = [];
    this.caretaker = new Caretaker();
  }

  saveStep() {
    this.caretaker.add(new Memento(this.values.slice()));
  }

  getStep(index) {
    return this.caretaker.get(index);
  }

  getFinalStep() {
    return this.caretaker.get(this.caretaker.len() - 1);
  }

  getNumSteps() {
    return this.caretaker.len();
  }
   
  setValues(values) {
    this.values = values;
    this.caretaker.forget(); // restart step manager
  }

  // ersatz abstract interface
  sort() {
    throw new TypeError('Must override method "sort"');
  }

}

