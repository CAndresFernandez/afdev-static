const appLocalStorage = {
  saveToJson: function (key, value) {
    // prepare the data in JSON to be able to save it
    stringData = JSON.stringify(value);
    // save the data in local storage
    localStorage.setItem(key, stringData);
  },
  getFromJson: function (key) {
    // parse the JSON from localStorage
    dataFromLocalStorage = JSON.parse(localStorage.getItem(key));
    // return the parsed JSON
    return dataFromLocalStorage;
  },
};
