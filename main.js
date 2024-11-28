const form = document.getElementById('num-form');
const valorNumA = document.getElementById('numA');
const valorNumB = document.getElementById('numB');

let formValido = false;

function apagarValores() {
    valorNumA.value = ' ';
    valorNumB.value = ' ';
};

function validarNumeros(numA, numB) {
    return numB > numA;
};

apagarValores();

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Números válidos, o número <b>${valorNumB.value}</b> é maior que o número <b>${valorNumA.value}</b>`;
    const mensagemErro = "O <b>Número B</b> deve ser maior que o <b>Número A</b>";

    formValido = validarNumeros(valorNumA.value, valorNumB.value);
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        apagarValores();
        numB.style.border = '';
        document.querySelector('.mensagem-erro').style.display = 'none';
    } else {
        numB.style.border = '1px solid red';
        const containerMensagemErro = document.querySelector('.mensagem-erro');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        document.querySelector('.mensagem-sucesso').style.display = 'none';
    };
});
