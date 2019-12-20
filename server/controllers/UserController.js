const model=require('../models');



module.exports={
    update (req,res){
<<<<<<< HEAD
        model.User.update({ //FALTA MODIFICAR EL PASSWORD   
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            aboutMe: req.body.aboutMe,
=======
        model.User.update({    
            nombre: req.body.name,
            correo: req.body.correo,
            //contraseña: req.body.contraseña,
            pais: req.body.pais,
            ciudad:req.body.ciudad,
            //calificacionesMedia: 0,
            sobreMi: req.body.sobreMi,
            descripcionCorta:req.body.descripcionCorta,
>>>>>>> backend-Hermes2
            web: req.body.web,
            linkedin: req.body.linkedin,
            facebook:req.body.facebook,
            instagram: req.body.instagram,
            twitter: req.body.instagram,
        }, {where: {id: req.user.id}})
        
        .then(function(){
           //if(req.user.rol=='developer') developerController.update(req,res);
           //else contractorController.update(req,res);   
           res.send({message:'todo fino'})
        })
        .catch(err => res.status(400).json('Error: ' + err));
        
    },

<<<<<<< HEAD
    profile(req,res){
        if(req.user.rol=='developer') developerController.profileInformation(req,res);
        else contractorController.profileInformation(req,res);
=======
    delete (req,res){
        model.User.destroy(    
         {where: {id: req.user.id}}).then(function(){
           //if(req.user.rol=='developer') developerController.delete(req,res);
           //else contractorController.delete(req,res);   
        }).catch(err => {res.send({req: req}); 
        console.log(err)}
        );      
    },

    profileInformation(req,res){
        //if(req.user.rol=='developer') developerController.profileInformation(req,res);
        //else contractorController.profileInformation(req,res);
>>>>>>> backend-Hermes2
    },




    
}