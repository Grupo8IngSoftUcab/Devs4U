const model = require('../models');
//const { checkBody, validationResult } = require('express-validator');
const { check, validationResult } = require('express-validator/check');
module.exports = {

    ValidacionesRegistro(req, res, next) {
       
        req.checkBody('firstName', 'El campo Nombre no puede estar vacio').not().isEmpty();
        req.checkBody('firstName', 'El campo Nombre solo puede contener letras').isAlpha();
        req.checkBody('password', 'El campo Clave no puede estar vacio').not().isEmpty();
        req.checkBody('recovery', 'El campo Confirmar contraseña no puede estar vacio').not().isEmpty();
        req.checkBody('email', 'El campo email no puede estar vacio').not().isEmpty();
        req.checkBody('email', 'El campo email tiene que tener el formato xxx@xxx').isEmail();
        req.checkBody('email', 'El correo no puede tener más de 22 caracteres y menos de 12').isLength({ max: 22, min: 12 });
        req.checkBody('firstName', 'El campo Nombre no puede tener más de 30 caracteres y menos de 12').isLength({ max: 30, min: 12 });
        req.checkBody('password', 'El campo Clave no puede tener más de 22 caracteres y menos de 4').isLength({ max: 22, min: 4 });
        req.checkBody('recovery', 'El campoConfirmar contraseña no puede tener más de 22 caracteres y menos de 4').isLength({ max: 22, min: 4 });

        //Check errors
        var errors = req.validationErrors();
        console.log(errors);
        if (errors) {
            var error = ''
            for (var errores in errors) {
                console.log(errores.value);
                var obj = errors[errores];
                error += obj.msg + '.';
            }
            console.log(error);
            res.status(400).json('Error: ' + error);
        } else {
            next();
        }
    },

    ModificarPerfil(req, res, next) {
        req.checkBody('nombre', 'El campo Nombre no puede estar vacio').not().isEmpty();
        req.checkBody('nombre', 'El campo Nombre Solo puede contener letras').isAlpha();
        req.checkBody('nombreEmpresa', 'El campo Nombre de la empresa Solo puede contener letras').isAlpha();
        req.checkBody('nombreEmpresa', 'El campo Nombre de la empresa no puede estar vacio').isEmpty();
        req.checkBody('pais', 'El campo pais de la empresa Solo puede contener letras').isAlpha();
        req.checkBody('ciudad', 'El campo ciudad Solo puede contener letras').isAlpha();
        req.checkBody('sobreMi', 'El campo sobre mi puede estar vacio').not().isEmpty();
        req.checkBody('descripcionCorta', 'El campo descripcion Corta  no puede estar vacio').not().isEmpty();
        req.checkBody('pais', 'El campo pais  no puede estar vacio').not().isEmpty();
        req.checkBody('ciudad', 'El campo ciudad  no puede estar vacio').not().isEmpty();
        req.checkBody('instagram', 'El campo instagram no puede estar vacio').not().isEmpty();
        req.checkBody('facebook', 'El campo facebook no puede estar vacio').not().isEmpty();
        req.checkBody('twitter', 'El campo twitter no puede estar vacio').not().isEmpty();
        req.checkBody('linkedin', 'El campo linkedin no puede estar vacio').not().isEmpty();
        req.checkBody('web', 'El campo web no puede estar vacio').not().isEmpty();
        req.checkBody('cargo', 'El campo cargo no puede estar vacio').not().isEmpty();
        req.checkBody('ciudad', 'El campo ciudad no puede tener más de 80 caracteres').isLength({ max: 80 });
        req.checkBody('pais', 'El campo pais no puede tener más de 80 caracteres').isLength({ max: 80 });
        req.checkBody('nombre', 'El campo Nombre no puede tener más de 180 caracteres').isLength({ max: 180 });
        req.checkBody('descripcionCorta', 'El campo descripcion Corta no puede tener más de 180 caracteres').isLength({ max: 250 });
        req.checkBody('sobreMi', 'El  campo sobreMi no puede tener más de 600 caracteres y menos de 4').isLength({ max: 600, min: 4 });
        req.checkBody('instagram', 'El campo instagram no puede tener más de 22 caracteres y menos de 4').isLength({ max: 22, min: 4 });
        req.checkBody('facebook', 'El campo facebook no puede tener más de 22 caracteres y menos de 4').isLength({ max: 22, min: 4 });
        req.checkBody('twitter', 'El campo twitter no puede tener más de 22 caracteres y menos de 4').isLength({ max: 22, min: 4 });
        req.checkBody('linkedin', 'El campo linkedin no puede tener más de 22 caracteres y menos de 4').isLength({ max: 22, min: 4 });
        req.checkBody('available', 'El campo disponibilidad no puede tener más de 22 caracteres y menos de 4').isLength({ max: 22, min: 4 });
        req.checkBody('experience', 'El campo experiencia no puede tener más de 22 caracteres y menos de 4').isLength({ max: 22, min: 4 });
        req.checkBody('web', 'El campo web no puede tener más de 22 caracteres y menos de 4').isLength({ max: 22, min: 4 });
        req.checkBody('nombreEmpresa', 'El campo nombreEmpresa no puede tener más de 100 caracteres y menos de 4').isLength({ max: 100, min: 4 });
        req.checkBody('cargo', 'El campo cargo no puede tener más de 100 caracteres y menos de 4').isLength({ max: 100, min: 4 });
        req.checkBody('habilidades', 'El campo habilidades no puede estar vacio').not().isEmpty();
        req.checkBody('tiempoExperiencia', 'El campo experiencia no puede estar vacio').not().isEmpty();
        req.checkBody('seniority', 'El campo seniority no puede estar vacio').not().isEmpty();
        req.checkBody('habilidades', 'El campo habilidades no puede tener más de 22 caracteres y menos de 4').isLength({ max: 22, min: 4 });
        req.checkBody('tiempoExperiencia', 'El campo experiencia no puede tener más de 22 caracteres y menos de 4').isLength({ max: 22, min: 4 });
        var errors = req.validationErrors();
        console.log(errors);
        if (errors) {
            var error = ''
            for (var errores in errors) {
                console.log(errores.value);
                var obj = errors[errores];
                error += obj.msg + '.';
            }
            console.log(error);
            res.status(400).json('Error: ' + error);
        } else {
            next();
        }
    },

    CrearProyect(req,res,next){
        req.checkBody('tipoProyecto', 'El campo tipo proyecto no puede estar vacio').not().isEmpty();
        req.checkBody('tipo', 'El campo tipo proyecto no puede estar vacio').not().isEmpty();
        req.checkBody('tecnologias', 'El campo tecnologias no puede estar vacio').not().isEmpty();
        req.checkBody('Presupuesto', 'El campo Presupuesto no puede estar vacio').not().isEmpty();
        req.checkBody('Presupuesto', 'El campo de presupuesto solo tiene numeros').not().isInt();
        req.checkBody('nombre', 'El campo Nombre no puede estar vacio').not().isEmpty();
        req.checkBody('adicionales', 'El campo adicionales no puede estar vacio').not().isEmpty();
        req.checkBody('titulo', 'El campo titulo no puede estar vacio').not().isEmpty();
        req.checkBody('titulo', 'El campo titulo solo contiene letras').not().isAlpha();
        req.checkBody('descripcion', 'El campo descripcion Solo puede contener letras').isAlpha();
        req.checkBody('descripcion', 'El campo descripcion no puede estar vacio').not().isEmpty();
        req.checkBody('tecnologias', 'El campo tecnologias no puede tener más de 100 caracteres ').isLength({ max: 100});
        req.checkBody('tipoProyecto', 'El campo tipo proyecto no puede tener más de 100 caracteres ').isLength({ max: 100});
        req.checkBody('tipo', 'El campo tipo proyecto no puede tener más de 100 caracteres ').isLength({ max: 100 });
        req.checkBody('nombre', 'El campo Nombre no puede tener más de 100 caracteres ').isLength({ max: 100 });
        req.checkBody('titulo', 'El campo titulo no puede tener más de 100 caracteres ').isLength({ max: 100 });
        req.checkBody('adicionales', 'El campo adicionales no puede tener más de 100 caracteres ').isLength({ max: 100 });
        
        //Check errors
        var errors = req.validationErrors();
        console.log(errors);
        if (errors) {
            var error = ''
            for (var errores in errors) {
                console.log(errores.value);
                var obj = errors[errores];
                error += obj.msg + '.';
            }
            console.log(error);
            res.status(400).json('Error: ' + error);
        } else {
            next();
        }
    },
    

    ModificarProyect(req,res,next){
        req.checkBody('tipoProyecto', 'El campo tipo proyecto no puede estar vacio').not().isEmpty();
        req.checkBody('tipo', 'El campo tipo proyecto no puede estar vacio').not().isEmpty();
        req.checkBody('tecnologias', 'El campo tecnologias no puede estar vacio').not().isEmpty();
        req.checkBody('Presupuesto', 'El campo Presupuesto no puede estar vacio').not().isEmpty();
        req.checkBody('Presupuesto', 'El campo de presupuesto solo tiene numeros').not().isInt();
        req.checkBody('nombre', 'El campo Nombre no puede estar vacio').not().isEmpty();
        req.checkBody('adicionales', 'El campo adicionales no puede estar vacio').not().isEmpty();
        req.checkBody('titulo', 'El campo titulo no puede estar vacio').not().isEmpty();
        req.checkBody('titulo', 'El campo titulo solo contiene letras').not().isAlpha();
        req.checkBody('descripcion', 'El campo descripcion Solo puede contener letras').isAlpha();
        req.checkBody('descripcion', 'El campo descripcion no puede estar vacio').not().isEmpty();
        req.checkBody('tecnologias', 'El campo tecnologias no puede tener más de 100 caracteres ').isLength({ max: 100});
        req.checkBody('tipoProyecto', 'El campo tipo proyecto no puede tener más de 100 caracteres ').isLength({ max: 100});
        req.checkBody('tipo', 'El campo tipo proyecto no puede tener más de 100 caracteres ').isLength({ max: 100 });
        req.checkBody('nombre', 'El campo Nombre no puede tener más de 100 caracteres ').isLength({ max: 100 });
        req.checkBody('titulo', 'El campo titulo no puede tener más de 100 caracteres ').isLength({ max: 100 });
        req.checkBody('adicionales', 'El campo adicionales no puede tener más de 100 caracteres ').isLength({ max: 100 });
        
        //Check errors
        var errors = req.validationErrors();
        console.log(errors);
        if (errors) {
            var error = ''
            for (var errores in errors) {
                console.log(errores.value);
                var obj = errors[errores];
                error += obj.msg + '.';
            }
            console.log(error);
            res.status(400).json('Error: ' + error);
        } else {
            next();
        }
    },

    AgregarReview(req,res,next){
        req.checkBody('descripcion', 'El campo descripcion no puede estar vacio').not().isEmpty();
        req.checkBody('calificacion', 'El campo calificacion no puede estar vacio').not().isEmpty();
        req.checkBody('calificacion', 'El campo calificacion no tener letras').isNumeric();
        req.checkBody('descripcion', 'El campo descripcion no puede tener más de 250 caracteres ').isLength({ max: 250});
        
        //Check errors
        var errors = req.validationErrors();
        console.log(errors);
        if (errors) {
            var error = ''
            for (var errores in errors) {
                console.log(errores.value);
                var obj = errors[errores];
                error += obj.msg + '.';
            }
            console.log(error);
            res.status(400).json('Error: ' + error);
        } else {
            next();
        }
    },

    vaidaExperiencia(req,res,next){
        req.checkBody('nombreEmpresa', 'El campo nombreEmpresa no puede tener más de 100 caracteres y menos de 4').isLength({ max: 100, min: 4 });
        req.checkBody('descripcion', 'El campo descripcion no puede tener más de 250 caracteres ').isLength({ max: 250});
        req.checkBody('descripcion', 'El campo descripcion no puede estar vacio').not().isEmpty();
        req.checkBody('nombreEmpresa', 'El campo Nombre de la empresa solo puede contener letras').isAlpha();
        req.checkBody('nombreEmpresa', 'El campo Nombre de la empresa no puede estar vacio').isEmpty();
        req.checkBody('cargo', 'El campo cargo no puede tener más de 100 caracteres y menos de 4').isLength({ max: 100, min: 4 });
        req.checkBody('cargo', 'El campo cargo no puede estar vacio').not().isEmpty();
        req.checkBody('anoInicio', 'El campo año de inicio no puede estar vacio').not().isEmpty();
        req.checkBody('anoFin', 'El campo año final puede estar vacio').not().isEmpty();
         //Check errors
         var errors = req.validationErrors();
         console.log(errors);
         if (errors) {
             var error = ''
             for (var errores in errors) {
                 console.log(errores.value);
                 var obj = errors[errores];
                 error += obj.msg + '.';
             }
             console.log(error);
             res.status(400).json('Error: ' + error);
         } else {
             next();
         }
     },

        validaEducacion(req,res,next){
            req.checkBody('tituloObtenido', 'El campo titulo obtenido no puede tener más de 100 caracteres y menos de 4').isLength({ max: 100, min: 4 });
            req.checkBody('descripcion', 'El campo descripcion no puede tener más de 250 caracteres ').isLength({ max: 250});
            req.checkBody('descripcion', 'El campo descripcion no puede estar vacio').not().isEmpty();
            req.checkBody('tituloObtenido', 'El campo tituloObtenido solo puede contener letras').isAlpha();
            req.checkBody('tituloObtenido', 'El campo tituloObtenido no puede estar vacio').isEmpty();
            req.checkBody('institucion', 'El campo institucion no puede tener más de 100 caracteres y menos de 4').isLength({ max: 100, min: 4 });
            req.checkBody('institucion', 'El campo institucion no puede estar vacio').not().isEmpty();
            req.checkBody('anoInicio', 'El campo año de inicio no puede estar vacio').not().isEmpty();
            req.checkBody('anoFin', 'El campo año final puede estar vacio').not().isEmpty();


        //Check errors
        var errors = req.validationErrors();
        console.log(errors);
        if (errors) {
            var error = ''
            for (var errores in errors) {
                console.log(errores.value);
                var obj = errors[errores];
                error += obj.msg + '.';
            }
            console.log(error);
            res.status(400).json('Error: ' + error);
        } else {
            next();
        }
    },

}