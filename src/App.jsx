import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Contacts from './pages/Contacts';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AddressBar from './components/Header/AddressBar';
import MobileHeader from './components/Header/MobileHeader';
import ProjectDetails from './pages/ProjectDetails';
import BlogPage from './pages/BlogPage';
import ScrollToTop from './components/scrollToTop';
import { useEffect } from 'react';
import SecondHome from './pages/tryouts/SecondHome';
import LoginTry from './pages/tryouts/loginTry';
import Home from './pages/Home';
import ThirdHome from './pages/tryouts/ThirdHome';
import RvmComparison from './pages/RvmComparison';


function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        {/* <AddressBar /> */}
        <Header />
        <MobileHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/rvmcompare" element={<RvmComparison />} />



          <Route path="/secondhome" element={<SecondHome />} />
          <Route path="/thirdHome" element={<ThirdHome />} />
          <Route path="/loginTry" element={<LoginTry />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
