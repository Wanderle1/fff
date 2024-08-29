let {baralhos}= require('../data')

function atualizarBaralho(requi, resp){
    const { ID } = requi.params
    const newTitulo = requi.body.titulo;

    const baralho = baralhos.find(b => b.ID == ID);

    if (!baralho) {
        return resp.status(404).send({ message: 'Baralho não encontrado' });
        }

        baralho.titulo = newTitulo;
        resp.status(200).send({message: 'Baralho atualizado com sucesso!',baralho: baralho})
}

module.exports= atualizarBaralho