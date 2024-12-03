import React, {useRef} from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ScrolldownBtn from './Components/ScrolldownBtn/ScrolldownBtn';
import Videocard from './Components/Video Card/Videocard';
import VideoModal from './Components/Video Modal/VideoModal';
import HeroCentered from './Components/Hero Centered/HeroCentered';
import IconColumns from './Components/IconColumns/IconColumns';
import HeroCenteredLarge from './Components/HeroCenteredLarge/HeroCenteredLarge';
import Carousel from './Components/Carousel/Carousel';
import ImageCardLayout from './Components/ImageCardLayout/ImageCardLayout';
import Customers from './Components/Customers/Customers';
import RatingCard from './Components/RatingCard/RatingCard';
import Footer from './Components/Footer/Footer';

function App() {
  const targetRef = useRef(null);
  const scrollToComponent = () => {
    targetRef.current?.scrollIntoView({behavior:"smooth"});
  };

  return (
   <Routes>
      <Route path='/' element={
        <div>
          <div id="nav-hero">
            <Navbar />
            <Hero/>
            <ScrolldownBtn onScrollToComponent={scrollToComponent}/>
          </div>
          <div ref={targetRef}>
            <Videocard />
            <VideoModal />
          </div>
          <div>
           <HeroCentered backgroundColor="rgb(250, 250, 250)"/>
           <IconColumns />
           <HeroCenteredLarge />
           <Carousel />
           <HeroCenteredLarge headingText="Recent Blog Post" backgroundColor="rgb(101, 192, 186)" color="white" />
           <ImageCardLayout />
           <Customers />
           <HeroCentered headingText="Top Destination" backgroundColor="white"/>
           <RatingCard />
           <Footer />
          </div>
        </div>
    }/>
    <Route path='/hotels' element={
        <div>
          <div className='hotel-img'>
            <Navbar />
            <Hero heroHeading="Our Hotel" displayHeroBtn="false"/>
          </div>
        </div>
    }/>
    <Route path='/about-us' element={
        <div>
          <div className='about-img'>
            <Navbar />
            <Hero heroHeading="About Us" displayHeroBtn="false"/>
          </div>
        </div>
    }/>
    <Route path='/gallery' element={
        <div>
          <div className='about-img'>
            <Navbar />
            <Hero heroHeading="Gallery" displayHeroBtn="false"/>
          </div>
        </div>
    }/>
    <Route path='/news' element={
        <div>
          <div className='news-img'>
            <Navbar />
            <Hero heroHeading="Blog" displayHeroBtn="false"/>
          </div>
        </div>
    }/>
    <Route path='/contact' element={
        <div>
          <div className='contact-img'>
            <Navbar />
            <Hero heroHeading="Contact" displayHeroBtn="false"/>
          </div>
        </div>
    }/>
   </Routes>
   
  );
}

export default App;
