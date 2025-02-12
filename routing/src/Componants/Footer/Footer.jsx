import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
  
  

    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        
        <div className="text-lg font-semibold">
          <h3>Location</h3>
          <p className="text-gray-300">Cairo, Egypt</p>
        </div>

        
        <div>
          <h3 className=" text-lg font-semibold">Around the Web</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-300 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-300 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        
        <div>
          <h3 className=" text-lg font-semibold">About Freelancer</h3>
          <p className="text-gray-300">
            Passionate developer providing quality services for modern web applications.
          </p>
        </div>
      </div>
    </footer>


    </>
  )
}
