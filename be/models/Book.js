const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    TenTacPham: { type: String, required: true, unique: true },
    DDC: { type: String, required: true },
    TT: { type: String, required: true },
    MaTpPop: { type: String, required: true },
    TenTacGia: { type: String, required: true },
    KyHieu: { type: String, required: true }
})

module.exports = mongoose.model('Book', BookSchema)
