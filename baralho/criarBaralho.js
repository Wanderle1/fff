let {baralhos}= require('../data')

function criarBaralho(requi, resp){
    const {titulo}= requi.body
    if(!titulo){
        return resp.status(404).send('titulo obrigatorio!')
    }
    
    let id=1
    while(baralhos.some(b => b.ID === id)){
        id++
    }
    let newBaralho= {ID: id, titulo: titulo}
    baralhos.push(newBaralho)


    return resp.status(201).send({ ID: id })
}

module.exports = criarBaralho