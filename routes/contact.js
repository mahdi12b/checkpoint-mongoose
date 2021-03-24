const express = require('express');
const router = express.Router();
const controllers = require('../controllers/contact.controllers')
console.log(controllers.deletecontact)




// test routing
//router.get('/contact',(req,res)=>{
  //  res.send('hello');
//});




router.post('/',controllers.postContact)


router.get('/',controllers.getAllContact)

//GET one contact by id
router.get("/:id", controllers.getById);

//DELETE method 
router.delete('/:id',controllers.deleteContact)



//PUT methdod


router.put('/:id',controllers.putContact)
module.exports=router;