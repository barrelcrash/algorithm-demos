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

    let pivot, active;

    // remember inital state
    if (left === 0 && right === array.length - 1) {
      this.saveStep({pivot, active});
    }

    // nothing to do
    if (left >= right) {
      return;
    }

    let rand = this.randomIntIncl(left, right);

    this.swap(array, left, rand); // set pivot
    
    pivot = left;
    
    this.saveStep({pivot, active}); // remember pivot set

    for (active = left + 1; active <= right; active++) {
      this.saveStep({pivot, active});
      if (cmp(array[active].value, array[left].value) < 0) {
        this.swap(array, ++pivot, active);
        this.saveStep({pivot, active});
      }
    }

    active = null; // active is outside of array

    this.saveStep({pivot, active});

    this.swap(array, left, pivot); // reset pivot
    
    this.saveStep({pivot, active});

    this.sort(array, left, pivot - 1, cmp); // sort left of pivot
    this.sort(array, pivot + 1, right, cmp); // sort right of pivot
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
