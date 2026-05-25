const buttonCep = document.getElementById('buscar-cep');
const logradouro = document.getElementById('logradouro');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');

buttonCep.addEventListener('click', (event) => {
    event.preventDefault();
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    getCepData(url);
});

async function getCepData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        logradouro.value = data.logradouro;
        bairro.value = data.bairro;
        cidade.value = data.localidade;
        estado.value = data.uf;
    } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
    }
}
