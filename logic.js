var numero;
var position;
var toSubtract = [];
var numeros = [];
var currentFont = 40;
var hisvalues = [];

/**
 * Limpa o display e o array de números.
 */
function clearFunction(dataAndEvents, deepDataAndEvents) {
  document.getElementById("display").value = "";
  numeros.length = 0;
  return dataAndEvents;
}

/**
 * Remove o último valor inserido do display e do array de números.
 */
function clearLast() {
  numeros.pop();
  document.getElementById("display").value = numeros.join("");
}

/**
 * Adiciona o valor do botão clicado ao display e ao array de números.
 */
function myFunction(arg1, a, b, args, dataAndEvents, message) {
  var copies = event.target.value;
  numeros.push(copies);
  document.getElementById("display").value = numeros.join("");
}

/**
 * Calcula e exibe o resultado da expressão inserida.
 */
function result(property, object, chain, a3) {
  /**
   * Adiciona o valor atual ao histórico.
   */
  function display() {
    document.querySelector("#historyAccess").appendChild(result);
    result.textContent = document.getElementById("display").value;
    hisvalues.push(result.textContent);
  }

  var o = 0;
  var equal = 0;
  document.getElementById("display").style.height = "50px";
  var historyAccess = document.getElementById("historyAccess");
  var result = document.createElement("p");

  if (document.getElementById("historyAccess").childElementCount === 1 && display(), 
      hisvalues.includes(document.getElementById("display").value) || display(), 
      result.addEventListener("click", function(dataAndEvents) {
        numeros = event.target.textContent.split("");
        document.getElementById("display").value = numeros.join("");
        document.querySelector("#historyAccess").style.height = "50px";
        document.querySelector("#historyAccess").style.position = "relative";
        document.getElementById("toClose").textContent = "histórico";
        document.querySelector("#historyAccess").style.overflow = "hidden";
      }), 
      document.getElementById("historyButton").textContent = document.getElementById("display").value, 
      document.getElementById("historyButton").onclick = function(evt) {
        document.querySelector("#historyAccess").style.height = "100%";
        document.querySelector("#historyAccess").style.overflow = "overlay";
        document.querySelector("#historyAccess").style.position = "fixed";
        document.getElementById("toClose").textContent = "voltar";
      }, 
      document.getElementById("toClose").onclick = function(evt) {
        document.querySelector("#historyAccess").style.height = "50px";
        document.querySelector("#historyAccess").style.overflow = "hidden";
        document.querySelector("#historyAccess").style.position = "relative";
        document.getElementById("toClose").textContent = "histórico";
      }, 
      numeros.includes("%")) {
    if (numeros.includes("-")) {
      numeros[numeros.indexOf("-")] = "*";
      numeros[numeros.indexOf("%")] = "/100";
      var value = document.getElementById("display").value = eval(numeros.join(""));
      toSubtract = numeros.slice(0, numeros.indexOf("*"));
      document.getElementById("display").value = eval(toSubtract.join("")) - value;
    } else if (numeros.includes("+")) {
      numeros[numeros.indexOf("+")] = "*";
      numeros[numeros.indexOf("%")] = "/100";
      value = document.getElementById("display").value = eval(numeros.join(""));
      toSubtract = numeros.slice(0, numeros.indexOf("*"));
      document.getElementById("display").value = eval(toSubtract.join("")) + value;
    } else {
      numeros[numeros.indexOf("%")] = "*";
      numeros.push(document.getElementById("display").value = eval(numeros.join("")) / 100);
    }
  }

  var source = document.getElementById("display").value;
  numeros.length = 0;
  numeros.push(document.getElementById("display").value = eval(source));
}
