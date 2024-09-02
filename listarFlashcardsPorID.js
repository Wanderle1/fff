const {flashcards} = require('./data');

function listarPorID(req, res){
    const ID = req.params
    const flashcard = flashcards.find(flashcard => flashcard.ID === Number(ID))
    console.log(flashcard)
    console.log(ID)
    console.log(flashcards)

    if(!flashcard){
        res.status(404).send({ messagem: 'Flashcard não encontrado neste Baralho!' })
    }
        res.status(200).send(flashcard);
}

module.exports = listarPorID