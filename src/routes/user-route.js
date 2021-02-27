const express = require('express');
const router = express.Router(); // Interceptação das Rotas
const userController = require('../controllers/user-controller');

// Get
router.get('/', userController.get);

// Get by Id
router.get('/:userId', userController.getById);

// Put
router.put('/:userId', userController.put);

// Delete
router.delete('/:userId', userController.delete);

// Set Task in User
router.post('/:userId/:taskId', userController.insertTask);

module.exports = router;