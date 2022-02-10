import "bootstrap";
import "./style.css";
window.onload = () => {
  document.querySelector(".card").classList.add(generarRandomSimbol());
  document.querySelector(".card").innerHTML = generarRandomNumber();
};

let generarRandomNumber = () => {
  let numberos = [
    "A",
    "K",
    "J",
    "Q",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ];
  let n = Math.floor(Math.random() * numberos.length);
  return numberos[n];
};
let generarRandomSimbol = () => {
  let simbolos = ["suithearts", "suitclubs", "suitspades", "suitdiamond"];
  let s = Math.floor(Math.random() * simbolos.length);
  return simbolos[s];
};
