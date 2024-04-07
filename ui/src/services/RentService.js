import axios from 'axios';

export const createRent = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/rent/create`, data);
    return res.data;
};

export const getRentDetails = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/rent/get-rent-details`)
    return res.data
}

// export const deleteRent = async (id) => {
//     const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/rent/delete/${id}`)
//     return res.data
// }
