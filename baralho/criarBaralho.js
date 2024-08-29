let {baralhos}= require('../data')

function criarBaralho(requi, resp){
    let id=1
    for(let i=0; i < baralhos.length; i++){
        if(baralhos[i].ID === id){
            id++
        }
    }
    let newBaralho= {ID: id, titulo: requi.body.titulo}
    baralhos.push(newBaralho)

    resp.status(201).send({mensagen:'Criado com sucesso', baralho: newBaralho})
}

module.exports = criarBaralho