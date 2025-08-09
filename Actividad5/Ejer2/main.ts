class Calculadora {
    public sumar(a: number, b: number): number {
        return a + b;
    }

    public restar(a: number, b: number): number {
        return a - b;
    }

    public multiplicar(a: number, b: number): number {
        return a * b;
    }

    public dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return a / b;
    }

    public potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    public factorial(n: number): number {
        if (n < 0) {
            throw new Error("No existe factorial de un número negativo");
        }
        let resultado = 1;
        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

const calc = new Calculadora();

function operacion(tipo: string) {
    const num1 = parseFloat((document.getElementById("num1") as HTMLInputElement).value);
    const num2 = parseFloat((document.getElementById("num2") as HTMLInputElement).value);
    const resultadoEl = document.getElementById("resultado") as HTMLElement;

    try {
        let resultado: number;

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

        resultadoEl.textContent = `Resultado: ${resultado}`;
    } catch (error: any) {
        resultadoEl.textContent = `Error: ${error.message}`;
    }
}
