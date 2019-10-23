const model=require('../models');
const developerController=require('../controllers/DeveloperController');
const passport=require('passport');
const bcrypt = require('bcryptjs');

module.exports={

     /**
     * Store a newly created resource in storage.
     */
    store(req,res){
        bcrypt.genSalt(10, (err, salt) => { //Funcion to encrypt the password and store the data
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) throw err;
                model.user.create({ 
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    email:req.body.email,
                    password:hash,
                    rol:req.body.rol,
                }).then(function(){
                    email=req.body.email;
                    if(req.body.rol=='developer') developerController.associate(email); //function to associate the developer information
                    if(req.body.rol== 'contratist') developerController.associate(email);
                    console.log('usuario creado')
                    res.redirect('/login');
                })
            })
        })
    },

    
    /**
     *Log in to the system
     */
    login(req, res, next){
        passport.authenticate('local', {
            successRedirect: '/dashboard',
            failureRedirect: '/login' 
        })(req, res, next);
    },
    /**
     *Log out to the system
     */
    logout(req, res){
        req.logout();
        res.redirect('/login');
    },
}