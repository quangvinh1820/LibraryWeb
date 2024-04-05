import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DetailBook from '../components/DetailBook';
import Breadcrumb from '../components/Breadcrumb';
import { Pagination } from 'antd';
import Loading from '../components/Loading';
import { useLocation } from 'react-router-dom';
import * as BookService from '../services/BookService';

export default function BookPage() {
    const { state } = useLocation();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        page: 0,
        limit: 10,
        total: 1,
    });

    const fetchData = async (page, limit) => {
        setLoading(true);
        try {
            const res = await BookService.getAllBook('', limit, page);
            if (res) {
                setBooks(res.data);
                setPagination({
                    ...pagination,
                    // totalPage: res.totalPage,
                    total: res.total
                });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(state) {
            fetchData(state, pagination.page, pagination.limit);
        } else {
            fetchData(pagination.page, pagination.limit);
        }
    }, [state, pagination.page, pagination.limit]);

    const onPageChange = (current, pageSize) => {
        setPagination({
            ...pagination,
            page: current - 1,
            limit: pageSize,
        });
    };

    return (
        <Loading isLoading={loading}>
            <>
                <Navbar />
                <section className="ftco-section ftco-project" id="projects-section">
                    <div className="container">
                        <Breadcrumb heading={"Sách"} title={"Danh mục tác phẩm"} total={`Hiện có ${pagination.total} tác phẩm`} />
                        <div className="row">
                            {books.map((book) => (
                                <DetailBook key={book._id} TenTacPham={book.TenTacPham} TenTacGia={book.TenTacGia} id={book._id} />
                            ))}
                        </div>
                        <Pagination
                            defaultCurrent={pagination.page+1}
                            total={pagination.total}
                            onChange={onPageChange}
                            style={{ textAlign: 'center', marginTop: '10px' }}
                        />
                    </div>
                </section>
                <Footer />
            </>
        </Loading>
    );
}
