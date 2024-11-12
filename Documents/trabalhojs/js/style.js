// Variáveis
let visitCount = 0;
let users = []; // Array para armazenar os usuários do formulário

// Função para atualizar o contador de visitas
function updateVisitCount() {
    visitCount++;
    document.getElementById("visitCount").textContent = `Contador de Visitas: ${visitCount}`;
}

// Função para exibir mensagem com nome e idade
function displayMessage(name, age) {
    let message = document.getElementById("message");
    if (age >= 18) { // Estrutura Condicional
        message.textContent = `Olá, ${name}! Você é maior de idade.`;
    } else {
        message.textContent = `Olá, ${name}! Você é menor de idade.`;
    }
}

// Função para adicionar usuário ao array e exibir o total de usuários cadastrados
function addUser(name, age) {
    users.push({ name, age }); // Tipo de dado: objeto
    console.log(`Usuário ${name} adicionado! Total de usuários: ${users.length}`);
}

// Evento para o envio do formulário
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o comportamento padrão do formulário

    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);

    if (name && !isNaN(age)) { // Estrutura Condicional para validar os dados
        addUser(name, age);
        displayMessage(name, age);
    } else {
        alert("Preencha todos os campos corretamente!");
    }
});

// Operações Matemáticas e Operações Lógicas
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Usando Estrutura de Repetição para verificar números primos de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(`O número ${i} é primo? ${isPrime(i)}`);
}

// Executar a função de contador de visitas quando a página carrega
document.addEventListener("DOMContentLoaded", updateVisitCount);
