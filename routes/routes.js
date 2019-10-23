const userController=require('../controllers/UserController');
const developerController=require('../controllers/DeveloperController');
let lista = require('../controllers/ContratistController');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
var passport  = require('../config/passport');

module.exports=function(app){
  
    app.post('/create',userController.store);

    app.post('/login',userController.login);

    /*app.post('/profile',developerController.getById);

    app.get('/profile',ensureAuthenticated,function(req,res){
        if(req.user.rol=='developer'){
            res.render('user/developerProfile',{
                user: req.user
            });
        }
    })*/

    app.get('/',function(req,res){
        res.redirect('/create');
    });

    app.get('/create',forwardAuthenticated,function(req,res){
        res.render('user/create');
    });

    app.get('/login',forwardAuthenticated,function(req,res){
        res.render('user/login');
    });

    app.get('/dashboard',ensureAuthenticated,function(req,res){
        res.render('user/dashboard',{
            user: req.user
          });
    })

    app.get('/dashboard',ensureAuthenticated,function(req,res){
        res.render('user/dashboard',{
            user: req.user
          });
    })
   
    app.get('/Gestion-Proyecto',ensureAuthenticated,function(req,res){
        res.render('user/Gestion-Proyecto');
    })

    app.get('/createproyect',ensureAuthenticated,function(req,res){
        lista.lista(req,res);
    })

    app.get('/contratist/:value.contratistId/Eliminar',ensureAuthenticated,function(req,res){
        res.render('/contratist/Eliminar');
    })

    app.get('/contratist/:value.contratistId/Agregar',ensureAuthenticated,function(req,res){
        lista.storeIteracion(req,res);
    })

    app.post('/createproyect', (req, res, next) => {
        lista.store(req,res);
      });
    
    app.get('/cancelproyect',ensureAuthenticated,function(req,res){
        res.render('user/cancelproyect');
    })

    app.post('/cancelproyect', (req, res, next) => {
        res.redirect('user/Gestion-Proyecto');
      });

    app.get('/requestproyect',ensureAuthenticated,function(req,res){
        res.render('user/requestproyect');
    })

    app.post('/requestproyect', (req, res, next) => {

        lista.Actualizar(req.body.valor,req.params.id);
        res.redirect('user/Gestion-Proyecto');
      });

    app.get('/modifyproyect',ensureAuthenticated,function(req,res){
        res.render('user/modifyproyect');
    })

    app.post('/modifyproyect', (req, res, next) => {

        lista.Actualizar(req.body.valor,req.params.id);
        res.redirect('user/Gestion-Proyecto');
      });

    app.get('/logout',userController.logout)
}
