var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina() {
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion = "izquierda";
    }
    // Método 1: Asignar datos
    CabeceraPagina.prototype.setDatos = function (titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    };
    // Método 2: Alineación
    CabeceraPagina.prototype.setAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    // Método 3: Mostrar en HTML
    CabeceraPagina.prototype.imprimir = function () {
        var cabecera = document.getElementById("cabecera");
        cabecera.textContent = this.titulo;
        cabecera.style.color = this.color;
        cabecera.style.fontFamily = this.fuente;
        cabecera.className = this.alineacion; // Clase CSS para la alineación
    };
    return CabeceraPagina;
}());
// Uso
var pagina = new CabeceraPagina();
pagina.setDatos("Bienvenidos a mi página", "blue", "Georgia");
pagina.setAlineacion("centrado");
pagina.imprimir();
