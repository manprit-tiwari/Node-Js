const express = require('express');
const app = express();
const router = express.Router();
const userController = require('../controller/user');

router.get('/user/:id', userController.getSingleUser)

router.get('/edit-user/:id', userController.getEditUser);

router.post('/edit-user', userController.postEditUser);

router.get('/add-user', userController.addUser);

router.post('/add-user', userController.addNewUser);

module.exports = router;