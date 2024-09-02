let {baralhos}= require('../data')

const atualizarBaralho=(requi, resp)=>{
    const { ID } = requi.params
    const newTitulo = requi.body.titulo;

    const baralho = baralhos.find(b => b.ID === Number(ID));

    if (!baralho) {
        return resp.status(404).send({ message: 'Baralho não encontrado' });
        }

        baralho.titulo = newTitulo;
        return resp.status(200).send({message: 'Baralho atualizado com sucesso!',baralho: baralho})
}

module.exports= atualizarBaralho