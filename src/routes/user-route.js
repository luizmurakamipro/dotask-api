const express = require('express');
const router = express.Router(); // Interceptação das Rotas
const userController = require('../controllers/user-controller');
const security = require('../middlewares/authenticate-middlerares');

router.use(security.authorize);

// Get
router.get('/', userController.get);

// Get by Id
router.get('/:userId', userController.getById);

// Put
router.put('/:userId', userController.put);

// Delete
router.delete('/:userId', userController.delete);

module.exports = router;