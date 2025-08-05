// Passo 1: Executando o código no terminal e no console do navegador
console.log('Olá mundo!');

// ---

// Passo 2: Eu quero mais - Adicionando um elemento na tela
// Criando um novo elemento h1
let novoElemento = document.createElement('h1');

// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';

// Selecionando o elemento body
let elementoBody = document.body;

// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

// ---

// Passo 3: Deixando bonito agora - Estilizando o elemento
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// ---

// Passo 4: Usando a sua criatividade - Código de IA
// Exemplo de código gerado por IA para criar uma lista de itens

let lista = document.createElement('ul');
let itens = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

itens.forEach(itemTexto => {
  let itemLista = document.createElement('li');
  itemLista.innerText = itemTexto;
  itemLista.style.fontFamily = 'Arial, sans-serif';
  itemLista.style.fontSize = '20px';
  lista.appendChild(itemLista);
});

elementoBody.appendChild(lista);