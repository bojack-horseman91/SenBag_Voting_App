const router=require('express').Router()
const controller=require('./VotingLocationController')
const parser=require('body-parser')


router.get("/",controller.getAllLocation)
router.post("/make",parser.json(),controller.makeLocation)

module.exports=router
