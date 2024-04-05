import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
        <Navbar />
        <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3" style={{marginBottom:"0.5rem!important", paddingBottom:"0.5rem!important"}}>
                    <div className="col-md-7 heading-section text-center">
                        
                        <h2 className="mb-4">Liên hệ</h2>
                        
                    </div>
                </div>
                <form>
                    <input type="hidden"  />                
                    <div className="row no-gutters block-9">

                        <div className="col-md-6 order-md-last d-flex">
                        
                            <div className="bg-light p-4 p-md-5 contact-form">
                                <div className="form-group">
                                
                                    <input type="text" className="form-control" required placeholder="Họ tên" name="yourname" />
                                </div>
                                <div className="form-group">
                                
                                    <input type="text" className="form-control" required placeholder="Địa chỉ email" name="yourmail" />
                                </div>
                                <div className="form-group">
                                
                                    <input type="text" className="form-control" required placeholder="Tiêu đề" name="subject" />
                                </div>
                                <div className="form-group">
                                    
                                    <textarea name="message" cols="30" rows="7" className="form-control" required placeholder="Nội dung"></textarea>
                                </div>
                                <div className="form-group">
                                    
                                    <input type="submit" value="Gởi thư" className="btn btn-primary py-3 px-5" id="btngoithu"/>
                                </div>
                            </div>
                        
                        </div>

                        <div className="col-md-6 d-flex">
                            <iframe title="map" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.308044144158!2d106.68510031428711!3d10.78770226193654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2d7d4a174f%3A0x75501953f3b283b5!2zVsSDbiBQaMOybmcgSOG7mWkgxJDhu5NuZyBHacOhbSBN4bulYyBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1605146604770!5m2!1svi!2s" style={{ border: "none" }} aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                    </div>
                    <div className="row d-flex contact-info mb-5" style={{paddingTop:"40px"}}>
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="align-self-stretch box text-center p-4 bg-light">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-map-marker"></span>
                                </div>
                                <div>
                                    <h3 className="mb-4">Địa chỉ</h3>
                                    <p><Link to="#">72/12 Đường Trần Quốc Toản, phường 8, quận 3, TP.HCM, Việt Nam</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="align-self-stretch box text-center p-4 bg-light">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-phone"></span>
                                </div>
                                <div>
                                    <h3 className="mb-4">Điện thoại</h3>
                                    <p><Link to="#">+84</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="align-self-stretch box text-center p-4 bg-light">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-paper-plane"></span>
                                </div>
                                <div>
                                    <h3 className="mb-4">Địa chỉ Email</h3>
                                    <p><Link to="#">thuvienhdgmvn@gmail.com</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="align-self-stretch box text-center p-4 bg-light">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-globe"></span>
                                </div>
                                <div>
                                    <h3 className="mb-4">Website</h3>
                                    <p><Link to="Default.aspx" style={{fontSize:"12px"}}>thuvienhoidonggiammucvietnam.org</Link></p>
                                    <p><Link to="Default.aspx" style={{fontSize:"12px"}}>thuvienhoidonggiammucvietnam.com</Link></p>
                                    <p><Link to="Default.aspx" style={{fontSize:"12px"}}>thuvienhoidonggiammucvietnam.info</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>        
            </div>
        </section>
        <Footer />
    </>
  )
}
