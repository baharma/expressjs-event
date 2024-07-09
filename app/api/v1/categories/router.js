const express =  require('express');
const router  = express();


router.get('/category',(red,res)=>{
    console.log('asdasdasd')
    res.status(200).json({
        message: 'List of Categories'
    })
})

module.exports = router;
