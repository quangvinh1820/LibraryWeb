const express = require('express');
const router = express.Router();

const rentController = require('../controllers/RentController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleware");

// Quyền admin
router.put('/update/:id', rentController.updateRentStatus);

// User Allow
router.post('/create', rentController.createRent);
router.delete('/delete/:id', rentController.deleteRent);
router.get('/get-rent-details',  rentController.getRentDetails);

module.exports = router
