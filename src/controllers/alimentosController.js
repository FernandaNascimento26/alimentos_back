const express = require('express')
const client = require('@prisma/client')
const bodyParse = require('body-parser')

const prisma = new client.PrismaClient()

const router = express.Router()

router.get('/', async (req, res) => {
    const posts = await prisma.alimento.findMany({
        
    })
    res.json(posts)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const posts = await prisma.alimento.findMany({
            where: {
                id : parseInt(id)
            }
        })

        res.json(posts)
    } catch (e) {

        console.log(e)
        res.status(400).send(e);

    }
})

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params

    try {

        const result = await prisma.alimento.delete({
            where: {
                id : parseInt(id)
            },
        })

        res.json(result)

    } catch (e) {

        console.log(e)
        res.status(400).send(e);

    }
    
});

router.put('/update/:id', bodyParse.json() ,async (req, res) => {

    const { id } = req.params
    const { nome, ingredientes } = req.body

    try {

        const result = await prisma.alimento.update({
            data: { 
                nome: nome,
                ingredientes : ingredientes
            },
            where : {
                id : parseInt(id)
            }
        })

        res.json(result)

    } catch (e) {

        console.log(e)
        res.status(400).send(e);

    }

})

router.post('/create', bodyParse.json() ,async (req, res) => {

    const { nome, ingredientes } = req.body

    try {

        const result = await prisma.alimento.create({
            data: { 
                nome: nome,
                ingredientes : ingredientes
            },
        })

        res.json(result)

    } catch (e) {

        console.log(e)
        res.status(400).send(e);

    }
})

module.exports = app => app.use('/alimentos', router)