const express = require('express')

const router = express.Router()

const Aviso = require ('./Avisos')

router.get('/',(req,res)=>{
    res.send("Pag Principal")
})

router.get('/avisos',(req,res)=>{
    res.send("Avisos cadastrados")
})

router.get('/avisos/novo', (req,res)=>{
     res.render('formulario_avisos.ejs')
})

router.post('/avisos/novo', async (req, res)=>{
    const titulo = req.body.titulo
    const data = req.body.data
    const mensagem = req.body.mensagem

   const msg = await Aviso.salvar({titulo, data, mensagem})
   res.render('formulario_avisos',{msg})


})





module.exports = router