import {Sort} from './sort';

// default values provided prior to user input


class QuickSort extends Sort {

  constructor() {
    if (!QuickSort.instance) {
      super(); // initialize values array and state caretaker
      QuickSort.instance = this;
    }
    return QuickSort.instance;
  }
  
  // determine comparison method and start the sort
  run() {
    let cmp =
      this.values.some(x => typeof x === 'string') ? this.cmpString : this.cmpI;
    this.sort(this.values, 0, this.values.length - 1, cmp);
  }

  sort(array, left, right, cmp) {

    // remember inital state
    if (left === 0 && right === array.length - 1) {
      this.saveStep();
    }

    // nothing to do
    if (left >= right) {
      return;
    }

    let rand = this.randomIntIncl(left, right);

    this.swap(array, left, rand); // set pivot
    
    this.saveStep(); // remember pivot set
    
    let last = left;

    for (let i = left + 1; i <= right; i++) {
      if (cmp(array[i], array[left]) < 0) {
        this.swap(array, ++last, i);
      }
    }

    this.saveStep();

    this.swap(array, left, last); // reset pivot
    
    this.saveStep();

    this.sort(array, left, last - 1, cmp); // sort left of pivot
    this.sort(array, last + 1, right, cmp); // sort right of pivot
  }

  cmpI(a, b) {
    return a - b;
  }

  cmpString(a, b) {
    return a.toString().localeCompare(b.toString());
  }

  swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  randomIntIncl(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
}

const quicksort = new QuickSort();

export {
  quicksort
};
