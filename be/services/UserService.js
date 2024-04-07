const User = require("../models/User");
const bcrypt = require("bcrypt");
const { genneralAccessToken, genneralRefreshToken } = require("./JwtService");

const createUser = async (newUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { TenNguoiDung, Email, MatKhau, XacNhanMatKhau, DienThoai } = newUser;
            const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            const isCheckEmail = reg.test(Email);
            const checkUser = await User.findOne({ Email: Email });

            if (!Email || !MatKhau || !XacNhanMatKhau) {
                return reject({ status: 'ERR', message: 'The input is required' });
            } else if (!isCheckEmail) {
                return reject({ status: 'ERR', message: 'The input is email' });
            } else if (MatKhau !== XacNhanMatKhau) {
                return reject({ status: 'ERR', message: 'The password is equal confirmPassword' });
            } else if (checkUser !== null) {
                return reject({ status: 'ERR', message: 'The email is already' });
            }

            const hash = bcrypt.hashSync(MatKhau, 10);
            const createdUser = await User.create({ TenNguoiDung, Email, MatKhau: hash, DienThoai });

            if (createdUser) {
                return resolve({ status: 'OK', message: 'SUCCESS', data: createdUser });
            }
        } catch (e) {
            return reject({ status: 'ERR', message: e.message });
        }
    });
};

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { Email, MatKhau } = userLogin
            const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            const isCheckEmail = reg.test(Email)
            if (!Email || !MatKhau) {
                return reject({
                    status: 'ERR',
                    message: 'The input is required'
                })
            } else if (!isCheckEmail) {
                return reject({
                    status: 'ERR',
                    message: 'The input is email'
                })
            }
            const checkUser = await User.findOne({
                Email: Email
            })
            if (checkUser === null) {
                return reject({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }
            const comparePassword = bcrypt.compareSync(MatKhau, checkUser.MatKhau)

            if (!comparePassword) {
                return reject({
                    status: 'ERR',
                    message: 'The password or user is incorrect'
                })
            }
            const access_token = await genneralAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })

            const refresh_token = await genneralRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            })

            return resolve({
                status: 'OK',
                message: 'SUCCESS',
                access_token,
                refresh_token
            })
        } catch (e) {
            return reject({ status: 'ERR', message: e.message });
        }
    })
}

const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findOne({
                _id: id
            })
            if (checkUser === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }

            const updatedUser = await User.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedUser
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findOne({
                _id: id
            })
            if (checkUser === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }

            await User.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete user success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyUser = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {

            await User.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete user success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUser = await User.find().sort({createdAt: -1, updatedAt: -1})
            resolve({
                status: 'OK',
                message: 'Success',
                data: allUser
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({
                _id: id
            })
            if (user === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }
            resolve({
                status: 'OK',
                message: 'SUCESS',
                data: user
            })
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser,
    deleteManyUser
}