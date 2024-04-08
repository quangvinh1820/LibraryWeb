const User = require("../models/User");
const Rent = require("../models/Rent");

const createRent = (req) => {
    return new Promise(async (resolve, reject) => {
        const { userId, bookId, startDate, endDate } = req.body;
        try {
            const user = await User.findById(userId);
            const contactInfo = user.DienThoai;
            const rentStatusValue = 'Đang xử lý'; 

            const newRent = await Rent.create({
                userId, 
                bookId, 
                startDate, 
                endDate,
                rentStatus: rentStatusValue,
                contactInfo
            });
            resolve({
                status: 'OK',
                message: 'Rent created successfully',
                data: newRent
            });
        } catch (error) {
            reject(error);
        }
    });
};

const updateRentStatus = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkRent = await Rent.findOne({
                _id: id
            })
            if (checkRent === null) {
                resolve({
                    status: 'ERR',
                    message: 'Đơn thuê không tồn tại'
                })
            }

            const updateRentStatus = await Rent.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updateRentStatus
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getRentDetails = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const rentedBooks = await Rent.find()
                .populate('userId', 'TenNguoiDung Email')
                .populate('bookId', 'TenTacPham');
            if (!rentedBooks) {
                throw new Error('Đơn thuê sách không tồn tại');
            }
            resolve(rentedBooks);
        } catch (error) {
            reject(error);
        }
    });
};

const deleteRent = (id, rentStatus) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkRent = await Rent.findOne({
                _id: id
            })
            if (checkRent === null) {
                resolve({
                    status: 'ERR',
                    message: 'Đơn thuê không tồn tại'
                })
            }
            if (checkRent.rentStatus != 'Đang xử lý') {
                resolve({
                    status: 'ERR',
                    message: 'Đơn thuê đã xử lý không thể xóa'
                })
            } else {
                await Rent.findByIdAndDelete(id)
                resolve({
                    status: 'OK',
                    message: 'Xóa thành công đơn thuê',
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createRent,
    updateRentStatus,
    getRentDetails,
    deleteRent
}