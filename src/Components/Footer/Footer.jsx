import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0086ff] text-white py-10 mt-10">
            <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3  gap-10">

                {/* About */}
                <div className='mx-auto'>
                    <h2 className="text-2xl font-bold mb-4">MyClinic</h2>
                    <p className="text-sm ">
                        A medical platform for booking appointments easily and efficiently. We believe in better healthcare that starts with accessibility.          </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2  text-sm">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/appointments" className="hover:text-white">Appointments</a></li>
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>


                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
                        <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
                        <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-300"><FaLinkedin /></a>
                    </div>
                </div>

            </div>

            <div className="text-center text-sm  mt-10 border-t border-white pt-6">
                &copy; {new Date().getFullYear()} MyClinic. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
