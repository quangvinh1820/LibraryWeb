import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from "../images/icon.png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import left from "../images/angle-left.png";
import { useMutationHooks } from '../hooks/useMutationHook';
import * as UserService from '../services/UserService';
import * as message from '../components/Message';
import Loading from "../components/Loading";

export default function Register() {
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

    const [TenNguoiDung, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [DienThoai, setDienThoai] = useState('');
    const [MatKhau, setPassword] = useState('');
    const [XacNhanMatKhau, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const mutation = useMutationHooks(
        data => UserService.signupUser(data)
    )

    const { data, isPending, isSuccess, isError, error } = mutation

    useEffect(() => {
        if (isSuccess) {
        message.success()
        handleNavigateSignIn()
        } else if (isError) {
        message.error();
        setErrorMessage(error.response.data.error);
        }
    }, [isSuccess, isError])

    const handleNavigateSignIn = () => {
        navigate('/sign-in')
    }

    const handleSignUp = () => {
        mutation.mutate({ TenNguoiDung, Email, DienThoai, MatKhau, XacNhanMatKhau })
    }

    return (
      <>
        <Navbar />
        <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
            <div className="container" style={{ background: '#fff', width: '1000px' }}>
                <div className="signup-content" style={{ paddingBottom: '10px', paddingTop: '20px' }} id="signup-content">
                    <div className="signup-form">
                        <div>
                            <div className="register-form" id="register-form">
                                <div className="form-group">
                                    <label className='label_input'><i className="fa fa-user"></i></label>
                                    <input 
                                    className="inputlogin text-box single-line" 
                                    id="Username" 
                                    placeholder="Họ tên" 
                                    type="text"
                                    value={TenNguoiDung} 
                                    onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label className='label_input'><i className="fa fa-envelope"></i></label>
                                    <input 
                                    className="inputlogin text-box single-line"
                                    id="Email"
                                    placeholder="Email"
                                    type="text" 
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label className='label_input'><i className="fa fa-phone"></i></label>
                                    <input 
                                    className="inputlogin text-box single-line"
                                    id="DienThoai"
                                    placeholder="Số điện thoại"
                                    type="text" 
                                    value={DienThoai}
                                    onChange={(e) => setDienThoai(e.target.value)} />
                                </div>
                                <div className="form-group" style={{position: "relative"}}>
                                    <label className='label_input'><i className="fa fa-lock"></i></label>
                                    <input 
                                    className="inputlogin text-box single-line" 
                                    id="Password"
                                    placeholder="Mật khẩu"
                                    type={isShowPassword ? "text" : "password"} 
                                    value={MatKhau}
                                    onChange={(e) => setPassword(e.target.value)} />
                                    <span
                                        onClick={() => setIsShowPassword(!isShowPassword)}
                                        style={{
                                            zIndex: 10,
                                            position: 'absolute',
                                            top: '2px',
                                            right: '8px'
                                        }}>
                                            {
                                                isShowPassword ? (
                                                    <VisibilityIcon style={{fontSize: '18px', color: 'black'}} />
                                                    ) : (
                                                    <VisibilityOffIcon style={{fontSize: '18px', color: 'black'}} />
                                                )
                                            }
                                    </span>
                                </div>
                                <div className="form-group" style={{position: "relative"}}>
                                    <label className='label_input'><i className="fa fa-unlock"></i></label>
                                    <input 
                                    className="inputlogin text-box single-line" 
                                    placeholder="Nhập lại mật khẩu"
                                    type={isShowConfirmPassword ? "text" : "password"} 
                                    value={XacNhanMatKhau}
                                    onChange={(e) => setConfirmPassword(e.target.value)} />
                                    <span
                                        onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                                        style={{
                                            zIndex: 10,
                                            position: 'absolute',
                                            top: '2px',
                                            right: '8px'
                                        }}>
                                            {
                                                isShowConfirmPassword ? (
                                                    <VisibilityIcon style={{fontSize: '18px', color: 'black'}} />
                                                    ) : (
                                                    <VisibilityOffIcon style={{fontSize: '18px', color: 'black'}} />
                                                )
                                            }
                                    </span>
                                </div>
                                {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
                                <div className="form-group form-button">
                                    <Loading isLoading={isPending}>
                                        <button
                                            disabled={!Email.length || !MatKhau.length || !XacNhanMatKhau.length}
                                            className="form-submit"
                                            id='btndocgia'
                                            style={{ border: 'none', marginTop: '0' }}
                                            onClick={handleSignUp}
                                        >
                                            Đăng ký
                                        </button>
                                    </Loading>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="signup-image">
                        <h2 id="dangkydocgia" className="signup-image-link">Đăng ký độc giả</h2>
                        <figure><img src={logo} alt="sing up image" /></figure>
                        <Link id="atv" className="signup-image-link" to="/Home/Index">Thư viện HĐGM Việt Nam</Link>
                        <Link to="/sign-in" className="signup-image-link">Tôi đã có tài khoản</Link>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
      </>
    )
}
