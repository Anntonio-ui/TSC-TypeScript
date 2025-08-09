class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: "izquierda" | "centrado" | "derecha";

    constructor() {
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion = "izquierda";
    }

    // Método 1: Asignar datos
    public setDatos(titulo: string, color: string, fuente: string): void {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    // Método 2: Alineación
    public setAlineacion(alineacion: "izquierda" | "centrado" | "derecha"): void {
        this.alineacion = alineacion;
    }

    // Método 3: Mostrar en HTML
    public imprimir(): void {
        const cabecera = document.getElementById("cabecera") as HTMLElement;
        cabecera.textContent = this.titulo;
        cabecera.style.color = this.color;
        cabecera.style.fontFamily = this.fuente;
        cabecera.className = this.alineacion; // Clase CSS para la alineación
    }
}

// Uso
const pagina = new CabeceraPagina();
pagina.setDatos("Bienvenidos a mi página", "blue", "Georgia");
pagina.setAlineacion("centrado");
pagina.imprimir();
