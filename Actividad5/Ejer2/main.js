var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return a / b;
    };
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    Calculadora.prototype.factorial = function (n) {
        if (n < 0) {
            throw new Error("No existe factorial de un número negativo");
        }
        var resultado = 1;
        for (var i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
var calc = new Calculadora();
function operacion(tipo) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultadoEl = document.getElementById("resultado");
    try {
        var resultado = void 0;
        switch (tipo) {
            case "sumar":
                resultado = calc.sumar(num1, num2);
                break;
            case "restar":
                resultado = calc.restar(num1, num2);
                break;
            case "multiplicar":
                resultado = calc.multiplicar(num1, num2);
                break;
            case "dividir":
                resultado = calc.dividir(num1, num2);
                break;
            case "potencia":
                resultado = calc.potencia(num1, num2);
                break;
            case "factorial":
                resultado = calc.factorial(num1);
                break;
            default:
                resultado = 0;
        }
        resultadoEl.textContent = "Resultado: ".concat(resultado);
    }
    catch (error) {
        resultadoEl.textContent = "Error: ".concat(error.message);
    }
}
