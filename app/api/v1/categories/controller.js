const Categories = require('./model')

const create = async (req, res , next) => {
    try {
        const {name} = req.body;
        const result = await Categories.create({name});
        res.status(201).json({
            data : result,
        }) ;
    } catch (error) {
        next (error)
    }
};

const index = async(req,res,next)=>{
    try {
        const result = await Categories.find().select('_id name');
        res.status(200).json({
            data : result,
        }) ;
    } catch (error) {
        next (error)
    }
}

const find = async(req, res,next)=>{
    try {
        const { categoriesId } = req.params;
        const result = await Categories.findOne({_id:categoriesId});
        if(!result){
            return res.status(404).json({message: 'Not Found'}) 
        }
        res.status(200).json({
            data : result,
        }) ;

    } catch (error) {
        next (error)
    }
}

const update = async(req, res, next)=>{
    try {
        const { categoriesId } = req.params;
        const { name } = req.body;
        const result = await Categories.findByIdAndUpdate(
            {_id: categoriesId},
            { name: name},
            { runValidators: true }
        )
        res.status(200).json({
            data : result,
        }) ;

    } catch (error) {
        next (error)
    }
}

module.exports = {
    index,
    create,
    find,
    update
}