import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.theme.green.css";

export default function Slide() {
  return (
    <section className="ftco-section testimony-section ftco-no-pb" id="testimonial-section-index">
        <div className="img img-bg border"></div>
        <div className="overlay"></div>
        <div className="container">
            <div className="row justify-content-center mb-5">
                <div className="col-md-12 text-center heading-section heading-section-white">
                    <span className="subheading">Tiêu điểm</span>
                    <h2 className="mb-3">Giới thiệu sách</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <OwlCarousel
                      className='carousel-testimony ftco-owl'
                      center={true}
                      loop={true}
                      autoplay={true}
                      autoplaySpeed={2000}
                      items={3}
                      margin={30}
                      stagePadding={0}
                      nav={false}
                      dots={true}
                      navText={['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">']}
                    >
                      <div className="item">
                        <div className="testimony-wrap py-4" id="hinhdiemsach">
                          <div className="project img d-flex justify-content-center align-items-end" style={{backgroundImage: 'url(https://thuvienhoidonggiammucvietnam.org/Uploads/images/aaaaaaa32757.jpg)'}} id="diemsach">
                            <div className="overlay" style={{height: '350px'}}></div>
                            <div className="text p-4">
                              <h3><a href="#" style={{fontSize: '20px', lineHeight: '0.5rem'}}>Lectures on New Testament Theology</a></h3>
                              <p className="nhaxbhover">Ferdinand Christian Baur</p>
                              <p style={{color: '#ffffff', fontSize: '10px', padding: '0px', margin: '0px'}}>Oxford University Press | 2016</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony-wrap py-4" id="hinhdiemsach">
                          <div className="project img d-flex justify-content-center align-items-end" style={{backgroundImage: 'url(https://thuvienhoidonggiammucvietnam.org/Uploads/images/aaaaaaa32757.jpg)'}} id="diemsach">
                            <div className="overlay" style={{height: '350px'}}></div>
                            <div className="text p-4">
                              <h3><a href="#" style={{fontSize: '20px', lineHeight: '0.5rem'}}>Lectures on New Testament Theology</a></h3>
                              <p className="nhaxbhover">Ferdinand Christian Baur</p>
                              <p style={{color: '#ffffff', fontSize: '10px', padding: '0px', margin: '0px'}}>Oxford University Press | 2016</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony-wrap py-4" id="hinhdiemsach">
                          <div className="project img d-flex justify-content-center align-items-end" style={{backgroundImage: 'url(https://thuvienhoidonggiammucvietnam.org/Uploads/images/aaaaaaa32757.jpg)'}} id="diemsach">
                            <div className="overlay" style={{height: '350px'}}></div>
                            <div className="text p-4">
                              <h3><a href="#" style={{fontSize: '20px', lineHeight: '0.5rem'}}>Lectures on New Testament Theology</a></h3>
                              <p className="nhaxbhover">Ferdinand Christian Baur</p>
                              <p style={{color: '#ffffff', fontSize: '10px', padding: '0px', margin: '0px'}}>Oxford University Press | 2016</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony-wrap py-4" id="hinhdiemsach">
                          <div className="project img d-flex justify-content-center align-items-end" style={{backgroundImage: 'url(https://thuvienhoidonggiammucvietnam.org/Uploads/images/aaaaaaa32757.jpg)'}} id="diemsach">
                            <div className="overlay" style={{height: '350px'}}></div>
                            <div className="text p-4">
                              <h3><a href="#" style={{fontSize: '20px', lineHeight: '0.5rem'}}>Lectures on New Testament Theology</a></h3>
                              <p className="nhaxbhover">Ferdinand Christian Baur</p>
                              <p style={{color: '#ffffff', fontSize: '10px', padding: '0px', margin: '0px'}}>Oxford University Press | 2016</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </section>
  );
}
