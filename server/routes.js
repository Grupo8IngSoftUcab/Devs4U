const express = require('express');
const router = express.Router();
const storage = require('./middlewares/multerConfig')
const multer = require('multer')
const upload = multer(storage)

//Middlewares
const { ensureAuthenticated, forwardAuthenticated } = require('./middlewares/auth');


//Auth Controller
const {register}=require('./controllers/auth/RegisterController')
const {login}=require('./controllers/auth/LoginController')
const {logout}=require('./controllers/auth/LogoutController')
const {checkAuthentication}=require('./controllers/auth/AuthenticationController.js')

//Controllers
const userController = require('./controllers/UserController');
const projectController=require('./controllers/ProjectController');
const projectPostulationController=require('./controllers/ProjectPostulationController');
const experienciaController=require('./controllers/ExperienciaController')
const educacionController=require('./controllers/EducacionController')
const freelancerController=require('./controllers/FreelancerController')
const contractorController=require('./controllers/ContractorController')
const reviewController=require('./controllers/ReviewController')
const searchController = require('./controllers/SearchController')
const validationController = require('./controllers/ValidationController');
//const projectController=require('./controllers/ProjectController');



//Auths' Routes
router.post('/register',validationController.ValidacionesRegistro, register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/check',checkAuthentication);

//Rutas del perfil
router.get('/profile',ensureAuthenticated,validationController.ModificarPerfil, userController.consultarPerfil);
router.put('/profile/edit',ensureAuthenticated, userController.modificarPerfil);
router.put('/profile/addphoto',ensureAuthenticated, upload.single('image'), userController.agregarFotoPerfil);
router.delete('/profile/delete',ensureAuthenticated, userController.eliminarPerfil);

//Rutas para buscar perfil
router.get('/search/freelancer', searchController.BuscarPerfilFreelancer);
router.get('/search/contractor', searchController.BuscarPerfilContratista);
router.get('/search/project', searchController.BuscarProyecto);

//Rutas CRUD de proyecto
router.put('/project/create',ensureAuthenticated,validationController.CrearProyect,projectController.crearProyecto)
router.put('/project/edit/:id',ensureAuthenticated, validationController.ModificarProyect,projectController.modificarProyecto)
router.get('/project/view/:id', ensureAuthenticated,projectController.consultarProyecto)
router.delete('/project/cancel/:id', ensureAuthenticated,projectController.cancelarProyecto)
router.get('/project/list/view', ensureAuthenticated,projectController.listarProyectos)
router.get('/project/list/view/created', ensureAuthenticated,projectController.listarProyectosCreados)
router.get('/project/list/view/worked', ensureAuthenticated,projectController.listarProyectosEncargados)
router.post('/project/stage/change', ensureAuthenticated,projectController.cambiarEtapaProyecto)

//Rutas postulaciones proyecto
router.put('/project/postulation/do/', ensureAuthenticated,projectPostulationController.postularseProyecto)
router.get('/project/postulation/list/',ensureAuthenticated,projectPostulationController.verUsuariosPostuladosProyecto)
router.delete('/project/postulation/undo/',ensureAuthenticated,projectPostulationController.deshacerPostulacionProyecto)
router.get('/freelancer/postulation/list',ensureAuthenticated,projectPostulationController.verProyectosPostuladosUsuario) //proyectos propios



//Rutas experiencias usuario 
router.post('/profile/experience/add', validationController.vaidaExperiencia,experienciaController.agregarExperiencia)
router.put('/profile/experience/edit/:id',validationController.vaidaExperiencia,experienciaController.modificarExperiencia)
router.delete('/profile/experience/delete/:id',experienciaController.eliminarExperiencia)
router.get('/profile/experience/list/',experienciaController.consultarListaExperiencia)
router.get('/profile/experience/edit/list',experienciaController.modificarListaExperiencia)


//Rutas educacion usuario
router.post('/profile/education/add',validationController.validaEducacion,educacionController.agregarEducacion)
router.put('/profile/education/edit/:id',educacionController.modificarEducacion)
router.delete('/profile/education/delete/:id',educacionController.eliminarEducacion)
router.get('/profile/education/list/',educacionController.consultarListaEducacion)
router.get('/profile/education/edit/list',educacionController.modificarListaEducacion)

//Consulta
router.post('/freelancer/view/byId/:id',freelancerController.consultarPerfilFreelancer)
router.post('/contractor/view/byId/:id',contractorController.consultarPerfilContractor)
router.get('/list/freelancers',freelancerController.listarFreelancers)
router.get('/list/contractors',contractorController.listarContractors)

router.post('/review/add/:id',validationController.AgregarReview,reviewController.agregarReview)
router.post('/review/list/:id',reviewController.listarReviewsUsuario)
router.post('/review/mine/list',reviewController.listarMisReviewsUsuario)
router.post('/review/view/byId/:id',reviewController.consultarReview)



module.exports = router;