import React from 'react';
import FeaturedProducts from './components/FeaturedProducts';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';

const Home = () => {
  return (<>
   <HeroSection  name = "Maxx stores"/>
   <FeaturedProducts />
   <Services />
   <Trusted/>
   </>
  )
}

export default Home
