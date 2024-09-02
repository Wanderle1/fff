const {flashcards} = require('./data');

function listarPorPergunta(req, res){
    const { termo } = req.query
    
    const flashcard = flashcards.filter(flashcard => flashcard.pergunta.toLowerCase().includes(termo.toLowerCase()))

    if(flashcard.length === 0){
        res.status(404).send({ messagem: 'Flashcard não encontrado com esta pergunta!' })
    }
        res.status(200).send(flashcard);
}

module.exports = listarPorPergunta