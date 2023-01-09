import MyLibrary from "../lib";
const myLibraryInstance = new MyLibrary();

console.log("myLibraryInstance", myLibraryInstance);
document.querySelector("body").innerHTML = `<h1>Hello World!</h1><div id="multiplier-place"></div>`;

myLibraryInstance.init({ elementSelector: '#multiplier-place', theme: 'light' });