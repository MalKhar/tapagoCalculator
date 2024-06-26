import { calcTimeLeft } from "./time.js";

const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const result = document.querySelector(".result");
button.addEventListener("click", () => {
  result.innerHTML = taPago(inputs[0].value, `${inputs[1].value}:00`);
  result.innerHTML === "Mamou"
    ? result.classList.add("red")
    : result.classList.remove("red");
});

function taPago(inFront, goal) {
  function isPaid() {
    let faltam = calcTimeLeft(goal);
    let sum = Math.floor(Math.random() * (25 - 5) + 5);
    for (let x = 0; x < inFront; x++) {
      let mediaLigacao = Math.floor(Math.random() * (25 - 5) + 5);
      sum += mediaLigacao;
    }
    return sum > faltam ? true : false;
  }
  let pagoCount = 0;
  let naoPagoCount = 0;
  for (let i = 0; i < 1000; i++) {
    isPaid() ? pagoCount++ : naoPagoCount++;
  }
  console.log("pago count" + pagoCount);
  let result = (pagoCount / 1000) * 100;
  console.log(result);
  return result > 0
    ? `Você tem ${result.toFixed(1)}% de chance de já estar pago`
    : "Mamou";
}
