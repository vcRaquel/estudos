const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

// path é o caminho do arquivo no computador( pastas, etc), o join irá juntar o path com o dirname que é o caminho da página do projeto dentro do projeto
server.set('views', path.join(__dirname, 'views'))

server.use(route)

server.listen(3000, ()=> console.log("RODANDO")) 