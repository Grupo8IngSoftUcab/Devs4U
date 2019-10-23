const model=require('../../models');
module.exports={

    associate(email) {
        model.User.findAll({
            where: {
             email:email
            }
          }).then(function(user){
              model.Developer.create({
                  userId:user[0].id,
                  workHours:0,
                  developerType:'',
                  expierece:''
              })
          })
    },
    update(req,res){

        //Falta las validaciones
      model.Developer.update({
        workHours:req.body.workHours,
        developerType:req.body.developerType,
        expierece:req.body.expierece
      },
      {returning: true, where: {userId:req.user.id} }
      ).then(function(){
        console.log('se modificaron los datos del developer')

      })
    },

      /**
     * Display the specified resource.
     **/
    show(req,res){
      console.log('REQ ID', req.user.id);
      model.developer.findAll({
        where: {
         userId:req.user.id
        }
      }).then(function(developer){
      model.language.findAll({
        where:{
          userId:developer[0].userId
        }
      }).then(languages=>{
        model.skill.findAll({
          where:{
            userId:developer[0].userId
          }
        }).then(function(skills){    

        var userInfo = new Object();
          userInfo.user=req.user;
          userInfo.developer=developer;
          userInfo.languages=languages;
          userInfo.skills=skills;
          res.send(userInfo);
      }).catch(err => res.status(400).json('Error: ' + err));
      })
    })
    },

    /**
     * Show the form for editing the specified resource.
     **/
    /*edit(req,res){
      model.developer.findAll({
        where: {
         userId:req.user.id
        }
      }).then(function(developer){
        model.language.findAll({
        where:{
          userId:developer[0].userId
        }
      }).then(function(languages){
        model.skill.findAll({
          where:{
            userId:developer[0].userId
          }
        }).then(function(skills){
         res.render('user/developerEdit',{
            skills: skills,
            developer:developer[0],
            user: req.user,
            languages: languages
          })
      })
      })
    })
    },*/

    /**
     * Update the specified resource in storage.
     */

}
