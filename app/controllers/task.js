const { Task } = require('../models');

const taskController = {

    listTasks: async function (req, res) {
        // Étape 1: Récupérer la liste des taches
        const tasks = await Task.findAll();
        // Étape 1: Renvoyer la liste des taches en json
        res.json(tasks);
    },

    //Étape 3: Créer une tache
    async createTask(req,res) {
        const { name } = req.body;
        const task = await Task.create({ name });
        res.send(task);
    },

    //Étape 5: Modifier une tache   
    async updateTask(req,res) {
        const taskId = req.params.id;
        const task = await Task.findByPk(taskId);
        if (! task) {
            return res.status(404).json({ error: "Cannot find Task."});
        }

        const { name } = req.body;
        task.set({ name });
        await task.save();
        res.json(task);
    },
    
    //Étape 7: Efacer une tache
    async eraseTask(req,res) {
        const taskId = req.params.id;
        const task = await Task.findByPk(taskId);
        if (task) {
            await task.destroy();
        }
        res.status(204).end();
    }

};

module.exports = taskController;
