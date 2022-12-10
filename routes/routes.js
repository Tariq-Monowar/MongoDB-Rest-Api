const express = require('express')
const userCollection = require('../models/models')
const route = express.Router()

route.post('/user',async(req,res)=>{
    try {
        const user = userCollection(req.body)
        const creatUser = await user.save()
        res.status(201).send(creatUser)
    } catch (err) {
        res.status(404).send(err)
    }
})

route.get('/user',async(req,res)=>{
    try {
        const getUser = await userCollection.find()
        res.status(200).send(getUser)
    } catch (err) {
        res.status(404).send(err)
    }
})

route.get('/user/:id',async(req,res)=>{
    try {
        const _id = req.params.id
        const getUser = await userCollection.findById({_id})
        res.status(200).send(getUser)
    } catch (err) {
        res.status(404).send(err)
    }
})

route.patch('/user/:id',async(req,res)=>{
    try {
        const _id = req.params.id
        const getUser = await userCollection.findByIdAndUpdate(_id,req.body)
        res.status(202).send(getUser)
    } catch (err) {
        res.status(404).send(err)
    }
})

route.delete('/user/:id',async(req,res)=>{
    try {
        const _id = req.params.id
        const getUser = await userCollection.findByIdAndDelete({_id})
        res.status(202).send(getUser)
    } catch (err) {
        res.status(404).send(err)
    }
})


module.exports = route