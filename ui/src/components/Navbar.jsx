import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../services/UserService';
import { resetUser } from '../redux/userRedux';
import * as BookService from '../services/BookService';
import { useDebounce } from '../hooks/useDebounce'

const Navbar = () => {
    const user = useSelector(state => state.user);
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [type, setType] = useState('TenTacPham');
    const [searchResults, setSearchResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchProperty, setSearchProperty] = useState('TenTacPham'); // Biến trung gian lưu trữ tên thuộc tính cần trả về
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        setUserName(user?.TenNguoiDung);
        setLoading(false);
    }, [user?.TenNguoiDung]);

    const searchDebounce = useDebounce(searchInput, 500)

    useEffect(() => {
        const searchBooks = async () => {
            try {
                setLoading(true);
                const results = await BookService.getSearchBook(type, searchDebounce, 10);
                console.log('data:', results)
                setSearchResults(results);
                setSearchProperty(type)
            } catch (error) {
                console.error('Error fetching search results:', error);
            } finally {
                setLoading(false);
            }
        };
        searchBooks();
    }, [type, searchDebounce]);

    console.log('searchResults', searchResults?.data)

    const handleNavigateLogin = () => {
        navigate('/sign-in');
    };

    const handleLogout = async () => {
        setLoading(true);
        await UserService.logoutUser();
        dispatch(resetUser());
        navigate('/');
        setLoading(false);
    };

    const handleNavigateDetail = (result) => {
        if(type === 'TenTacGia') {
            navigate(`/book-author/${result.TenTacGia}`)
        } else if (type === 'TenTacPham') {
            navigate(`/book-details/${result._id}`)
        } else if (type === 'DDC') {
            navigate(`/chude/${result.DDC}`)
        }
    }

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
                                <select id="chon" value={type} onChange={(e) => setType(e.target.value)}>
                                    <option value="TenTacPham">Tìm sách</option>
                                    <option value="TenTacGia">Tác giả</option>
                                    <option value="DDC">Mã DDC</option>
                                </select>
                                <input
                                    type="search" 
                                    placeholder="tên sách..." 
                                    id="txtkeyword" 
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                />
                                <ul class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style={{top: "40px", left: "0px", width: "100%", border: "none"}}>
                                    {searchResults?.data?.map((result) => (
                                    <li class="ui-menu-item" key={result._id}>
                                        <a id="ui-id-42" className="ui-menu-item-wrapper ui-state-active" onClick={() => handleNavigateDetail(result)}>
                                            {result[searchProperty]}
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                                <button
                                    className="btntim"
                                    type="submit"
                                >
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </li> 
                        {user?.access_token ? (
                            <>
                                {user?.isAdmin ? ( 
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/rented-book'>
                                            <span>
                                                Chào {userName?.length ? userName : user?.Email}!
                                            </span>
                                        </Link>
                                    </li>) : (
                                    <li className="nav-item">
                                        <a className="nav-link">
                                            <span>
                                                Chào {userName?.length ? userName : user?.Email}!
                                            </span>
                                        </a>
                                    </li>
                                )}                                
                                <li className="nav-item" onClick={handleLogout}>
                                    <a className="nav-link">
                                        <span>Thoát</span>
                                    </a>
                                </li>
                            </>
                        ) : <li className="nav-item"><a onClick={handleNavigateLogin} className="nav-link"><span>Đăng nhập</span></a></li>}
                    </ul>
                </div>
            </div>           
        </nav>
    );
};

export default Navbar;
