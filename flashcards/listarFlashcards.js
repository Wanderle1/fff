let {flashcards}= require('../data')

function listarFlashcards(requi, resp){
    resp.status(200).send(flashcards)
}

module.exports= listarFlashcards