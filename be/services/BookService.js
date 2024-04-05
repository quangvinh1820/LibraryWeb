const Book = require("../models/Book");

const createBook = (newBook) => {
    return new Promise(async (resolve, reject) => {
        const { TenTacPham, TT, MaTpPop, TenTacGia, KyHieu, DDC } = newBook
        try {
            const checkBook = await Book.findOne({
                name: TenTacPham
            })
            if (checkBook !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The name of book is already!'
                })
            }
            const newBook = await Book.create({
                TenTacPham, 
                TT, 
                MaTpPop, 
                TenTacGia, 
                KyHieu, 
                DDC
            })
            if (newBook) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newBook
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateBook = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkBook = await Book.findOne({
                _id: id
            })
            if (checkBook === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Book is not defined'
                })
            }

            const updatedBook = await Book.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedBook
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteBook = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkBook = await Book.findOne({
                _id: id
            })
            if (checkBook === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Book is not defined'
                })
            }

            await Book.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Book success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyBook = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Book.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Book success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsBook = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkBook = await Book.findOne({
                _id: id
            })
            if (checkBook === null) {
                resolve({
                    status: 'ERR',
                    message: 'The Book is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: checkBook
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllBook = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalBook = await Book.countDocuments()
            let allBook = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await Book.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalBook,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalBook / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allBookSort = await Book.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allBookSort,
                    total: totalBook,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalBook / limit)
                })
            }
            if(!limit) {
                allBook = await Book.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                // allBook = await Book.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                allBook = await Book.find().limit(limit).skip(page * limit)
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allBook,
                total: totalBook,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalBook / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllAuthor = async (filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            let allAuthors = [];
            if (filter) {
                const regex = new RegExp(`^${filter}`, 'i');
                allAuthors = await Book.aggregate([
                    { $match: { TenTacGia: { $regex: regex } } },
                    { $group: { _id: "$TenTacGia", count: { $sum: 1 } } }
                ]);
            } else {
                allAuthors = await Book.aggregate([
                    { $group: { _id: "$TenTacGia", count: { $sum: 1 } } }
                ]);
            }
            const authorsWithCounts = allAuthors.map(author => ({
                name: author._id,
                count: author.count
            }));
            resolve({
                status: 'OK',
                message: 'Success',
                data: authorsWithCounts,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getBooksByAuthor = async (authorName) => {
    return new Promise(async (resolve, reject) => {
        try {
            const books = await Book.find({ TenTacGia: authorName });
            resolve({
                status: 'OK',
                message: 'Success',
                data: books,
            });
        } catch (error) {
            reject(error);
        }
})};

module.exports = {
    createBook,
    updateBook,
    getDetailsBook,
    deleteBook,
    getAllBook,
    deleteManyBook,
    getAllAuthor,
    getBooksByAuthor
}