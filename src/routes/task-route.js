const express = require('express');
const router = express.Router(); // Interceptação das Rotas
const taskController = require('../controllers/task-controller');
const security = require('../middlewares/authenticate-middlerares');

router.use(security.authorize);

// Post - Create
router.post("/", taskController.post);

// Get all - Read
router.get("/", taskController.get);

// Get by Id
router.get("/:taskId", taskController.getById);

// Put - Update
router.put("/:taskId", taskController.put);

// Delete
router.delete("/:taskId", taskController.delete);

module.exports = router;