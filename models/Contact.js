const mongoose = require('mongoose');
  const  schema  = mongoose.Schema;

  const userSchema = new schema ({
      name:{
          type: String,
          required:true
          },
      email:{
          type:String,
          required:true,
          unique:true
        },
      favoriteFoods:String
      
      
  });
  module.exports = contact = mongoose.model('contact', userSchema)
