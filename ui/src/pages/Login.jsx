import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from "../images/icon.png";
import left from "../images/angle-left.png";

export default function Login() {
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
                                <figure><img src={logo} alt="sing up image" /></figure>
                                <Link id="atv" className="signup-image-link" to="/Home/Index" style={{textDecoration: "none", color: "#838793"}}>Thư viện HĐGM Việt Nam</Link>
                                <p style={{textAlign: "center", color: "blue" , fontWeight: "600" }}>Bạn chưa có tài khoản?</p>
                                <Link to="/register" className="signup-image-link" style={{fontWeight:"600", paddingBottom:"20px"}}>Tạo một tài khoản</Link>
                                <Link to="/Home/Danhmucsach" id="atrove"><img src={left} alt="" /></Link>
                            </div>
                            <div className="signin-form">                   
                                <form method="POST" className="register-form" id="login-form">
                                    <form action="/Login" method="post">
                                        <input name="__RequestVerificationToken" type="hidden" value="qBKOy49jw3hv8bGlE2EjX2wd7AMSQyGiZZ6gs_anDIIyXkPT2I5ALVPfLFfw-w8khsLBqfcTLmDI3_l0uwMyiL9A2yo1_aiFYcN1nC38C2o1" />                                
                                        <div className="form-group">
                                            <label className='label_input' for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                            <input className="inputlogin" type="text" name="Email" id="your_name" required placeholder="Địa chỉ Email" />
                                        </div>
                                        <div className="form-group">
                                            <label className='label_input' for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                            <input className="inputlogin" type="password" name="password" id="password" required placeholder="Mật mã"/>
                                        </div>
                                        <div className="form-group">
                                            <table>
                                                <tr>
                                                    <td style={{width: "20px", height: "20px"}}>
                                                        
                                                        <i className="bi bi-eye-slash" id="togglePassword"></i>
                                                    </td>
                                                    
                                                    <td className="quen"><Link to="/Quenmatkhau/Index" id="aquenpassword">Quên Password</Link></td>
                                                </tr>
                                            </table>

                                        </div>
                                        <div className="form-group form-button">
                                            <button type="submit" className="form-submit" id="btnlogin">Đồng Ý</button>
                                        </div>
                                    </form>                        
                                </form>                                
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
