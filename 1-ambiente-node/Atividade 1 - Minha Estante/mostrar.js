const estante = require('"d:/Paiva/2ºSEM/PBE1/AULA1/1-ambiente-node/Atividade1-MinhaEstante./estante.js"');

console.log("=====================");
console.log("    MINHA ESTANTE    ");
console.log("=====================");
console.log("");

// ===== LIVRO 1 (Modelo)
console.log("Titulo: " + estante.livro1.titulo);
console.log("Autor: " + estante.livro1.autor);
console.log("Preco: R$ " + estante.livro1.preco);
console.log("Estoque: " + estante.livro1.estoque + " unidades");
console.log("");

// ===== LIVRO 2 (Preenchendo as 3 lacunas)
console.log("Titulo: " + estante.livro2.titulo);

// LACUNA 1: estante.livro2.autor
console.log("Autor: " + estante.livro2.autor);

// LACUNA 2: estante.livro2.preco
console.log("Preco: R$ " + estante.livro2.preco);

// LACUNA 3: Linha do estoque para o livro2
console.log("Estoque: " + estante.livro2.estoque + " unidades");

console.log("");
console.log("=====================");
