
function createSortValue(value) {
  return {
    value,
    stepId: null,
    active: false,
    pivot: false
  };
}

export {createSortValue};
