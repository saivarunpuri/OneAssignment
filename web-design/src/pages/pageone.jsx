import React, { useState } from 'react';
import bgimage from "../assets/bg-image.png";
import logo from "../assets/logo.png"; // Import your logo image
import image1 from "../assets/image1.png"; // Import image1
import image2 from "../assets/image2.png"; // Import image2
import { FaBars, FaTimes } from 'react-icons/fa'; // Import FontAwesome icons

const pageone = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-b from-[#0F3069] to-[#113575] text-white min-h-screen pl-40">
      {/* Background Image */}
      <img
        src={bgimage}
        alt="Background"
        className="absolute inset-0 w-full h-full opacity-50 object-cover"
      />
      
      {/* Header */}
      <header className="relative text-sm">
        {/* Top Contact Info */}
        <div className="container mx-auto px-6 py-2 flex justify-between items-center hidden lg:flex">
          <div className="flex items-center space-x-4 gap-4">
            <span>+91 9620201058 |</span>
            <span>Jayanagar, Bangalore |</span>
            <span>info@vertexpace.com</span>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-white max-w-full rounded-md shadow-md mt-3 mx-auto">
          <div className="px-6 py-4 flex justify-between items-center">
            {/* Left Side - Logo */}
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Logo" className="w-20 h-auto" />
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-[#122648] font-bold"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Middle - Navigation Links */}
            <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block space-x-6 text-[#122648] font-bold`}>
              <a href="#" className="hover:text-orange-500 flex items-center">
                 Home
              </a>
              <a href="#" className="hover:text-orange-500 flex items-center">
                 What We Do
              </a>
              <a href="#" className="hover:text-orange-500 flex items-center">
                Colleges
              </a>
              <a href="#" className="hover:text-orange-500 flex items-center">
                 Contact
              </a>
            </div>

            {/* Right Side - Join Us Button */}
            <button className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 text-white hidden lg:block">
              Join Us Now
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center py-16 px-6 container mx-auto mt-32">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Welcome To <br /> <span className="text-orange-500">Vertexpace!</span>
          </h1>
          <p className="text-lg italic mb-8">
            "The Function of education is to teach one to think intensively and
            to think critically. Intelligence and character - that is the goal of
            true education."
            <br />
            <span className="font-bold">~ Martin Luther King</span>
          </p>
          <button className="bg-orange-500 px-6 py-3 rounded text-white font-medium text-lg hover:bg-orange-600">
            Get Started
          </button>
        </div>

        {/* Right Side - Image 1 on top of Image 2 */}
        <div className="w-full lg:w-1/2 text-center">
          <div className="relative mx-auto w-64 h-64 rounded-full overflow-hidden">
            <img
              src={image1}
              alt="Image 1"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
            <img
              src={image2}
              alt="Image 2"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default pageone;
