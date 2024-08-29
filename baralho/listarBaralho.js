let {baralhos}= require('../data')

function listarBaralho(requi, resp){
    resp.status(200).send(baralhos)
}

module.exports= listarBaralho