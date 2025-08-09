var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }
    // Getter
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    // Setter
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    // Método para mostrar los datos
    Cancion.prototype.mostrarDatos = function () {
        return "T\u00EDtulo: ".concat(this.titulo, " | G\u00E9nero: ").concat(this.genero, " | Autor: ").concat(this.autor);
    };
    return Cancion;
}());
// Ejemplo de uso
var cancion1 = new Cancion("Bohemian Rhapsody", "Rock");
cancion1.setAutor("Queen");
console.log(cancion1.mostrarDatos());
