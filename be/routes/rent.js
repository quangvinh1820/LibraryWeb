const express = require('express');
const router = express.Router();

const rentController = require('../controllers/RentController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

// Quyền admin
router.post('/update/:id', authMiddleWare, rentController.updateRentStatus);

// User Allow
router.post('/create', rentController.createRent);
router.get('/get-rent-details', authUserMiddleWare, rentController.getRentDetails);
router.delete('/delete/:id', rentController.deleteRent);

module.exports = router
