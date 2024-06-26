const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const result = document.querySelector(".result");
button.addEventListener("click", () => {
  result.innerHTML = taPago(inputs[0].value, inputs[1].value);
  result.innerHTML === "Mamou"
    ? result.classList.add("red")
    : result.classList.remove("red");
});

function taPago(inFront, left) {
  function isPaid() {
    let faltam = left;
    let sum = Math.floor(Math.random() * (25 - 5) + 5);
    for (x = 0; x < inFront; x++) {
      let mediaLigacao = Math.floor(Math.random() * (25 - 5) + 5);
      sum += mediaLigacao;
    }
    return sum > faltam ? true : false;
  }
  let pagoCount = 0;
  let naoPagoCount = 0;
  for (i = 0; i < 200; i++) {
    isPaid() ? pagoCount++ : naoPagoCount++;
  }
  pagoCount > naoPagoCount ? console.log("Tá pago") : console.log("Mamou");
  return pagoCount > naoPagoCount ? "Tá pago" : "Mamou";
  pagoCount = 0;
}
