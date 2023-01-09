import "./index.css";

class MyLibrary {
  constructor() {
    console.log("Library constructor loaded");
  }

  init = ({ elementSelector }) => {
    console.log("Library method fired");
    const node = document.querySelector(elementSelector);

    if (!node) {
      console.debug('Multiplier Widget not found element with elementSelector: ' + elementSelector)
      return;
    }

    node.innerHTML = `<span>Multiplier Init</span>`;
  };
}

export default MyLibrary;
