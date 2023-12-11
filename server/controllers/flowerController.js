const dataModel=require('../models/flowers');
exports.getFlowersPage=(req,res)=>{
    const data=dataModel.getFlowers();
    res.json(data);
}