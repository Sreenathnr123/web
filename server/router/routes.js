const express=require('express')
var router=express.Router()

const {show} =require('../controller/service')
router.route("/show").get(show)
module.exports=router