const Livro = require("./Livro");

const livro1 = new Livro("Clean Code", "Robert C. Martin", 89.9, 12);
const livro2 = new Livro("O Pequeno Príncipe", "Saint-Exupéry", 34.9, 5);
const livro3 = new Livro("O Menino, a Toupeira, a Raposa e o Cavalo", "Charlie Mackesy", 49.9, 7);

// LIVRO 1
livro1.descrever();
const valor1 = livro1.valorEmEstoque();
console.log("Valor total em estoque: R$ " + valor1);

console.log("------------------------------------");

// LIVRO 2
livro2.descrever();
const valor2 = livro2.valorEmEstoque();
console.log("Valor total em estoque: R$ " + valor2);

console.log("------------------------------------");

// LIVRO 3
livro3.descrever();
const valor3 = livro3.valorEmEstoque();
console.log("Valor total em estoque: R$ " + valor3);

//------------------------------------------------//

console.log(livro1.preco);
console.log(livro1.estoque);

livro1.preco = 99.9; // válido → aceita
console.log(livro1.preco);

livro1.preco = -50; // inválido → recusa
console.log(livro1.preco);

//------------------------------------------------//

const Categoria = require("./Categoria");

console.log("");
console.log("===== CATEGORIAS =====");
console.log("");

const cat1 = new Categoria("Tecnologia", "Livros sobre Programação");
const cat2 = new Categoria("Literatura", "Romances e Contos");

cat1.descrever();
console.log("");

cat2.descrever();
console.log("");
console.log("----- testando o setter -----");

cat1.nome = "TI"; // invalido: menos de 3 letras
console.log("Nome agora: " + cat1.nome);

cat1.nome = "Tecnologia da Informação"; // válido
console.log("Nome agora: " + cat1.nome);

//------------------------------------------------//

// Testando a venda de livros
console.log("");
console.log("===== TESTANDO VENDA DE LIVRO =====");
console.log("");

// 1. Venda válida (menor que o estoque)
console.log("Tentando vender 2 unidades:");
livro1.vender(2);

console.log("");

// 2. Venda inválida (maior que o estoque)
console.log("Tentando vender 999 unidades:");
livro1.vender(999);