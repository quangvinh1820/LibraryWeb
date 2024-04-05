import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrow from "../images/angle-left.png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import * as BookService from '../services/BookService';
import Loading from '../components/Loading';

export default function Detail() {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); 
            try {
                const res = await BookService.getDetailsBook(id);
                console.log('res:', res)
                setBooks(res.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            } finally {
                setLoading(false); 
            }
        };
        fetchData();
    }, [id]);

    const handleClick = () => {

    }
    
    return (
        <Loading isLoading={loading}>
            <>
                <Navbar />
                <section className="ftco-section ftco-project" id="projects-section"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3" id="hinhthongtinsach">
                                <img src="https://thuvienhoidonggiammucvietnam.org/Uploads/images/aaaaaa2556.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div className="col-sm-6" style={{backgroundColor: "#f5f4fb"}}>
                                <div className="col-md-12">
                                    <p className="subheading">Thông tin quyển sách</p>
                                    <h3 className="mb-4" id="htieude">{books.TenTacPham}</h3>
                                    <p id="pgioithieu"></p>
                                    <div className="d-flex"><span><label className="labelsach">Tác giả</label></span> <span><label id="ltacgia" className="labelsach_">{books.TenTacGia}</label></span></div>
                                    <div className="d-flex"><span><label className="labelsach">Nhà xuất bản</label></span> <span><label id="lnhaxb" className="labelsach_">NXB D&#194;N TR&#205;</label></span></div>
                                    <div className="d-flex"><span><label className="labelsach">Năm xuất bản</label></span> <span><label id="lnamxb" className="labelsach_">2009</label></span></div>
                                    <div className="d-flex"><span><label className="labelsach">Nơi xuất bản</label></span> <span><label className="labelsach_">Việt Nam</label></span></div>
                                    <div className="d-flex"><span><label className="labelsach">Mã nội dung DDC</label></span> <span><label id="lmaddc" className="labelsach_">{books.DDC}</label></span></div>
                                    <div className="d-flex"><span><label className="labelsach">Ngôn ngữ</label></span> <span><label id="lngonngu" className="labelsach_">Tiếng Việt</label></span></div>
                                    <div className="d-flex"><span><label className="labelsach">Nguồn</label></span> <span><label id="lthuvien" className="labelsach_">Thư viện HĐGM Việt Nam</label></span></div>
                                    <div className="d-flex"><span></span> <span><label id="lquyentruycap" className="labelsach_" hidden="hidden">Liên hệ phòng đọc sách thư viện. Địa chỉ: 12 Trần Quốc Toản Phường 8, Quận 3, TP.HCM</label></span></div>
                                    <Link id="afile_pdf" to="/Thongtinsach/DangkySach?masach=104555" className="form-submit" onClick={handleClick}>Đăng ký đọc tác phẩm</Link>
                                </div>
                            </div>     
                            <div className="col-sm-3" style={{ backgroundColor: '#ebe9f9', paddingLeft: '10px' }}>

                            </div>
                        </div>
                        <Link to="/chude" id="atrove"><img src={{arrow}} alt="" /></Link>
                    </div>
                </section>
                <Footer />
            </>
        </Loading>
    )
}
