const btnEnviar = document.querySelector('#btn-enviar');
const formulario = document.querySelector('#formulario');
const cpfInput = document.getElementById("cpf");
const telefoneInput = document.getElementById("telefone");
const cepInput = document.getElementById("cep");
const rgInput = document.querySelector('#rg');
const selectExpedidor = document.querySelector('#expedidor');
const selectUf = document.querySelector('#uf');
const fileInput = document.querySelector('#arquivo');
const div = document.querySelector('#nomeArquivo');

//verificar CPF e CEP antes de enviar o formulario
btnEnviar.addEventListener('click', () => {
    const cpf = document.querySelector("#cpf").value;
    const cep = document.querySelector('#cep').value;

    //validar cpf
    function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    // Verifica se tem 11 dígitos
    if (cpf.length !== 11) return false;

    // Verifica sequência repetida
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Primeiro dígito verificador
    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Segundo dígito verificador
    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
    }

    //validar o cep
    function validarCEP(cep) {
    // 
    cep = cep.replace(/\D/g, '');

    //verificar se tem 8 digitos
    if (cep.length == 8)
        return true;
}

    formulario.addEventListener('submit', () => {
        if (validarCPF(cpf) == false) {
            event.preventDefault();
            alert("CPF inválido");
        }
        else if (validarCEP(cep) == false) {
            event.preventDefault();
            alert("CEP inválido");
        }
    })

})

//formatar CPF
cpfInput.addEventListener('input', (e) => {
    let cpf = e.target.value.replace(/\D/g, "");

    cpf = cpf.substring(0, 11);

    cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    e.target.value = cpf;
});

//formatar telefone
telefoneInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");

  value = value.substring(0, 11);

  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d)/, "($1) $2-$3");
  } else {
    value = value.replace(/^(\d{2})(\d{4})(\d)/, "($1) $2-$3");
  }

  e.target.value = value;
});

//formatar CEP
cepInput.addEventListener('input', (e) => {
    let cep = e.target.value.replace(/\D/g, "");

    cep = cep.substring(0, 8)

    cep = cep.replace(/^(\d{5})(\d{3})/, "$1-$2");

    e.target.value = cep;
}) 

//validador rg para liberar o orgao expedidor e uf do orgao expedidor
rgInput.addEventListener('blur', () => {
    if (rgInput.value) {
        selectExpedidor.setAttribute('required', '');
        selectExpedidor.removeAttribute('disabled');

        selectUf.setAttribute('required', '');
        selectUf.removeAttribute('disabled');
    }
    else {
        selectExpedidor.setAttribute('disabled', '');
        selectExpedidor.removeAttribute('required');

        selectUf.setAttribute('disabled', '');
        selectUf.removeAttribute('required');
    }
})

//escrever o nome do(s) arquivo(s) selecionados
fileInput.addEventListener('change', () => {
    const nomes = [];

    for (let arquivo of fileInput.files) {
        nomes.push(arquivo.name);
        
    }
    
    nomes.forEach(nome => {
        const newP = document.createElement('p')
        newP.textContent = nome;
        div.appendChild(newP);
    });
});