import HeaderSection from './components/HeaderSection';
import Hero from './components/Hero';
import Service from './components/Service';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Plans from './components/Plans';
import About from './components/About';
import Mission from './components/Mission';
import Cta from './components/Cta';


export default function App() {

  return(
    <div className='bg-[#0F3262]'>
      <HeaderSection />
      <Hero />
      <About />
      <Service />
      <Mission />
      <Plans />
      <Cta />
      <Contacts />
      <Footer />
    </div>
  )
}