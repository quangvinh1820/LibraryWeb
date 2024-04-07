import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    TenNguoiDung: '',
    Email: '',
    DienThoai: '',
    DiaChi: '',
    access_token: '',
    id: '',
    isAdmin: false,
    refreshToken: ''
}

export const userSlide = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { TenNguoiDung = '', Email = '', access_token = '', DiaChi = '', DienThoai = '', _id = '', isAdmin, refreshToken = '' } = action.payload
            state.TenNguoiDung = TenNguoiDung ? TenNguoiDung : state.TenNguoiDung;
            state.Email = Email ? Email : state.Email;
            state.DiaChi = DiaChi ? DiaChi : state.DiaChi;
            state.DienThoai = DienThoai ? DienThoai : state.DienThoai;
            state.id = _id ? _id : state.id
            state.access_token = access_token ? access_token : state.access_token;
            state.isAdmin = isAdmin ? isAdmin : state.isAdmin;
            state.refreshToken = refreshToken ? refreshToken : state.refreshToken;
        },
        resetUser: (state) => {
            state.TenNguoiDung = '';
            state.Email = '';
            state.DiaChi = '';
            state.DienThoai = '';
            state.id = '';
            state.access_token = '';
            state.isAdmin = false;
            state.refreshToken = ''
        },
    },
})

export const { updateUser, resetUser } = userSlide.actions

export default userSlide.reducer