// Variáveis
let contadorDeVisitas = 0; // Variável para contar o número de visitas
let usuarios = []; // Array para armazenar os usuários do formulário

// Função para atualizar o contador de visitas
function atualizarContadorDeVisitas() {
    contadorDeVisitas++; // Incrementa o contador de visitas
    document.getElementById("contadorDeVisitas").textContent = `Contador de Visitas: ${contadorDeVisitas}`;
    // Atualiza o conteúdo do elemento com o ID "contadorDeVisitas" com o número atualizado de visitas
}

// Função para exibir mensagem com nome e idade
function exibirMensagem(nome, idade) {
    let mensagem = document.getElementById("mensagem");
    // Obtém o elemento com o ID "mensagem" para exibir a mensagem

    // Verifica se o usuário é maior ou menor de idade
    if (idade >= 18) { // Estrutura Condicional
        mensagem.textContent = `Olá, ${nome}! Você é maior de idade.`;
    } else {
        mensagem.textContent = `Olá, ${nome}! Você é menor de idade.`;
    }
}

// Função para adicionar usuário ao array e exibir o total de usuários cadastrados
function adicionarUsuario(nome, idade) {
    usuarios.push({ nome, idade }); // Adiciona o usuário como objeto no array "usuarios"
    console.log(`Usuário ${nome} adicionado! Total de usuários: ${usuarios.length}`);
    // Exibe uma mensagem no console indicando o nome do usuário e o total de usuários
}

// Evento para o envio do formulário
document.getElementById("formularioContato").addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)

    let nome = document.getElementById("nome").value; // Obtém o valor do campo "nome"
    let idade = parseInt(document.getElementById("idade").value); // Converte o valor do campo "idade" para número inteiro

    // Verifica se o nome foi preenchido e se a idade é um número válido
    if (nome && !isNaN(idade)) { // Estrutura Condicional para validar os dados
        adicionarUsuario(nome, idade); // Chama a função para adicionar o usuário
        exibirMensagem(nome, idade); // Chama a função para exibir a mensagem de maioridade
    } else {
        alert("Preencha todos os campos corretamente!"); // Alerta caso os dados estejam incorretos
    }
});

// Função para verificar se um número é primo
function ehPrimo(numero) {
    if (numero <= 1) return false; // Números menores ou iguais a 1 não são primos
    for (let i = 2; i < numero; i++) { // Estrutura de repetição para verificar divisores
        if (numero % i === 0) return false; // Se o número for divisível por i, não é primo
    }
    return true; // Retorna true se o número for primo
}

// Estrutura de repetição para verificar números primos de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(`O número ${i} é primo? ${ehPrimo(i)}`);
    // Exibe no console se o número atual é primo ou não, chamando a função ehPrimo
}

// Executa a função de contador de visitas quando a página carrega
document.addEventListener("DOMContentLoaded", atualizarContadorDeVisitas);
