let display = document.getElementById("display");
let primeiroNumero = "";
let operacao = "";
let segundoNumero = "";
let resultado = null;

function atualizarDisplay(valor) {
    display.textContent = valor;
}

function adicionarNumero(num) {
    if (operacao === "") {
        primeiroNumero += num;
        atualizarDisplay(primeiroNumero);
    } else {
        segundoNumero += num;
        atualizarDisplay(segundoNumero);
    }
}

function adicionarOperacao(op) {
    if (primeiroNumero === "") return; // impede operação sem número
    operacao = op;
}

function calcularResultado() {
    if (primeiroNumero === "" || operacao === "" || segundoNumero === "") {
        return;
    }

    let n1 = Number(primeiroNumero);
    let n2 = Number(segundoNumero);

    switch (operacao) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            resultado = n2 !== 0 ? (n1 / n2) : "Erro";
            break;
        default:
            resultado = "Erro";
    }

    atualizarDisplay(resultado);

    // prepara para continuar operando
    primeiroNumero = String(resultado);
    operacao = "";
    segundoNumero = "";
}

