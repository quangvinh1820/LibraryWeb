import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import * as RentService from '../services/RentService';

export default function RentedPage() {
    const [rentedBooks, setRentedBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRentedBooks = async () => {
            try {
                const rentedBooksData = await RentService.getRentDetails();
                console.log(rentedBooksData)
                setRentedBooks(rentedBooksData);
            } catch (error) {
                console.error('Error fetching rented books:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRentedBooks();
    }, []);

    return (
        <>
            <Navbar />
            <section className="ftco-section ftco-project" id="projects-section">
                <div className="container">
                    <Breadcrumb
                        heading={"Trang cá nhân"}
                        title={"Sách đã thuê"}
                    />
                    <Loading isLoading={loading}>
                        <table className="table">
                            <thead className="thead-dark" style={{fontSize: '22px'}}>
                                <tr>
                                    <th scope="col">TT</th>
                                    <th scope="col">Tên sách</th>
                                    <th scope="col">Thời gian thuê</th>
                                    <th scope="col">Thời gian trả</th>
                                    <th scope="col">Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody style={{fontSize: '18px'}}>
                                {rentedBooks.map((book, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{book.TenSach}</td>
                                        <td>{book.startDate}</td>
                                        <td>{book.endDate}</td>
                                        <td className={`text-${book.rentStatusClass}`}>{book.rentStatus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Loading>
                </div>
            </section>
            <Footer />
        </>
    )
}
