const BookService = require('../services/BookService');

const createBook = async (req, res) => {
    try {
        const { TenTacPham, TT, MaTpPop, TenTacGia, KyHieu, DDC } = req.body
        if (!TenTacPham || !TT || !MaTpPop || !TenTacGia || !KyHieu || !DDC ) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await BookService.createBook(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateBook = async (req, res) => {
    try {
        const BookId = req.params.id
        const data = req.body
        if (!BookId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The BookId is required'
            })
        }
        const response = await BookService.updateBook(BookId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsBook = async (req, res) => {
    try {
        const BookId = req.params.id
        if (!BookId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The BookId is required'
            })
        }
        const response = await BookService.getDetailsBook(BookId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteBook = async (req, res) => {
    try {
        const BookId = req.params.id
        if (!BookId) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The BookId is required'
            })
        }
        const response = await BookService.deleteBook(BookId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteMany = async (req, res) => {
    try {
        const ids = req.body.ids
        if (!ids) {
            return res.status(404).json({
                status: 'ERR',
                message: 'The ids is required'
            })
        }
        const response = await BookService.deleteManyBook(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllBook = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await BookService.getAllBook(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllAuthor = async (req, res) => {
    try {
        const { filter } = req.query
        const response = await BookService.getAllAuthor(filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getBookAuthor = async (req, res) => {
    try {
        const authorName = req.params.authorName;
        const response = await BookService.getBooksByAuthor(authorName);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createBook,
    updateBook,
    getDetailsBook,
    deleteBook,
    getAllBook,
    deleteMany,
    getAllAuthor,
    getBookAuthor
}