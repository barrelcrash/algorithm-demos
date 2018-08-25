import {Caretaker, Memento} from './memento'

export class Sort {
  constructor() {
    this.values = [];
    this.caretaker = new Caretaker();
  }

  saveStep(options) {
    let vals = this.values;
    if (options.pivot) {
      vals[options.pivot].pivot = true;
    }
    if (options.active) {
      vals[options.active].active = true;
    }
    this.caretaker.add(new Memento(vals.slice()));
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

