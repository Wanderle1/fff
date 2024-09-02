let {baralhos, flashcards}= require('../data')

function criarflashcards(requi, resp){
    const { titulo }= requi.body
    if(!titulo){
        return resp.status(404).send('titulo obrigatorio!')
    }
    if(baralhos.length == 0){
        console.log('É necessario criar um baralho!')
        let newBaralho= {ID: 1, titulo: titulo}
        let idBar=newBaralho.ID
        baralhos.push(newBaralho)
        let id=1
        while(flashcards.some(f => f.ID === id)){
            id++
        }
        let newflashcard= {ID: id, titulo: titulo, IDbar: idBar}
        flashcards.push(newflashcard)
        return resp.status(201).send({mensagem:'Criado com sucesso', flashcard: newflashcard})
        
    }else{
        const { ID } = requi.params
        const baralho = baralhos.find(b => b.ID === Number(ID))
        console.log({ID})

        if (!baralho) {
            return resp.status(404).send('Baralho não encontrado!')
            }

        let id=1
        while(flashcards.some(f => f.ID === id)){
            id++
        }
        let newflashcard= {ID: id, titulo: titulo, IDbar: baralho.ID}
        flashcards.push(newflashcard)

        return resp.status(201).send({mensagem:'Criado com sucesso', flashcard: newflashcard})
}
}

module.exports = criarflashcards