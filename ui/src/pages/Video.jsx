import React from 'react';
import Navbar from '../components/Navbar';
import Breadcrumb from '../components/Breadcrumb';
import Sort from '../components/Sort';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

export default function Video() {
  return (
    <>
        <Navbar />
        <section className="ftco-section ftco-project" id="projects-section">
            <div className="container">
                <Breadcrumb
                heading={"Video"}
                title={"Danh mục Video"}
                total={"Hiện có 13 video"}
                sort={<Sort />}
                />
                <div id="tblbody">
                    <table id="tbldata">
                        <tbody id="trow">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div className="">
                                        <p className="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div className="">
                                        <p className="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div className="">
                                        <p className="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div className="">
                                        <p className="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div className="">
                                        <p className="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div className="">
                                        <p className="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div className="">
                                        <p className="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="project_video">
                                        <iframe src='https://drive.google.com/file/d/1XpdIG1ssROHRQienpGt4GG-SkBXhwEFs/preview' width="100%" height="200px"></iframe>
                                    </div>
                                    <div className="">
                                        <p className="tieudesach">Abraham- Father of Faith #8 - The Sacrifice | 09/10/2021</p>
                                    </div>
                                </div>
                            </div>
                        </tbody>
                    </table>
                </div>    
                <Pagination />
            </div>
        </section>
        <Footer/>
    </>
  )
}
