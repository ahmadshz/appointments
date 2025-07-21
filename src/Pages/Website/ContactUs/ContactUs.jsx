import { FaPhoneAlt,  FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className=" py-32 container mx-auto p-6 space-y-24">
      {/* Title */}
      <h2 className=" text-center text-[#234A6B] text-4xl font-medium ">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-4 bg-white shadow-lg border border-[#0086FF] rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-700">Send us a message</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0086FF]"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0086FF]"
            required
          />
          <textarea
            placeholder="Write your message..."
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0086FF]"
            required
          />
          <button
            type="submit"
            className="bg-[#0086FF] hover:bg-[#006dd3] text-white font-semibold py-2 px-6 rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white  py-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Get in Touch</h3>

            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-[#0086FF]" />
              <a  className="text-gray-800 hover:text-[#0086FF]">
                +961 12 ....
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-[#0086FF]" />
              <p className="text-gray-800">Minieh, Tripoli, Lebanon</p>
            </div>

           
          </div>

          {/* Google Map */}
          <div className="w-full h-64 border-2 rounded-xl overflow-hidden">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.257530378941!2d35.841617775535386!3d34.43911087301607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f47b7b34dbe5%3A0xb425a94b9b42995d!2zTWluaWVoLCBMaWJhbjogTWluaWVxLCDYp9mE2YXYs9mF2Lkg2KfZhNmF2KzYp9mG!5e0!3m2!1sen!2slb!4v1710666681954!5m2!1sen!2slb"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
