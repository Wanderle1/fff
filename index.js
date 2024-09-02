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

const listarFlashcards = require('./flashcards/listarFlashcards')
app.get('/flashcards', listarFlashcards)

const atualizarFlashcards = require('./flashcards/atualizarFlashcards')
app.put('/flashcards/:ID', atualizarFlashcards)

const deletarFlashcard = require('./flashcards/deletarFlashcard')
app.delete('/flashcards/:ID', deletarFlashcard)

const listarPorBaralho = require('./listarPorBaralho')
app.get('/flashcards/baralhos/:IDbar', listarPorBaralho)

const listarPorID = require('./listarFlashcardsPorID')
app.get('/flashcards/:ID', listarPorID)

app.listen(port, () =>{
    console.log(`iniciado em  http://localhost:${port}`)
})