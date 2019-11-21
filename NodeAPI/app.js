const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routerUolNoticias = require('./routes/UolNoticias')

const ReqUol = require('./config/ReqUol')

// Config
    const app = express()
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(cors())

app.use('/noticias', routerUolNoticias)


app.listen(8000, (req,res)=>{
    console.log('Servidor rodando na porta 8000')
})