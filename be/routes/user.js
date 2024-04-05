const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

router.post('/dang-ky', userController.createUser);
router.post('/dang-nhap', userController.loginUser);
router.post('/dang-xuat', userController.logout);
// router.put('/update-user/:id', userController.updateUser);
// router.delete('/delete-user/:id', userController.deleteUser);
// router.post('/refresh-token', userController.refreshToken);

module.exports = router
