import Headers from '../../Components/Header/Headers'
import AboutUs from './About_Us/AboutUs'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import WhyUs from './WhyUs/WhyUs'

const Website = () => {
  return (
    <div>
      <div className='bg-[#ECF6FF] border-b border-black'>
        <Headers />
        <Hero />
      </div>
      <AboutUs />
      <Services />
      <WhyUs/>
    </div>
  )
}

export default Website
