// Obtém o elemento HTML onde o resultado será exibido
let display = document.getElementById("display");
// Variáveis que armazenam os números e operação escolhida
let primeiroNumero = "";
let operacao = "";
let segundoNumero = "";
let resultado = null;

// Atualiza o display com o valor passado
function atualizarDisplay(valor) {
    display.textContent = valor;
}

// Adiciona um número clicado ao primeiro ou segundo número, dependendo da operação escolhida
function adicionarNumero(num) {
    // Se nenhuma operação foi escolhida ainda, estamos montando o primeiro número
    if (operacao === "") {
        primeiroNumero += num;   // concatena o número digitado
        atualizarDisplay(primeiroNumero);
    } else {
        // Se a operação já foi escolhida, agora montamos o segundo número
        segundoNumero += num;
        atualizarDisplay(segundoNumero);
    }
}

// Guarda qual operação o usuário escolheu (+ - * /)
function adicionarOperacao(op) {
    if (primeiroNumero === "") return; // impede selecionar operação sem ter número antes
    operacao = op;
}

// Executa o cálculo quando o usuário aperta "="
function calcularResultado() {
    // Verifica se todos os dados necessários existem
    if (primeiroNumero === "" || operacao === "" || segundoNumero === "") {
        return; // se faltar algo, não faz nada
    }

    // Converte as strings para números reais
    let n1 = Number(primeiroNumero);
    let n2 = Number(segundoNumero);

    // Executa a operação correspondente
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
            // Evita divisão por zero
            resultado = n2 !== 0 ? (n1 / n2) : "Erro";
            break;
        default:
            resultado = "Erro";
    }

    // Mostra o resultado no display
    atualizarDisplay(resultado);

    // Permite continuar calculando a partir do resultado exibido
    primeiroNumero = String(resultado); // resultado vira o novo primeiro número
    operacao = "";                      // aguardamos nova operação
    segundoNumero = "";                 // limpa o segundo número
}
// Limpa todos os valores e reseta o display
function limpar() {
    primeiroNumero = "";
    operacao = "";
    segundoNumero = "";
    resultado = null;
    atualizarDisplay("0");
}