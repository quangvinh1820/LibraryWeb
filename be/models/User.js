const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        TenNguoiDung: { type: String },
        Email: { type: String, required: true, unique: true },
        MatKhau: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        DienThoai: { type: Number },
        DiaChi: { type: String },
        Avatar: { type: String }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("User", UserSchema);