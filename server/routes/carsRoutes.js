const express=require('express');
const router=express.Router();
const carController=require('../controllers/carController');

router.get('/',carControllerr.getCarsPage);

module.exports=router;