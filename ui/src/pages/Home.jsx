
import Description from "../components/Description";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Overlay from "../components/Overlay";
import Slide from "../components/Slide";
import DetailBook from "../components/DetailBook";
import Breadcrumb from "../components/Breadcrumb";

const Home = () => {
    return (
        <>
            <Navbar />
            <Overlay />
            <Description />
            <Slide />
            <section className="ftco-section ftco-project" id="projects-section-index">
                <div className="container">
                    <Breadcrumb
                    heading={"Sách"}
                    title={"Được xem nhiều nhất"}
                    />
                    <DetailBook />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;