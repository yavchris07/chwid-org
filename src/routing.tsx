import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import New from './pages/news';
import Contact from './pages/contact';
import Join from './pages/join';
import Blogs from './pages/blogs';
import ErrorPage from './pages/Error-page';
import Footer from './components/footer';

const Routing = () => {
    return (
        <>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/join' Component={Join} />
          <Route path='/blogs' Component={Blogs} />
          <Route path='/contact' Component={Contact} />
          <Route path='/news' Component={New} />
          <Route Component={ErrorPage} />
        </Routes>
        <Footer />
        </BrowserRouter>
      </>
    )
}
export default Routing