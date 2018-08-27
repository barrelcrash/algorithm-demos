import {Caretaker, Memento} from './memento'

export class Sort {
  constructor() {
    this.values = [];
    this.stepCount = 0;
    this.caretaker = new Caretaker();
  }

  saveStep(options) {

    let vals = JSON.parse(JSON.stringify(this.values));

    this.stepCount++;

    vals.forEach((x, i) => {

      x.stepId = this.stepCount;

      if (options.pivot === i) {
        x.pivot = true;
      }

      if (options.active === i) {
        x.active = true;
      }
    });

    this.caretaker.add(new Memento(vals));
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
   
  setValues(v) {
    this.values = v;
    this.stepCount = 0;
    this.caretaker.forget(); // restart step manager
  }

  // ersatz abstract interface
  sort() {
    throw new TypeError('Must override method "sort"');
  }

}

