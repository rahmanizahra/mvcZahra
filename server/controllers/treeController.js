const dataModel=require('../models/trees');
exports.getTreePage=(req,res)=>{
    const data=dataModel.getTrees();
    res.json(data);
}