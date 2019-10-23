const model=require('../models');
const passport=require('passport');
const bcrypt = require('bcryptjs');
module.exports={

    associate(email) {
        model.User.findAll({
            where: {
             email:email
            }
          }).then(function(user){
              newFunction(user);
              console.log('Developer creado')
          }); 
    }, 
}