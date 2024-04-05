const express = require("express");
const router = express.Router();
const BookController = require('../controllers/BookController');
// const { authMiddleWare } = require("../middleware/authMiddleware");

// router.post('/create', authMiddleWare, BookController.createBook);
// router.put('/update/:id', authMiddleWare, BookController.updateBook);
// router.get('/get-details/:id', BookController.getDetailsBook);
// router.delete('/delete/:id', authMiddleWare, BookController.deleteBook);
// router.get('/get-all', BookController.getAllBook);
// router.post('/delete-many', authMiddleWare, BookController.deleteMany);
// router.get('/get-all-type', BookController.getAllType);

router.post('/create', BookController.createBook);
router.put('/update/:id', BookController.updateBook);
router.get('/get-details/:id', BookController.getDetailsBook);
router.delete('/delete/:id', BookController.deleteBook);
router.get('/get-all', BookController.getAllBook);
router.post('/delete-many', BookController.deleteMany);
router.get('/get-all-author', BookController.getAllAuthor);
router.get('/get-book-by-author/:authorName', BookController.getBookAuthor);

module.exports = router