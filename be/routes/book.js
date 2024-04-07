const express = require("express");
const router = express.Router();
const BookController = require('../controllers/BookController');
const { authMiddleWare } = require("../middleware/authMiddleware");

// router.post('/create', authMiddleWare, BookController.createBook);
// router.put('/update/:id', authMiddleWare, BookController.updateBook);
// router.get('/get-details/:id', BookController.getDetailsBook);
// router.delete('/delete/:id', authMiddleWare, BookController.deleteBook);
// router.get('/get-all', BookController.getAllBook);
// router.post('/delete-many', authMiddleWare, BookController.deleteMany);
// router.get('/get-all-type', BookController.getAllType);

// Quyền admin
router.post('/create', authMiddleWare, BookController.createBook);
router.put('/update/:id', authMiddleWare, BookController.updateBook);
router.delete('/delete/:id', authMiddleWare, BookController.deleteBook);
router.delete('/delete-many', authMiddleWare, BookController.deleteMany);

// User được phép
router.get('/get-details/:id', BookController.getDetailsBook);
router.get('/get-all', BookController.getAllBook);
router.get('/get-all-author', BookController.getAllAuthor);
router.get('/get-book-by-author/:authorName', BookController.getBookAuthor);

module.exports = router