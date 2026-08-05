class Categoria {
    #nome;
    #descricao;
    #totalDeLivros;
    
    constructor(nome, descricao) {
     this.#nome = nome;
     this.#descricao = descricao;
     this.#totalDeLivros = 0;
    }

    get nome() {
        return this.#nome;
    }
    
    get descricao() {
        return this.#descricao;
    }

    get totalDeLivros() {
        return this.#totalDeLivros;
    }
    
    set nome(novoNome) {
        if (novoNome.length < 3) {
            console.log("ERRO: o nome da categoria precisa de pelo menos 3 letras.");
            return;
        }
        this.#nome = novoNome;
    }
 
    descrever() {
            console.log("Categoria: " + this.#nome);
            console.log("Descrição: " + this.#descricao);
            console.log("Total de livros: " + this.#totalDeLivros);
    }

}

module.exports = Categoria;