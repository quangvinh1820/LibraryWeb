import axios from 'axios';

export const getAllBook = async (search, limit, page) => {
    let res = {};
    if (search?.length > 0) {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/book/get-all?filter=TenTacPham&filter=${search}&limit=${limit}`);
    } else {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/book/get-all?limit=${limit}&page=${page}`);
    }
    return res.data;
};

export const getSearchBook = async (type, search, limit) => {
    let res = {};
    if (search?.length > 0) {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/book/get-all?filter=${type}&filter=${search}&limit=${limit}`);
    }
    return res.data;
};

export const getDetailsBook = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/book/get-details/${id}`)
    return res.data
}

export const getAllAuthor = async (alphabet) => {
    let res = {};
    if (alphabet) {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/book/get-all-author?filter=${alphabet}`)
    } else {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/book/get-all-author`);
    }
    return res.data
}

export const getBookByAuthor = async (authorName) => {
    let res = {};
    res = await axios.get(`${process.env.REACT_APP_API_URL}/book/get-book-by-author/${authorName}`)
    return res.data
}

// export const getBookType = async (type, limit, page) => {
//     if (type) {
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/book/get-all?filter=type&filter=${type}&limit=${limit}&page=${page}`)
//         return res.data
//     }
// }

// export const createBook = async (data) => {
//     const res = await axios.post(`${process.env.REACT_APP_API_URL}/book/create`, data)
//     return res.data
// }

// export const getDetailsBook = async (id) => {
//     const res = await axios.get(`${process.env.REACT_APP_API_URL}/book/get-details/${id}`)
//     return res.data
// }

// export const updateBook = async (id, access_token, data) => {
//     const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/book/update/${id}`, data, {
//         headers: {
//             token: `Bearer ${access_token}`,
//         }
//     })
//     return res.data
// }

// export const deleteBook = async (id, access_token) => {
//     const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/book/delete/${id}`, {
//         headers: {
//             token: `Bearer ${access_token}`,
//         }
//     })
//     return res.data
// }

// export const deleteManyBook = async (data, access_token,) => {
//     const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/book/delete-many`, data, {
//         headers: {
//             token: `Bearer ${access_token}`,
//         }
//     })
//     return res.data
// }

// export const getAllTypeBook = async () => {
//     const res = await axios.get(`${process.env.REACT_APP_API_URL}/book/get-all-type`)
//     return res.data
// }