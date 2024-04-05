import React, { useState } from 'react';
import icon from "../images/icon.png"
import docgia from "../images/docgia.png"

export default function Description() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleContent = () => {
    const content = document.querySelector('.content');
    content.classList.toggle('active');
  };
  return (
    <section className="ftco-about img ftco-section" id="about-section-index">
        <div className="container">
            <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section">
                    <div className="text-about">
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                    <button
                                    className="btn btn-link"
                                    onClick={toggleAccordion}
                                    aria-expanded={isOpen ? 'true' : 'false'}
                                    aria-controls="collapseOne"
                                    id="but"
                                    >
                                    {isOpen ? '-' : '+'}
                                    </button>
                                    </h5>
                                </div>
                                <div
                                    id="collapseOne"
                                    className={isOpen ? 'collapse show' : 'collapse'}
                                    aria-labelledby="headingOne"
                                    data-parent="#accordion"
                                >
                                    <div className="card-body">
                                    <h2 className="mb-4">Giới thiệu</h2>
                                    <h3 style={{ fontWeight: '700' }}>Thư Viện Hội Đồng Giám Mục Việt Nam</h3>
                                    <h3><a className="linkgt" href="http://thuvienhoidonggiammucvietnam.org">thuvienhoidonggiammucvietnam.org</a></h3>
                                    <p>Sau năm 1975, do những biến động của thời thế, Thư Viện Hội Đồng Giám Mục Nam Việt Nam đã ngưng hoạt động. Năm 2020, Giáo Hội Việt Nam kỷ niệm 60 Năm Thành Lập Hàng Giáo Phẩm Việt Nam, trong cuộc họp thường niên tháng 10 năm 2020, các Đức Giám Mục dự họp đã đồng tình thành lập Thư Viện Hội Đồng Giám Mục Việt Nam (TVHĐGMVN) với văn bản thành lập do Đức Cha Giuse Nguyễn Chí Linh Tổng Giám Mục Huế, Chủ Tịch HĐGMVN ký. Theo quyết định này Thư Viện được trao cho Ủy Ban Văn Hóa trực thuộc HĐGMVN đặc trách và cơ sở Thư Viện được đặt tại Văn Phòng HĐGMVN, số 72/12 Trần Quốc Toản, phường 8, quận 3, TPHCM.</p>
                                    </div>
                                    <button type="button" className="collapsible" onClick={toggleContent}>
                                        Xem tiếp &raquo;
                                    </button>
                                    <div className="content">
                                        <h4>ĐỊNH HƯỚNG</h4>
                                        <p>Chúng tôi định hướng, Thư Viện không chỉ là nơi "lưu trữ quá khứ” nhưng còn là nơi “kiến tạo tương lai”. Như một dòng chảy, Thư Viện không ngừng chuyên chở tri thức, khôn ngoan từ thế hệ này sang thế hệ khác, phục vụ công tác đào tạo, tự đào tạo và nghiên cứu. Thư Viện không giới hạn ở “chuyện nội bộ nhà đạo”, nhưng là nơi gặp gỡ giữa đức tin và lý trí, giữa niềm tin và văn hóa, giữa đức tin Công Giáo và các tôn giáo khác trên quê hương Việt Nam. Trong viễn cảnh đó, Thư Viện có thể vừa là công cụ, vừa là nơi diễn tả thành quả của quá trình kép là hội nhập văn hóa và giao thoa văn hóa. Thư Viện là ngôi nhà chung luôn mở rộng cửa phục vụ bất kỳ ai muốn tìm hiểu đức tin Công Giáo thông qua nguồn tài nguyên của Thư Viện. Thư Viện cũng sẵn sàng đón nhận mọi độc giả tới học hỏi, nghiên cứu.</p>
                                        <h4>NỘI DUNG</h4>
                                        <p>Thư Viện lưu trữ và phổ biến các sách vở, báo chí, tài liệu dạng kỹ thuật số về Thánh Kinh, phụng vụ, thần học, triết học, các văn bản giáo huấn của Giáo Hội Công Giáo toàn cầu và Giáo Hội địa phương, nói chung các sách vở, tài liệu thuộc các ngành khoa học thư viện đặc biệt về văn hóa Công Giáo Việt Nam và văn hóa các tôn giáo. Thư Viện ước mong ít ra cũng gìn giữ được những thành quả tốt đẹp từ các nền văn hóa.</p>
                                        <h4>TỔ CHỨC</h4>
                                        <p>TVHĐGMVN là thư viện trực thuộc HĐGMVN với cơ cấu tổ chức gồm:</p>
                                        <h4>Ban điều hành</h4>
                                        <p>1/ Giám Đốc: Đức Cha Giuse Đặng Đức Ngân, Giám Mục Giáo Phận Đà Nẵng, Chủ Tịch Ủy Ban Văn Hóa Trực Thuộc HĐGMVN. (email…).</p>
                                        <p>2/ Phó Giám Đốc Điều Hành: Linh Mục Giuse Trịnh Tín Ý, Thư Ký Ủy Ban Văn Hóa Trực Thuộc HĐGMVN. (email...).</p>
                                        <p>3/ Ủy Viên Thư Ký 1: Giáo Sư Antôn Uông Đại Bằng, thành viên Ủy Ban Văn Hóa Trực Thuộc HĐGMVN (email:….).</p>
                                        <p>4/ Ủy Viên Thư Ký 2: Linh Mục Vinh Sơn Nguyễn Thành Tín, OP, thành viên Ủy Ban Văn Hóa Trực Thuộc HĐGMVN.</p>
                                        <p>5/ Đặc trách Văn Phòng Thư Viện: Nữ tu Maria Trần Mari Kim Loan, Hội Dòng Mến Thánh Giá Thủ Thiêm, tiến sĩ thần học linh đạo, thành viên Ủy Ban Văn Hóa trực Thuộc HĐGMVN.</p>
                                        <p>6/ Ủy Viên Tài Chánh và Giao Dịch: Bà Anathasia Đào Phương Thảo, cử nhân quản trị kinh doanh, thành viên Ủy Ban Văn Hóa Trực Thuộc HĐGMVN (email:....).</p>
                                        <h4>Ban chuyên môn</h4>
                                        <p>1/ Quản Thủ Thư Viện: Linh mục Giacôbê Đỗ Huy Nghĩa (OP, hiện là Giám đốc Thư Viện Đaminh).</p>
                                        <p>2/ Phó Quản Thủ: Linh mục Giuse Quách Minh Đức, (DCCT, hiện là Giám đốc Thư Viện Anphong DCCT).</p>
                                        <p>3/ Thủ Thư: Bà Têrêsa Nguyễn Hà Tường Anh, thạc sĩ tâm lý giáo dục (email::..) (tại Mỹ).</p>
                                        <p>4/ Ủy Viên Kỹ Thuật: Ông Vinh Sơn Nguyễn Văn Ngân, kỹ sư vi tính (email: .....).</p>
                                        <p>5/ Ủy Viên Kỹ Thuật: Thày Giuse Vũ Văn Tiếp (DCCT), thạc sĩ ngành khoa học thư viện.</p>
                                        <p>TVHĐGMVN mừng vui được Thư Viện IRFA (Thư Viện của Hội Dòng MEP) trợ giúp. Hội Dòng MEP đã đồng ý cho các độc giả Việt Nam đọc sách của IRFA và gửi cho TVHĐGMVN những tài liệu rất quý giá. Chúng tôi ý thức, IRFA đã lưu trữ và phát triển các sách vở, tài liệu lịch sử về công trình loan báo Tin Mừng thuở ban đầu tại Việt Nam, nguồn gốc cuộc phát triển và hoàn thiện chữ Quốc Ngữ, ghi nhận những bước tiến của xã hội Việt Nam. Chúng tôi ước mong được cùng với IRFA tiếp tục phát triển và giới thiệu kho tàng quý giá này như của gia bảo cha ông để lại cho con cháu.</p>
                                        <p>Thư Viện cũng mừng đón mọi thiện chí hợp tác, đóng góp thuộc mọi lĩnh vực, từ quốc nội cũng như quốc ngoại. Nhân danh HĐGMVN, chúng tôi kêu gọi các tác giả góp sách, các nhà nghiên cứu góp tài liệu, các chuyên viên góp kỹ thuật, các nhà hảo tâm góp công, góp của cùng nhau xây dựng THƯ VIỆN HỘI ĐỒNG GIÁM MỤC VIỆT NAM.</p>
                                        <h4>CAM KẾT VÀ THỎA THUẬN</h4>
                                        <p>1/ Thư Viện rộng mở cho mọi người mọi giới, không phân biệt tôn giáo, sắc tộc. Tuy nhiên, mọi độc giả chỉ có thể tiếp cận nội dung Thư Viện theo quy định của TVHĐGMVN</p>
                                        <p>2/ TVHĐGM qui định:</p>
                                        <p style={{ marginTop: '0cm', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial' }}>
                                        <span style={{ fontFamily: '"Arial", sans-serif', color: '#6A7695' }}>• Để bảo vệ quyền tác giả, mọi sách báo và tài liệu tại TVHĐGMVN được lưu trữ trong cơ sở dữ liệu dưới định dạng files PDF - Thư viện chỉ giới thiệu trên trang mạng của thư viện tên sách/ báo/ tài liệu, tên tác giả, nhà xuất bản và năm xuất bản.</span>
                                        </p>
                                        <p style={{ marginTop: '0cm', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial' }}>
                                        <span style={{ fontFamily: '"Arial", sans-serif', color: '#6A7695' }}>• Mỗi độc giả được mượn một lúc hơn một cuốn sách/báo/tài liệu. Mỗi cuốn sách /báo/tài liệu có đường dẫn riêng. Quá hai tuần, đường dẫn này tự động tắt. Nếu độc giả muốn đọc thêm cần đăng ký lần nữa để đọc tiếp..</span>
                                        </p>
                                        <p style={{ marginTop: '0cm', backgroundImage: 'initial', backgroundPosition: 'initial', backgroundSize: 'initial', backgroundRepeat: 'initial', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial' }}>
                                        <span style={{ fontFamily: '"Arial", sans-serif', color: '#6A7695' }}>• Mọi sao chép hay in ấn cần có thỏa thuận bằng văn bản của tác giả hay tổ chức hoặc tư nhân được tác giả nhượng quyền hay ủy quyền.</span>
                                        </p>
                                        <h4>XIN CHUNG TAY ĐÓNG GÓP</h4>
                                        <p>Chúng tôi biết ơn quý vị, các bạn, bằng nhiều cách, đã và đang làm giàu cho TVHĐGMVN. Chúng tôi kêu gọi quý ân nhân xa gần đóng góp sách báo, tài liệu cho TVHĐGMVN, kho tàng chung của Giáo Hội Việt Nam.</p>
                                        <p>1/ Riêng với các tiến sĩ, thạc sĩ, các nhà nghiên cứu trong nước và ngoài nước, chúng tôi mong nhận được bản sao các luận án hay công trình của quý vị (thuộc bất cứ ngành nghiên cứu nào).</p>
                                        <p>2/ Với các tổ chức thư viện trong và ngoài nước, trong điều kiện có thể, xin vui lòng cung cấp, chia sẻ với TVHĐGMVN sách giấy, sách điện tử hoặc đường link nối kết.</p>
                                        <p>3/ Chúng tôi cũng mong nhận được thiết bị phục vụ Thư Viện hay các phương tiện dành cho các hoạt động lâu dài của Thư Viện.</p>
                                        <h4>TVHĐGMVN hiện có 71.300 cuốn sách, 15.277 bài báo và bài nghiên cứu đã lên hệ thống thử nghiệm và 13.800 cuốn sách và 6.100 bài nghiên cứu khác đang được chuẩn bị lên hệ thống.</h4>
                                        <p>Mọi thắc mắc, xin liên hệ email: thuvienhdgmvn@gmail.com</p>
                                        <div className="motcay">
                                        <p className="chumotcay">
                                            Một cây làm chẳng nên non,<br />
                                            Ba cây chụm lại nên hòn núi cao.</p>
                                        </div>
                                        <br />
                                        <div className="motcay">
                                        <p className="chumotcay">
                                            Giuse Đặng Đức Ngân, Giám Mục Giáo Phận Đà Nẵng</p>
                                        <p className="chumotcay">
                                            Giám Đốc Thư Viên Hội Đồng Giám Mục Việt Nam</p>
                                        </div>
                                        <p>
                                        &nbsp;</p>
                                        <div className="motcay">
                                        <p><img className="logothuvien" src={icon} /></p>
                                        </div>
                                        <br />
                                        <div className="quytrinh">
                                        <h4 style={{ color: 'blue' }}>QUY TRÌNH ĐỌC SÁCH GIẤY</h4>
                                        <p>Quý độc giả muốn đọc sách giấy, xin mời tới Thư Viện Đaminh, 90 nguyễn Thái Sơn, P3, Q Gò Vấp, TPHCM và vui lòng tuân theo quy định của Thư Viện Đaminh.</p>
                                        <h4 style={{ color: 'red' }}>QUY TRÌNH ĐĂNG KÝ THÀNH VIÊN ĐỌC SÁCH ONLINE</h4>
                                        <p>Để đăng ký đọc sách, người đọc cần phải đăng ký là độc giả của Thư Viện.</p>
                                        <p>Link đăng ký trở thành độc giả của Thư Viện:</p>
                                        <div className="linkhd">
                                            <ul>
                                            <li><a href="http://www.thuvienhoidonggiammucvietnam.org/Docgia/Index">http://www.thuvienhoidonggiammucvietnam.org/Docgia/Index</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-11">
                                            <div className="project img d-flex justify-content-center align-items-end" style={{ backgroundImage: `url(${docgia})` }}></div>
                                            <p>Độc giả điền thông tin đầy đủ: họ tên, email, mật khẩu.</p>
                                            <p>Sau khi điền thông tin, độc giả nhấn nút “ĐĂNG KÝ”. Nếu thành công sẽ hiện thông báo:</p>
                                            <h4 className="thongbaohd">“Đăng ký thành công …”.</h4>
                                            <div className="project img d-flex justify-content-center align-items-end" style={{ backgroundImage: 'url(https://thuvienhoidonggiammucvietnam.org/images/docgia5.png)' }}>
                                            </div>
                                            <h4 className="thongbaohd">Lưu ý: độc giả chỉ cần đăng ký 1 lần.</h4>
                                            <p>Sau khi hoàn tất đăng ký, độc giả muốn chọn sách sẽ theo những bước sau đây:</p>
                                            <p className="thongbaohd">Bước 1: Đăng nhập vào Thư Viện bằng tài khoản đã đăng ký qua link sau:</p>
                                            <div className="linkhd">
                                                <ul>
                                                    <li><a href="http://www.thuvienhoidonggiammucvietnam.org/Login">http://www.thuvienhoidonggiammucvietnam.org/Login</a></li>
                                                </ul>
                                            </div>
                                            <div className="project img d-flex justify-content-center align-items-end" style={{ backgroundImage: 'url(https://thuvienhoidonggiammucvietnam.org/images/docgia2.png)' }}>
                                            </div>
                                            <p>Sau khi đăng nhập thành công sẽ có thông báo “Đăng nhập thành công” như sau:</p>
                                            <div className="project img d-flex justify-content-center align-items-end" style={{ backgroundImage: 'url(https://thuvienhoidonggiammucvietnam.org/images/docgia3.png)' }}>
                                            </div>
                                            <p className="thongbaohd">Bước 2: nhấn vào menu “Sách” trên thanh menu.</p>
                                            <p>Cách thức tìm sách:</p>
                                            <p>• Tìm theo tên sách, tên tác giả, năm xuất bản hoặc theo mã nội dung DDC.</p>
                                            <div className="project img d-flex justify-content-center align-items-end" style={{ backgroundImage: 'url(https://thuvienhoidonggiammucvietnam.org/images/docgia4.png)' }}>
                                            </div>
                                            <p>Độc giả nhấn vào tên sách (tựa sách) muốn đọc.Thư Viện sẽ chuyển đến trang “Thông tin sách”.<hr />Ví dụ: sách có tên “A Brief History of Christianity”.<hr />Trang sẽ hiện ra các thông tin quyển sách và nút “ĐĂNG KÝ ĐỌC TÁC PHẨM” như sau:</p>
                                            <div className="project img d-flex justify-content-center align-items-end" style={{ backgroundImage: 'url(https://thuvienhoidonggiammucvietnam.org/images/docgia6.png)' }}>

                                            </div>
                                            <p className="thongbaohd">Bước 3: Nhấn nút “ĐĂNG KÝ ĐỌC TÁC PHẨM”</p>
                                            <p>Sau khi đăng ký thành công sẽ hiện thông báo:<hr />“Đăng ký đọc sách thành công, xin kiểm tra email.”</p>
                                            <div className="project img d-flex justify-content-center align-items-end" style={{ backgroundImage: 'url(https://thuvienhoidonggiammucvietnam.org/images/docgia7.png)' }}>
                                            </div>
                                            <p>Thư Viện sẽ tự động gởi đường link sách đã chọn đến email đăng ký của độc giả.</p>
                                            <h4 className="thongbaohd">Lưu ý: Thời hạn truy cập link là 2 tuần.</h4>
                                        </div>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>             
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
