var num1 = document.getElementById("numero1");
var num2 = document.getElementById("numero2");
var resultado = document.getElementById("resultado");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multi = document.getElementById("multiplica");
var div = document.getElementById("divide");
var expon = document.getElementById("exponente");
var raiz = document.getElementById("raiz");

function inputs() {
    var n1 = parseFloat(num1.value);
    var n2 = parseFloat(num2.value);
    return {n1, n2};
}

suma.addEventListener("click", function() {
    var {n1, n2} = inputs();
    resultado.textContent = n1 + n2;
})

resta.addEventListener("click", function() {
    var {n1, n2} = inputs();
    resultado.textContent = n1 - n2;
})

multi.addEventListener("click", function() {
    var {n1, n2} = inputs();
    resultado.textContent = n1 * n2;
})

div.addEventListener("click", function() {
    var {n1, n2} = inputs();
    resultado.textContent = n1 / n2;
})

expon.addEventListener("click", function() {
    var {n1, n2} = inputs();
    resultado.textContent = Math.pow(n1, n2);
})

raiz.addEventListener("click", function() {
    var {n1} = inputs(); 
    resultado.textContent = Math.sqrt(n1);
})