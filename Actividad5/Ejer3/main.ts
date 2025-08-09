class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }

    // Getter
    public getAutor(): string {
        return this.autor;
    }

    // Setter
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    // Método para mostrar los datos
    public mostrarDatos(): string {
        return `Título: ${this.titulo} | Género: ${this.genero} | Autor: ${this.autor}`;
    }
}

// Ejemplo de uso
const cancion1 = new Cancion("Bohemian Rhapsody", "Rock");
cancion1.setAutor("Queen");

console.log(cancion1.mostrarDatos());
