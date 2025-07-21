import Footer from '../../Components/Footer/Footer'
import AboutUs from './About_Us/AboutUs'
import ContactUs from './ContactUs/ContactUs'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import WhyUs from './WhyUs/WhyUs'

const Website = () => {
  return (
    <div>
      <div className='bg-[#ECF6FF] border-b border-black'>
        <Hero />
      </div>
      <AboutUs />
      <Services />
      <WhyUs />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Website
