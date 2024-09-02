let {baralhos}= require('../data')

function criarBaralho(requi, resp){
    let id=1
    while(baralhos.some(b => b.ID === id)){
        id++
    }
    let newBaralho= {ID: id, titulo: requi.body.titulo}
    baralhos.push(newBaralho)


    return resp.status(201).send({ ID: id })
}

module.exports = criarBaralho