
const express = require('express');
const app = express();
const router = express.Router();
const userController = require('../controller/user');

router.use('/delete/:id', userController.deleteUser);

router.get('/', userController.getAllUsers);

module.exports = router;