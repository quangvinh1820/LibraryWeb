import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import * as RentService from '../services/RentService';
import * as message from '../components/Message';

export default function RentedPage() {
    const [rentedBooks, setRentedBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [selectedRentId, setSelectedRentId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const rentDetails = await RentService.getRentDetails();
                const formattedRentDetails = rentDetails.map(book => ({
                    ...book,
                    startDate: formatDate(book.startDate),
                    endDate: formatDate(book.endDate)
                }));
                setRentedBooks(formattedRentDetails);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching rent details:', error);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
    };

    const handleChangeStatus = (rentId) => {
        setShowUpdateForm(true);
        setSelectedRentId(rentId);
    };

    const handleUpdateStatus = async (newStatus) => {
        try {
            const updatedRent = await RentService.updateRent(selectedRentId, { rentStatus: newStatus });
            const updatedBooks = rentedBooks.map(book => {
                if (book._id === selectedRentId) {
                    return {
                        ...book,
                        rentStatus: newStatus
                    };
                }
                return book;
            });
            setRentedBooks(updatedBooks);
            setShowUpdateForm(false);
            message.success('Bạn đã cập nhật trạng thái thành công! Đã gửi thông báo này đến email người dùng!');
            setSelectedRentId(null);
        } catch (error) {
            message.error('Cập nhật trạng thái thất bại! Vui lòng thử lại sau!');
        }
    };

    const handleCloseForm = () => {
        setShowUpdateForm(false);
        setSelectedRentId(null);
    };

    return (
        <>
            <Navbar />
            <section className="ftco-section ftco-project" id="projects-section">
                <div className="container">
                    <Breadcrumb
                        heading={"Admin"}
                        title={"Quản lý sách đã thuê"}
                    />
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">TT</th>
                                        <th scope="col">Tên sách</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Điện thoại</th>
                                        <th scope="col">Thời gian thuê</th>
                                        <th scope="col">Thời gian trả</th>
                                        <th scope="col">Ghi chú</th>
                                    </tr>
                                </thead>
                                <tbody style={{ fontSize: '18px' }}>
                                    {rentedBooks.map((book, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{book.bookId.TenTacPham}</td>
                                            <td>{book.userId.Email}</td>
                                            <td>{book.contactInfo}</td>
                                            <td>{book.startDate}</td>
                                            <td>{book.endDate}</td>
                                            <td 
                                                className={getStatusClass(book.rentStatus)} 
                                                onClick={() => handleChangeStatus(book._id)}
                                            >
                                                {getStatusText(book.rentStatus)} <i className='fa fa-pencil'></i>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {showUpdateForm && (
                                <div className="update-form">
                                    <h3>Cập nhật trạng thái</h3>
                                    <button onClick={() => handleUpdateStatus('Tới hạn')}>Tới hạn</button>
                                    <button onClick={() => handleUpdateStatus('Đang thuê')}>Đang thuê</button>
                                    <button className="close-btn" onClick={handleCloseForm}>
                                        <i className="bi bi-x"></i>
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
            <Footer />
        </>
    )
}

// Helper functions for rendering status
const getStatusText = (status) => {
    switch (status) {
        case 'Tới hạn':
            return 'Tới hạn';
        case 'Đang thuê':
            return 'Đang thuê';
        case 'Đang xử lý':
            return 'Đang xử lý';
        default:
            return '';
    }
};

const getStatusClass = (status) => {
    switch (status) {
        case 'Tới hạn':
            return 'text-danger';
        case 'Đang thuê':
            return 'text-success';
        case 'Đang xử lý':
            return 'text-warning';
        default:
            return '';
    }
};
