let {flashcards}= require('../data')

const atualizarFlashcards=(requi, resp)=>{
    const { ID } = requi.params
    const newTitulo = requi.body.titulo;

    const flashcard = flashcards.find(f => f.ID === Number(ID));

    if (!flashcard) {
        return resp.status(404).send({ message: 'Flashcard não encontrado' });
        }

        flashcard.titulo = newTitulo;
        return resp.status(200).send({message: 'Baralho atualizado com sucesso!',flashcard: flashcards})
}

module.exports= atualizarFlashcards