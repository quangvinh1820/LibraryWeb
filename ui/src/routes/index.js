import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import DetailPage from "../pages/Detail";
import BookPage from "../pages/BookPage";
import ContactPage from "../pages/Contact";
import VideoPage from "../pages/Video";
import AuthorPage from "../pages/Author";
import ChudePage from "../pages/Chude";
import SortChudePage from "../pages/SortChude";
import BookAuthorPage from "../pages/BookAuthor";
import RentedPage from "../pages/RentedPage";

export const routes = [
    {
        path: '/',
        page: HomePage
    },
    {
        path: '/sign-in',
        page: LoginPage
    },
    {
        path: '/sign-up',
        page: RegisterPage
    },
    {
        path: '/book-details/:id',
        page: DetailPage
    },
    {
        path: '/book',
        page: BookPage
    },
    {
        path: '/video',
        page: VideoPage
    },
    {
        path: '/author',
        page: AuthorPage
    },
    {
        path: '/book-author/:authorName',
        page: BookAuthorPage
    },
    {
        path: '/chude',
        page: ChudePage
    },
    {
        path: '/phanloaiDDC',
        page: SortChudePage
    },
    {
        path: '/contact',
        page: ContactPage
    },
    {
        path: '/rented-book',
        page: RentedPage
    },
]
    