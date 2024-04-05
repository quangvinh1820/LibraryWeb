import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DetailBook({ TenTacPham, TenTacGia, id }) {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/book-details/${id}`)
    }

    return (
        <div className="col-md-2">
            <div
                className="project img d-flex justify-content-center align-items-end"
                style={{ backgroundImage: 'url(https://thuvienhoidonggiammucvietnam.org/Uploads/images/nkdpn1_000.jpg)' }}
            >
                <div className="overlay"></div>
                <div className="text p-4">
                    <h3>
                        <a className="tieudehover" onClick={handleNavigate}>{TenTacPham}</a>
                    </h3>
                    <p className="nhaxbhover"></p>
                    <p className="nhaxbhover">{TenTacGia}</p>
                </div>
            </div>
            <p className="title_">
                <a className="tieudesach">{TenTacPham}</a>
            </p>
            <div className="">
                <p className="title_"> | 01/10/2022</p>
            </div>
            <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="author-section">
                <div className="container">
                    <div className="row">
                        <div className="category-item2" id="category-item2">
                            <div className="counter-wrap " id="counter-wrap">
                                <div className="text" id="text">
                                    <p className="mb-4 btn-custom">
                                        <span className="number" data-number="973">
                                            0
                                        </span>
                                        <span>
                                            <i className="fa fa-eye"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
