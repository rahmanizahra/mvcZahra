const express=require('express');
const router=express.Router();
const clientController=require('../controllers/clientController');

router.get('/',clientController.getClientPage);

module.exports=router;