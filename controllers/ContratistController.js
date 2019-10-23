const model = require('../models');
const passport = require('passport');
const bcrypt = require('bcryptjs');
module.exports = {

  lista(req,res) {
    model.Proyecto.findAll({
        attributes: ['NM_Proyect','TP_Proyect', 'Stg_Proyect', 'Dp_req','UsedTech', 'Entregables', 'Ad_Dat', 'contratistId']
      })
      .then(function(result) {
        res.render('user/createproyect', {proyecto: result});
    })
      .catch((error) => { res.status(400).send(error); });

  },

  store(req, res) {
    model.Proyecto.create({
    NM_Proyect: req.body.NM_Proyect,
    TP_Proyect: req.body.TP_Proyect,
    Stg_Proyect: req.body.Stg_Proyect,
    Dp_req: req.body.Dp_req,
    UsedTech: req.body.UsedTech,
    Entregables: req.body.Entregables,  
    Ad_Dat: req.body.Ad_Dat,
    contratistId: req.body.contratistId,
    }).then(function () {
      res.render('user/Gestion-Proyecto');
    })

  },
}