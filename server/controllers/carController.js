const dataModel=require('../models/cars');
exports.getCarsPage=(req,res)=>{
    const data=dataModel.getCars();
    res.json(data);
}