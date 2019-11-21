const express = require('express')
const router = express.Router()
const ReqUol = require('../config/ReqUol')
const xmlintojson = require('xmlintojson')
const request = require('request')


router.get('/tecnologia', (req,res)=>{
    request(ReqUol.tecnologia, function (error, response, body) {
        if (error) throw new Error(error)

            let json = xmlintojson(body)
            
            
            return res.send(json.rss.channel.item.filter(not => {return not!=null}))

        })
})

router.get('/jogos', (req,res)=>{
    request(ReqUol.jogos, function (error, response, body) {
        if (error) throw new Error(error)
    
            let json = xmlintojson(body)
            return res.send(json.rss.channel.item.filter(not => {return not!=null}));
        })
})

router.get('/cinema',(req,res)=>{
    request(ReqUol.cinema, function (error, response, body) {
        if (error) throw new Error(error)
            let json = xmlintojson(body)
            return res.send(json.rss.channel.item.filter(not => {return not!=null}));
        })
})

router.get('/vestibular', (req,res)=>{
    request(ReqUol.vestibular, function (error, response, body) {
        if (error) throw new Error(error)
    
            let json = xmlintojson(body)
            return res.send(json.rss.channel.item.filter(not => {return not!=null}));
        })
})

router.get('/economia', (req,res)=>{
    request(ReqUol.economia, function (error, response, body) {
        if (error) throw new Error(error)
    
            let json = xmlintojson(body)
            return res.send(json.rss.channel.item.filter(not => {return not!=null}));
        })
})

module.exports = router