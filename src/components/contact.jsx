import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
  return (
    <div className="flex justify-center  max-w-7xl  mx-auto">
      <div className="max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Bagian kiri dengan form */}
          <div className="md:w-1/2 w-5/6 sm:px-16 px-9   mb-7 md:mb-0 bg-white rounded-lg">
            <form className="space-y-4   py-9">
              <div className=''>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-4 py-2" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-4 py-2" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2"></textarea>
              </div>
              <button type="submit" className="mx-auto flex items-center text-center bg-[#ECC50D] text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300">Submit</button>
            </form>
          </div>
          

          {/* Bagian kanan dengan informasi dan sosial media */}
          <div className="md:w-1/2 md:pl-12 px-12  mt-9 md:mt-0">
            <div className="mb-3">
              <h1 className="text-3xl font-bold mb-4">Contact Us for Further Inquiries</h1>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="flex flex-col ">
            <a href="#" className="text-gray-700 mt-5 hover:text-blue-500 flex ">  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a5 5 0 0 1 5 5c0 3.93-5 12-5 12S5 10.93 5 7a5 5 0 0 1 5-5zm0 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg><span className="ml-2 ">Serang, Banten</span></a>
              <a href="#" className="text-gray-700 mt-5 hover:text-blue-500"><FontAwesomeIcon icon={faEnvelope} className="ml-2" /><span className="ml-2  ">zettainment@gmail.com</span></a>
              <a href="#" className="text-gray-700 mt-5 hover:text-blue-500"><FontAwesomeIcon icon={fab.faInstagram} className="ml-2" /><span className="ml-2 ">zettainment_</span></a>
              <a href="#" className="text-gray-700 mt-5 hover:text-blue-500"><FontAwesomeIcon icon={fab.faTiktok} className="ml-2" /><span className="ml-2 ">zettainment_</span></a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactForm;