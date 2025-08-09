// Clase abstracta Persona
abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método para determinar si es mayor de edad
    public esMayorDeEdad(): string {
        return this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
    }

    // Método abstracto para mostrar datos
    public abstract mostrarDatos(): void;
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = 0;
    }

    // Método para cargar sueldo
    public cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    // Método para imprimir sueldo
    public imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo.toFixed(2)}`);
    }

    // Implementación del método abstracto
    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        console.log(this.esMayorDeEdad());
    }
}

// Ejemplo de uso
const empleado1 = new Empleado("Ana", "Gómez", "Av. Central 123", "555-1234", 25);
empleado1.cargarSueldo(1500.75);

empleado1.mostrarDatos();
empleado1.imprimirSueldo();
