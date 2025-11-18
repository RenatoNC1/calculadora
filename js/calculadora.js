// 1. Pega a tela (display) pelo ID
    const display = document.getElementById('display');

    function adicionarNumero(numero) {
        // 2. Se o display ainda estiver mostrando '0', substitui pelo novo número.
        // Se já tiver números, apenas adiciona o novo.
        if (display.textContent === '0') {
            display.textContent = numero;
        } else {
            display.textContent += numero;
        }
    }