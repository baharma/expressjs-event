const express =  require('express');
const router  = express();
const {create,index,find , update} = require('./controller'); 


router.post('/categories',create)
router.get('/categories',index)
router.get('/categories/:categoriesId',find)
router.put('/categories/:categoriesId',update)

module.exports = router;
