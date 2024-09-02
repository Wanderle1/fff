const { flashcards} = require('./data');

function listarPorBaralho(req, res){
    const {IDbar} = req.params
    const resultados = flashcards.filter(flashcard => flashcard.IDbar == IDbar)

    if(resultados.length > 0){
        res.status(200).send(resultados)
    }else{
        res.status(404).send({ messagem: 'Flashcard não encontrado neste Baralho!' })
    }
}

module.exports = listarPorBaralho