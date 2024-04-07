import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from '../redux/userRedux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import * as UserService from '../services/UserService';
import { useMutationHooks } from '../hooks/useMutationHook';
import Loading from "../components/Loading";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from "../images/icon.png";
import left from "../images/angle-left.png";

export default function Login() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [Email, setEmail] = useState('');
    const [MatKhau, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user  = useSelector((state) => state.user);

    const mutation = useMutationHooks(
        data => UserService.loginUser(data)
    );

    const { data, isPending, isSuccess, isError, error } = mutation;

    useEffect(() => {
        if (isSuccess) {
            if(location?.state) {
                navigate(location?.state)
            } else {
                navigate('/')
            }
            localStorage.setItem('access_token', JSON.stringify(data?.access_token))
            localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
            if (data?.access_token) {
                const decoded = jwtDecode(data?.access_token)
                if (decoded?.id) {
                handleGetDetailsUser(decoded?.id, data?.access_token)
                }
            }
        } else if (isError) {
            setErrorMessage(error.response.data.message.message);
        }
    }, [isSuccess, isError])
    
    const handleGetDetailsUser = async (id, token) => {
        const storage = localStorage.getItem('refresh_token')
        const refreshToken = JSON.parse(storage)
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token, refreshToken }))
    }

    const handleSignIn = (e) => {
        mutation.mutate({
        Email,
        MatKhau
        })
    }

    return (
        <>
            <Navbar />
            <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center">
                            <span className="subheading">Tài khoản</span>
                            <h2 className="mb-4" style={{marginBottom: "0px!important"}}>Đăng nhập</h2>
                        </div>
                    </div>
                    <section className="sign-in">
                        <div className="container-login" style={{background: "#fff!important", width: "900px!important"}}>
                            <div className="signin-content" id="signin-content">
                                <div className="signin-image">
                                    <figure>
                                        <img src={logo} alt="sing up image" />
                                    </figure>
                                    <Link id="atv" className="signup-image-link" to="/" style={{textDecoration: "none", color: "#838793"}}>
                                        Thư viện HĐGM Việt Nam
                                    </Link>
                                    <p style={{textAlign: "center", color: "blue" , fontWeight: "600" }}>
                                        Bạn chưa có tài khoản?
                                    </p>
                                    <Link to="/sign-up" className="signup-image-link" style={{fontWeight:"600", paddingBottom:"20px"}}>
                                        Tạo một tài khoản
                                    </Link>
                                    <Link to="/" id="atrove"><img src={left} alt=""/></Link>
                                </div>
                                <div className="signin-form">                      
                                    <div className="form-group">
                                        <label className='label_input'><i className="fa fa-envelope"></i></label>
                                        <input 
                                            className="inputlogin" 
                                            type="text" 
                                            placeholder="Địa chỉ Email"
                                            value={Email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group" style={{position: "relative"}}>
                                        <label className='label_input'><i className="fa fa-lock"></i></label>
                                        <input 
                                            className="inputlogin" 
                                            type={isShowPassword ? "text" : "password"}
                                            placeholder="Mật mã"
                                            value={MatKhau}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
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
                                    {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
                                    <Loading isLoading={isPending}>
                                        <div className="form-group form-button">
                                            <button 
                                            disabled={!Email.length || !MatKhau.length}
                                            className="form-submit" 
                                            id="btnlogin"
                                            onClick={handleSignIn}>
                                                Đồng ý
                                            </button>
                                        </div>       
                                    </Loading>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>    
            </section>
            <Footer />
        </>
    )
}
