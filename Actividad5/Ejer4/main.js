var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    Cuenta.prototype.depositar = function () {
        if (this.cantidad < 5) {
            return "El valor a depositar debe ser mayor a $5.00";
        }
        return "Se ha depositado correctamente $".concat(this.cantidad.toFixed(2));
    };
    Cuenta.prototype.retirar = function (valor) {
        if (valor < 5) {
            return "El retiro debe ser mayor a $5.00";
        }
        if (this.cantidad < valor) {
            return "No hay suficiente saldo en la cuenta para retirar esa cantidad.";
        }
        this.cantidad -= valor;
        return "Se ha retirado $".concat(valor.toFixed(2), ". Saldo restante: $").concat(this.cantidad.toFixed(2));
    };
    Cuenta.prototype.mostrarDatos = function () {
        return "Nombre: ".concat(this.nombre, "\nTipo de cuenta: ").concat(this.tipoCuenta, "\nN\u00FAmero de cuenta: ").concat(this.numeroCuenta, "\nSaldo actual: $").concat(this.cantidad.toFixed(2));
    };
    return Cuenta;
}());
// Variables para manipular la cuenta y elementos HTML
var cuenta = null;
var btnCrear = document.getElementById("crearCuenta");
var btnDepositar = document.getElementById("btnDepositar");
var btnRetirar = document.getElementById("btnRetirar");
var infoCuenta = document.getElementById("infoCuenta");
var montoRetiro = document.getElementById("montoRetiro");
var accionesDiv = document.querySelector(".acciones");
btnCrear.addEventListener("click", function () {
    var nombre = document.getElementById("nombre").value.trim();
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var tipoCuenta = document.getElementById("tipoCuenta").value.trim();
    var numeroCuenta = document.getElementById("numeroCuenta").value.trim();
    if (!nombre || isNaN(cantidad) || !tipoCuenta || !numeroCuenta) {
        alert("Por favor llena todos los campos correctamente.");
        return;
    }
    cuenta = new Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta);
    infoCuenta.textContent = cuenta.mostrarDatos();
    accionesDiv.style.display = "block";
});
btnDepositar.addEventListener("click", function () {
    if (!cuenta)
        return;
    var mensaje = cuenta.depositar();
    alert(mensaje);
    infoCuenta.textContent = cuenta.mostrarDatos();
});
btnRetirar.addEventListener("click", function () {
    if (!cuenta)
        return;
    var valor = parseFloat(montoRetiro.value);
    if (isNaN(valor)) {
        alert("Ingresa un monto válido para retirar.");
        return;
    }
    var mensaje = cuenta.retirar(valor);
    alert(mensaje);
    infoCuenta.textContent = cuenta.mostrarDatos();
});
