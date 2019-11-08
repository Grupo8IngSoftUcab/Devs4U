
const express = require('express');
const router = express.Router();
const userController=require('../controllers/UserController');
const portfolioProjectController=require('../controllers/PortfolioProjectController');
const projectController=require('../controllers/ProjectController');
const { ensureAuthenticated, forwardAuthenticated } = require('../../config/auth');
const { check, body } = require('express-validator');

//Users
router.post('/register', [
    // username must be an email
    check('email', 'Your email is not valid').isEmail().normalizeEmail(),//Valida si la sintaxis del email es correcta
    check('email', 'Your email is required').not().isEmpty(),// Valida si el campo email esta vacío
    check('recovery', 'Passwords do not match').custom((value, { req }) => (value === req.body.password)),//Valida la confirmacion de la contrasña
    check('password', 'Passwords is required').not().isEmpty(),  //valida si el campo password esta vacío
    check('password')
    .not().isLength({ min: 4, max: 22 }).withMessage('Password must be at least 4 chars long and must be at most 22 chars long'),
    check('firstName')
    .isLength({ min: 8, max: 30 }).withMessage('Name field must be at least 8 chars long and must be at most 30 chars long')
    .not().isAlpha().withMessage('Name field must only contain letters'),//Valida si el campo solo tiene letras
    check('lastName')
    .isLength({ min: 8, max: 30 }).withMessage('lastname field must be at least 8 chars long and must be at most 30 chars long')
    .not().isAlpha().withMessage('lastname field must only contain letters')


], userController.register);
router.post('/login',userController.login);
router.post('/logout',userController.logout);
router.post('/check/auth', userController.checkAuthentication);
router.post('/profile/:rol',userController.show); 
router.post('/edit', userController.edit);
router.post('/delete', userController.delete);

//Search user
router.post('/user/search', userController.showSearch); //failing
router.post('/user/see/byId/:id', userController.showId); //done
router.post('/user/see/contractor/byId/:id', userController.showContractorId);
router.post('/user/see/all', userController.showAll); //done


//Projects
router.post('/project/create',projectController.create); //done test
router.post('/project/see/all',projectController.allProjects); //done
router.post('/project/mine',projectController.myProjects);
router.post('/project/cancel/:id',projectController.cancel);
router.post('project/mine/developer',projectController.allProjectsDeveloper);
//router.post('/project/id/:id/postulation/delete',projectController.seeById);
//router.post('/project/id/:id/postulate',projectController.postulate);
//router.post('/project/id/:id/postulations',projectController.seePostulations);
router.post('/project/modify/:id',projectController.modify);
router.post('/project/id/:id',projectController.seeById);


// Portfolio Projects
router.post('/portfolio/project/create', portfolioProjectController.create) //done test
router.post('/portfolio/project/update/:id', portfolioProjectController.update)//done testing
router.post('/portfolio/project/delete/:id', portfolioProjectController.delete)//done testing
router.post('/portfolio/project/show/:id', portfolioProjectController.show) //done test
router.post('/portfolio/project/list/:id', portfolioProjectController.list)//done test
router.post('/portfolio/project/list', portfolioProjectController.myList)//done test

//app.get('/dashboard',ensureAuthenticated,userController.showDashboard)
//app.get('/logout',userController.logout)

//app.get('/edit',ensureAuthenticated,userController.edit);
//app.get('/profile',ensureAuthenticated,userController.show)

module.exports = router;
