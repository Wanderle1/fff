const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (requi, res) => {
    console.log('Inicializando')
})

const criarBaralho = require('./baralho/criarBaralho')
app.post('/baralhos', criarBaralho)

const listarBaralho = require('./baralho/listarBaralho')
app.get('/baralhos', listarBaralho)

const atualizarBaralho = require('./baralho/atualizarBaralho')
app.put('/baralhos/:ID', atualizarBaralho)

const deletarBaralho = require('./baralho/deletarBaralho')
app.delete('/baralhos/:ID', deletarBaralho)

const criarflashcards = require('./flashcards/criarflashcards')
app.post('/flashcards/:ID', criarflashcards)

app.listen(port, () =>{
    console.log(`iniciado em  http://localhost:${port}`)
})