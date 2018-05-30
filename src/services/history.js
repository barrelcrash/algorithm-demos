var history = [];

function addToHistory(moment) {
  history.push(moment);
}

function getHistory() {
  return history;
}

export default {
  addToHistory,
  getHistory
};
