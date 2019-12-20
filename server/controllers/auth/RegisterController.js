//const developerController=require('../DeveloperController');
const contratistaController=require('../ContratistaController');
const freelancerController=require('../FreelancerController')
const model=require('../../models');
const bcrypt = require('bcryptjs');


module.exports={

    register(req,res){

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err){ 
                    res.status(400).json('Error: ' + err)}
                else{ 
                    model.User.create({ 
                        nombre: req.body.nombre,
                        rol: req.body.rol,
                        email: req.body.email,
                        password: hash,
                        pais: req.body.pais,
                        ciudad:req.body.ciudad,
                        calificacionesMedia: 0,
                        sobreMi: '',
                        descripcionCorta:'',
                        web: '',
                        linkedin: '',
                        facebook:'',
                        instagram: '',
                        twitter: ''
                    })
                    .then(function(usuario){
                        if (usuario.rol=='freelancer') freelancerController.guardarUsuario(req,res,usuario.id);
                        if (usuario.rol=='contratista')contratistaController.guardarUsuario(req,res,usuario.id);
                        else console.log('error')
                    })
                    .catch(err => res.status(400).json('Error: ' + err));
                }
            })
        })
    }
}