import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import Sort from '../components/Sort';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import * as BookService from '../services/BookService';
import { Link } from 'react-router-dom';

export default function Author() {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async (alphabet) => {
        setLoading(true);
        try {
            const res = await BookService.getAllAuthor(alphabet);
            if (res) {
                setAuthors(res.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Loading isLoading={loading}>
            <>
                <Navbar />
                <section className="ftco-section ftco-project" id="projects-section">
                    <div className="container">
                        <Breadcrumb
                            heading={"Tác giả"}
                            title={"Danh mục tác giả"}
                            sort={<Sort fetchData={fetchData} />}
                        />
                        <div id="tblbody">
                            <table className="table table-responsive table-striped table-bordered" id="tbldata">
                                <thead>
                                    <tr>
                                        <th>Tên tác giả</th>
                                        <th>Số lượng tác phẩm</th>
                                    </tr>
                                </thead>
                                <tbody id="trow">
                                    {authors.map((author, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Link to={`/book-author/${author.name}`} style={{ fontWeight: "600", color: "blue" }}>
                                                    {author.name}
                                                </Link>
                                            </td>
                                            <td>{author.count}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        </Loading>
    );
}
