import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DetailBook from '../components/DetailBook';
import Breadcrumb from '../components/Breadcrumb';
import Loading from '../components/Loading';
import { useLocation, Link } from 'react-router-dom';
import * as BookService from '../services/BookService';
import left from "../images/angle-left.png";

export default function BookPage() {
    const location = useLocation();
    const authorName = location.pathname.split('/')[2];
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); 
            try {
                const res = await BookService.getBookByAuthor(authorName);
                setBooks(res.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            } finally {
                setLoading(false); 
            }
        };
        fetchData();
    }, [authorName]);

    const nameAuthor = books.length > 0 ? books[0].TenTacGia : '';


    return (
        <Loading isLoading={loading}>
            <>
                <Navbar />
                <section className="ftco-section ftco-project" id="projects-section">
                    <div className="container">
                        <Breadcrumb heading={"Tác giả"} title={`Danh mục tác phẩm theo tác giả`} total={`Tác giả ${nameAuthor} hiện có ${books.length} tác phẩm`} />
                        <div className='mb-4'>
                            <Link to="/author" id="atrove"><img src={left} alt="" /></Link>
                        </div>
                        <div className="row">
                            {books.map((book) => (
                                <DetailBook key={book._id} TenTacPham={book.TenTacPham} TenTacGia={book.TenTacGia} id={book._id} />
                            ))}
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        </Loading>
    );
}
