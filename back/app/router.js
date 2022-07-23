const express = require('express');
const router = express.Router();
const taskController = require('./controllers/task');

// Étape 1: Route pour la liste des taches
router.get('/tasks', taskController.listTasks);

// Étape 3: Route pour ajouter une tache
router.post('/tasks', taskController.createTask)

// Étape 5: Route pour modifier une tache
router.put('/tasks/:id', taskController.updateTask)

// Étape 7: Route pour supprimer une tache
router.delete('/tasks/:id', taskController.eraseTask)

module.exports = router;
