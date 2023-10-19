const { Router } = require('express');

const NotesController = require('../controllers/NotesController')

const notesRoutes = Router();

const notesController = new NotesController();

//método POST geralmente é usado para cadastrar algo
notesRoutes.post("/:user_id", notesController.create);

module.exports = notesRoutes;