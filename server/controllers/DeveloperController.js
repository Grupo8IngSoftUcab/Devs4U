const model=require('../models');

module.exports={

    store(req,res,userId) {
      model.Developer.create({
        userId:userId,
        workHours:0,
        developerType:'',
        languages:[''],
        skills:[''],
      })
      .then(function(){ res.send(200,{message:'El usuario se ha creado correctamente'})})
      .catch(err => res.status(400).json('Error: ' + err));
    },

    update(req,res){
      model.Developer.update({
        workHours: req.body.workHours,
        developerType: req.body.developerType,
        languages: req.body.languages,
        skills:req.body.skills,
      }, {where: {userId: req.user.id}})
      .then(function(){res.send({success:true});})
      .catch(err => res.status(400).send({error:err}));
    },

    profile(req,res){
      model.User.findAll({
        where: {id: req.user.id}, 
        include: ['developer'],
        include:['developerProject']
      })
      .then(function(developer){res.send(developer)})
      .catch(err => res.status(400).json('Error: ' + err));
  
    }

}

