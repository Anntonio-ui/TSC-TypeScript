class Cuenta {
  public nombre: string;
  public cantidad: number;
  public tipoCuenta: string;
  public numeroCuenta: string;

  constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipoCuenta = tipoCuenta;
    this.numeroCuenta = numeroCuenta;
  }

  depositar(): string {
    if (this.cantidad < 5) {
      return "El valor a depositar debe ser mayor a $5.00";
    }
    return `Se ha depositado correctamente $${this.cantidad.toFixed(2)}`;
  }

  retirar(valor: number): string {
    if (valor < 5) {
      return "El retiro debe ser mayor a $5.00";
    }
    if (this.cantidad < valor) {
      return "No hay suficiente saldo en la cuenta para retirar esa cantidad.";
    }
    this.cantidad -= valor;
    return `Se ha retirado $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`;
  }

  mostrarDatos(): string {
    return `Nombre: ${this.nombre}\nTipo de cuenta: ${this.tipoCuenta}\nNúmero de cuenta: ${this.numeroCuenta}\nSaldo actual: $${this.cantidad.toFixed(2)}`;
  }
}

// Variables para manipular la cuenta y elementos HTML
let cuenta: Cuenta | null = null;

const btnCrear = document.getElementById("crearCuenta") as HTMLButtonElement;
const btnDepositar = document.getElementById("btnDepositar") as HTMLButtonElement;
const btnRetirar = document.getElementById("btnRetirar") as HTMLButtonElement;
const infoCuenta = document.getElementById("infoCuenta") as HTMLElement;
const montoRetiro = document.getElementById("montoRetiro") as HTMLInputElement;
const accionesDiv = document.querySelector(".acciones") as HTMLElement;

btnCrear.addEventListener("click", () => {
  const nombre = (document.getElementById("nombre") as HTMLInputElement).value.trim();
  const cantidad = parseFloat((document.getElementById("cantidad") as HTMLInputElement).value);
  const tipoCuenta = (document.getElementById("tipoCuenta") as HTMLInputElement).value.trim();
  const numeroCuenta = (document.getElementById("numeroCuenta") as HTMLInputElement).value.trim();

  if (!nombre || isNaN(cantidad) || !tipoCuenta || !numeroCuenta) {
    alert("Por favor llena todos los campos correctamente.");
    return;
  }

  cuenta = new Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta);
  infoCuenta.textContent = cuenta.mostrarDatos();
  accionesDiv.style.display = "block";
});

btnDepositar.addEventListener("click", () => {
  if (!cuenta) return;
  const mensaje = cuenta.depositar();
  alert(mensaje);
  infoCuenta.textContent = cuenta.mostrarDatos();
});

btnRetirar.addEventListener("click", () => {
  if (!cuenta) return;
  const valor = parseFloat(montoRetiro.value);
  if (isNaN(valor)) {
    alert("Ingresa un monto válido para retirar.");
    return;
  }
  const mensaje = cuenta.retirar(valor);
  alert(mensaje);
  infoCuenta.textContent = cuenta.mostrarDatos();
});
