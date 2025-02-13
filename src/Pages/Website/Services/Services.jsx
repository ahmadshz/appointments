import ServicesDetails from "./ServicesDetails"

const Services = () => {
  return (
    <div className="min-h-screen w-full py-36  bg-[#F9FCFF] ">
      <div className="container">
        <div className="text-center mb-24">
          <h1 className="text-[#234A6B] text-4xl font-medium">
            Our Specialty
          </h1>
          <p className="mt-8 ">
            We provide the world class services with the |<br /> best medical team!
          </p>

        </div>
        <ServicesDetails/>
      </div>
    </div>
  )
}

export default Services

