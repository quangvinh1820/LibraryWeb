const mongoose = require('mongoose');

const RentSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true }, 
        actualReturnDate: { type: Date },
        rentStatus: { type: String},
        contactInfo: { type: String } 
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Rent', RentSchema);
