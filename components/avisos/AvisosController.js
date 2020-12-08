const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Pag Principal")
})

router.get('/avisos',(req,res)=>{
    res.send("Avisos cadastrados")
})

router.get('/avisos/novo', (req,res)=>{
    res.render('formulario_avisos.ejs')
})


module.exports = router