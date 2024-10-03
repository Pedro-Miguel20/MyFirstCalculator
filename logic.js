var numero;
var position;
/** @type {Array} */
var toSubtract = [];
/** @type {Array} */
var numeros = [];
/** @type {number} */
var currentFont = 40;
/** @type {Array} */
var hisvalues = [];
/**
 * @param {?} dataAndEvents
 * @param {?} deepDataAndEvents
 * @return {?}
 */
function clearFunction(dataAndEvents, deepDataAndEvents) {
  return document.getElementById("display").value = "", numeros.length = 0, dataAndEvents;
}
/**
 * @return {undefined}
 */
function clearLast() {
  numeros.pop();
  document.getElementById("display").value = numeros.join("");
}
/**
 * @param {?} arg1
 * @param {?} a
 * @param {?} b
 * @param {?} args
 * @param {?} dataAndEvents
 * @param {?} message
 * @return {undefined}
 */
function myFunction(arg1, a, b, args, dataAndEvents, message) {
  var copies = event.target.value;
  numeros.push(copies);
  document.getElementById("display").value = numeros.join("");
}
/**
 * @param {?} property
 * @param {?} object
 * @param {?} chain
 * @param {?} a3
 * @return {undefined}
 */
function result(property, object, chain, a3) {
  /**
   * @return {undefined}
   */
  function display() {
    document.querySelector("#historyAccess").appendChild(result);
    result.textContent = document.getElementById("display").value;
    hisvalues.push(result.textContent);
  }
  /** @type {number} */
  var o = 0;
  /** @type {number} */
  var equal = 0;
  /** @type {string} */
  document.getElementById("display").style.height = "50px";
  /** @type {(HTMLElement|null)} */
  var historyAccess = document.getElementById("historyAccess");
  /** @type {Element} */
  var result = document.createElement("p");
  if (1 === document.getElementById("historyAccess").childElementCount && display(), hisvalues.includes(document.getElementById("display").value) || display(), result.addEventListener("click", function(dataAndEvents) {
    numeros = (result = event.target.textContent).split("");
    document.getElementById("display").value = numeros.join("");
    /** @type {string} */
    document.querySelector("#historyAccess").style.height = "50px";
    /** @type {string} */
    document.querySelector("#historyAccess").style.position = "relative";
    /** @type {string} */
    document.getElementById("toClose").textContent = "hist\u00f3rico";
    /** @type {string} */
    document.querySelector("#historyAccess").style.overflow = "hidden";
  }), document.getElementById("historyButton").textContent = document.getElementById("display").value, document.getElementById("historyButton").onclick = function(evt) {
    /** @type {string} */
    document.querySelector("#historyAccess").style.height = "100%";
    /** @type {string} */
    document.querySelector("#historyAccess").style.overflow = "overlay";
    /** @type {string} */
    document.querySelector("#historyAccess").style.position = "fixed";
    /** @type {string} */
    document.getElementById("toClose").textContent = "voltar";
  }, document.getElementById("toClose").onclick = function(evt) {
    /** @type {string} */
    document.querySelector("#historyAccess").style.height = "50px";
    /** @type {string} */
    document.querySelector("#historyAccess").style.overflow = "hidden";
    /** @type {string} */
    document.querySelector("#historyAccess").style.position = "relative";
    /** @type {string} */
    document.getElementById("toClose").textContent = "hist\u00f3rico";
  }, numeros.includes("%")) {
    if (numeros.includes("-")) {
      /** @type {string} */
      numeros[numeros.indexOf("-")] = "*";
      /** @type {string} */
      numeros[numeros.indexOf("%")] = "/100";
      /** @type {*} */
      var value = document.getElementById("display").value = eval(numeros.join(""));
      toSubtract = numeros.slice(0, numeros.indexOf("*"));
      /** @type {number} */
      document.getElementById("display").value = eval(toSubtract.join("")) - value;
    } else {
      if (numeros.includes("+")) {
        /** @type {string} */
        numeros[numeros.indexOf("+")] = "*";
        /** @type {string} */
        numeros[numeros.indexOf("%")] = "/100";
        /** @type {*} */
        value = document.getElementById("display").value = eval(numeros.join(""));
        toSubtract = numeros.slice(0, numeros.indexOf("*"));
        /** @type {(number|string)} */
        document.getElementById("display").value = eval(toSubtract.join("")) + value;
      } else {
        /** @type {string} */
        numeros[numeros.indexOf("%")] = "*";
        numeros.push(toString(document.getElementById("display").value = eval(numeros.join("")) / 100));
      }
    }
  }
  var source = document.getElementById("display").value;
  /** @type {number} */
  numeros.length = 0;
  numeros.push(document.getElementById("display").value = eval(source));
}
;
