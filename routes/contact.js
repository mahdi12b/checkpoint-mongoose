const express = require('express');
const router = express.Router();
const controllers = require('../controllers/contact.controllers')
console.log(controllers.deletecontact)




// test routing
//router.get('/contact',(req,res)=>{
  //  res.send('hello');
//});




router.post('/contact',controllers.postContact)


router.get('/contact',controllers.getAllContact)

//DELETE method 
router.delete('/contact/:id',controllers.deleteContact)


//PUT methdod


router.put('/contact/:id',controllers.putContact)
module.exports=router;