//Importar as dependencias
const express = require('express')
const bodyParser = require('body-parser')

//Importando as rotas do aviso
const routerAvisos = require('./components/Avisos/AvisosController')
const router = require('./components/Avisos/AvisosController')

//Iniciando o express
const app = express()

//Configuração da view engine e a pasta pública
app.set('view engine','ejs')
app.use(express.static('public'))

//Configuração do body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//Rotas
app.use(routerAvisos)

//escutando a porta 3000
app.listen(3000)

