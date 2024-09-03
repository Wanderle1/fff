let {baralhos, flashcards}= require('../data')

    const deletarBaralho = (requi, resp) => {
        const { ID } = requi.params
        const index = baralhos.findIndex(b => b.ID === Number(ID));

        if (index === -1) {
            return resp.status(404).send('Baralho não encontrado!')
            }

            const baralhoDeletado = baralhos.splice(index, 1)[0];

            flashcards.forEach(flashcard, index => {
                if(flashcards.IDbar === Number(ID)){
                    flashcards.splice(index, 1)
                }
            })

            return resp.status(200).send({message: 'Baralho deletado com sucesso!',baralho: baralhoDeletado})
 }


module.exports= deletarBaralho