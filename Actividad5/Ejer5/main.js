var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase abstracta Persona
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    // Método para determinar si es mayor de edad
    Persona.prototype.esMayorDeEdad = function () {
        return this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    };
    return Persona;
}());
// Clase Empleado que hereda de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, direccion, telefono, edad) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
        _this.sueldo = 0;
        return _this;
    }
    // Método para cargar sueldo
    Empleado.prototype.cargarSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    // Método para imprimir sueldo
    Empleado.prototype.imprimirSueldo = function () {
        console.log("Sueldo: $".concat(this.sueldo.toFixed(2)));
    };
    // Implementación del método abstracto
    Empleado.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, " ").concat(this.apellido));
        console.log("Direcci\u00F3n: ".concat(this.direccion));
        console.log("Tel\u00E9fono: ".concat(this.telefono));
        console.log("Edad: ".concat(this.edad));
        console.log(this.esMayorDeEdad());
    };
    return Empleado;
}(Persona));
// Ejemplo de uso
var empleado1 = new Empleado("Ana", "Gómez", "Av. Central 123", "555-1234", 25);
empleado1.cargarSueldo(1500.75);
empleado1.mostrarDatos();
empleado1.imprimirSueldo();
