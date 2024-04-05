import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from "../images/icon.png";
import left from "../images/angle-left.png";

export default function Register() {
  return (
    <>
      <Navbar />
      <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
        <div className="container" style={{ background: '#fff', width: '1000px' }}>
          <div className="signup-content" style={{ paddingBottom: '10px', paddingTop: '20px' }} id="signup-content">
            <div className="signup-form">
              <div>
                <input name="__RequestVerificationToken" type="hidden" />
                <div className="register-form" id="register-form">
                  <div className="form-group">
                    <label className='label_input' htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                    <input className="inputlogin text-box single-line" data-val="true" data-val-length="Số ký tự tối đa 200!" data-val-length-max="200" data-val-required="Bạn chưa nhập dữ liệu!" id="Username" name="Username" placeholder="Họ tên" required="required" type="text" value="" />
                    <span className="field-validation-valid text-danger" data-valmsg-for="Username" data-valmsg-replace="true"></span>
                  </div>
                  <div className="form-group">
                    <label className='label_input' htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                    <input className="inputlogin text-box single-line" data-val="true" data-val-length="Số ký tự tối đa 200!" data-val-length-max="200" data-val-required="Bạn chưa nhập dữ liệu!" id="Email" name="Email" placeholder="Email" required="required" type="text" value="" />
                    <span className="field-validation-valid text-danger" data-valmsg-for="Email" data-valmsg-replace="true"></span>
                  </div>
                  <div className="form-group">
                    <label className='label_input' htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                    <input className="inputlogin text-box single-line" data-val="true" data-val-length="Số ký tự tối đa 100!" data-val-length-max="100" data-val-required="Bạn chưa nhập dữ liệu!" id="Password" name="Password" placeholder="Mật khẩu" required="required" type="password" value="" />
                    <span className="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>
                  </div>
                  <div className="form-group">
                    <label className='label_input' htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                    <input className="inputlogin text-box single-line" data-val="true" data-val-length="Số ký tự tối đa 100!" data-val-length-max="100" id="rePassword" name="rePassword" placeholder="Nhập lại mật khẩu" required="required" type="password" value="" />
                    <span className="field-validation-valid text-danger" data-valmsg-for="rePassword" data-valmsg-replace="true"></span>
                  </div>
                  <div className="form-group">
                    <input checked="checked" data-val="true" data-val-required="The Cam kết field is required." id="dongy" name="dongy" type="checkbox" value="true" /><input name="dongy" type="hidden" value="false" />
                    <label htmlFor="agree-term" className="label-agree-term label_input" id="dongy"><span><span></span></span>Tôi đồng ý tất cả <Link className="camket" to="/Docgia/Gioithieu">Cam kết và thỏa thuận</Link></label>
                  </div>
                  <div className="form-group" hidden="hidden">
                    <input
                    className="form-control text-box single-line"
                    data-val="true"
                    data-val-number="The field Quyền truy cập must be a number."
                    id="quyentruycap"
                    name="quyentruycap"
                    type="number"
                    value="" />
                  </div>
                  <div className="form-group form-button">
                    <button
                    className="form-submit"
                    style={{ border: 'none', marginTop: '0' }}
                    id="btndocgia"
                    >
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="signup-image">
              <h2 id="dangkydocgia" className="signup-image-link">Đăng ký độc giả</h2>
              <figure><img src={logo} alt="sing up image" /></figure>
              <Link id="atv" className="signup-image-link" to="/Home/Index">Thư viện HĐGM Việt Nam</Link>
              <Link to="/login" className="signup-image-link">Tôi đã có tài khoản</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
