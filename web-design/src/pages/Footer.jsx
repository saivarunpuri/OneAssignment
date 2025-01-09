import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import footerlogo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0d1b3a] text-white py-10 pl-40">
      <div className="container mx-auto flex flex-wrap justify-between mt-10 px-6 py-4">
        {/* Left Section */}
        <div className="w-full md:w-1/3 px-4 flex flex-col justify-start">
          <img
            src={footerlogo}
            alt="Vertexpace"
            className="mb-4"
            style={{ width: "122px", height: "95px" }}
          />
          <p>
            Vertexpace is a leading education consultancy helping students
            achieve their academic and career goals.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        {/* Right Section: Quick Links and Contact Us */}
        <div className="w-full md:w-2/3 flex justify-between space-x-8">
          <div className="md:w-1/2 px-4">
            <h3 className="font-bold mb-2">Quick Links</h3>

            <div className="mt-4 h-1 bg-white w-[30%] mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  What we do
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Colleges
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 px-4">
            <h3 className="font-bold mb-2">Contact Us</h3>
           
            <div className="mt-4 h-1 bg-white w-[30%] mb-4"></div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-white" />
                <span>+91 9620201058</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                <span>info@vertexpace.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
                <span>
                  No.362 / 7, 2nd Floor, 16th main, 4th T Block, Jayanagar,
                  Bangalore, Karnataka - 560041
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <div className="flex justify-between items-center px-4 bg-[#122648] rounded-lg shadow-lg py-4 max-w-7xl mx-auto">
          <p className="text-left text-white">
            Copyright © 2024 Vertexpace. All rights reserved.
          </p>
          <div className="flex justify-end space-x-4 mt-2 text-white">
            <a href="#" className="hover:text-gray-400">
              Private Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400">
              Support
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
