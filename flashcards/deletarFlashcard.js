let {flashcards}= require('../data')

    const deletarFlashcard = (requi, resp) => {
        const { ID } = requi.params
        const index = flashcards.findIndex(f => f.ID === Number(ID));

        if (index === -1) {
            return resp.status(404).send('Flashcard não encontrado!')
            }

            const flashcardDeletado = flashcards.splice(index, 1)[0];

            return resp.status(200).send({message: 'Flashcard deletado com sucesso!',flashcard: flashcardDeletado})
 }


module.exports= deletarFlashcard