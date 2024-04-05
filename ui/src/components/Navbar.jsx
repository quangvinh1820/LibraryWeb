import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Thư Viện HĐGM VN<span>.</span></Link>
                <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav nav ml-auto">
                        <li className="nav-item"><Link to="/book" className="nav-link"><span>Sách</span></Link></li>
                        <li className="nav-item"><Link to="/video" className="nav-link"><span>Video</span></Link></li>
                        <li className="nav-item"><Link to="/author" className="nav-link"><span>Tác giả</span></Link></li>
                        <li className="nav-item"><Link to="/chude" className="nav-link"><span>Mã nội dung DDC</span></Link></li>
                        <li className="nav-item"><Link to="/phanloaiDDC" className="nav-link"><span>Nội dung DDC</span></Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link"><span>Liên hệ</span></Link></li>
                        <li className="nav-item">
                            <div className="search-container">
                                <form method="get" action="/Home/Search">
                                    <select name="chon" id="chon">
                                        <option value="0">Tìm sách</option>
                                        <option value="1">Tác giả</option>
                                        <option value="2">Nhà XB</option>
                                        <option value="3">Năm XB</option>
                                        <option value="4">Mã DDC</option>
                                    </select>
                                    <input type="search" required placeholder="tên sách..." name="txtkeyword" id="txtkeyword" />
                                    <button
                                        className="btntim"
                                        type="submit"
                                        tooltip="Từ khóa: tên sách, tên tác giả, mã ddc, tên nhà xuất bản, tên thư viện ..."
                                    >
                                        <i className="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </li>
                        <li className="nav-item"><Link to="/login" className="nav-link"><span>Đăng nhập</span></Link></li>
                    </ul>
                </div>
            </div>           
        </nav>
    );
};

export default Navbar;