

import HeroSection from './components/HeroSection';
import  {useProductContext}  from './context/productcontext';


const About = () => {
  const {myName} = useProductContext();
  return (
    <>{myName}<HeroSection  name = "Maxx Ecommerce"/></>
  )
}

export default About;
