import React from 'react'
import p3i1 from "../assets/p3i1.png";
import p3i2 from "../assets/p3i2.png";
import p3i3 from "../assets/p3i3.png";
import p3i4 from "../assets/p3i4.png";

const Services = () => {
  return (
    <section className="bg-gray-100 py-16 px-8 pl-40">
          {/* Header Section */}
          <div
            className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-12"
            style={{ width: "1140px", height: "197px" }}
          >
            {/* Left Side (Heading Section) */}
            <div className="text-left mb-6 lg:mb-0 lg:w-1/2">
              <h4 className="text-orange-500 uppercase font-semibold mb-2">Our Services</h4>
              <h2
                className="text-3xl font-extrabold"
                style={{ color: "#113575" }}
              >
                What We Provide For Your
                <br />
                Success.
              </h2>
            </div>
    
            {/* Right Side (Description and Button) */}
            <div className="text-left lg:w-1/2">
              <p
                className="text-sm leading-relaxed font-bold mb-4"
                style={{ color: "#676767" }}
              >
                We provide end-to-end support to help you achieve your academic and career goals.
                <br />
                With personalized guidance and seamless support, we ensure a smooth journey to
                secure your future.
              </p>
              <button
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition font-bold"
                style={{ width: "186px", height: "55px" }}
              >
                KNOW MORE
              </button>
            </div>
          </div>
    
          {/* Services Section */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {/* Highlighted Card */}
            <div className="  bg-[#122648] text-white p-6 rounded-lg shadow-lg flex items-center justify-center text-center" >
              <p>
                A psychometric test analyzes personality, intelligence, and behavior using
                scientific methods.
              </p>
            </div>
    
            {/* Other Service Cards */}
            <div
              className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center"
              style={{ width: "242px", height: "298px" }}
            >
              <img
                src={p3i1}
                alt="Career Counselling"
                className="mb-4"
                style={{ width: "100px", height: "100px" }}
              />
              <h3 className="text-gray-800 text-xl font-semibold">Career Counselling</h3>
            </div>
            <div
              className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center"
              style={{ width: "242px", height: "298px" }}
            >
              <img
                src={p3i2}
                alt="Admission Guidance"
                className=" mb-4"
                style={{ width: "100px", height: "100px" }}
              />
              <h3 className="text-gray-800 text-xl font-semibold">Admission Guidance</h3>
            </div>
            <div
              className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center"
              style={{ width: "242px", height: "298px" }}
            >
              <img
                src={p3i3}
                alt="Application And Documentation"
                className=" mb-4"
                style={{ width: "100px", height: "100px" }}
              />
              <h3 className="text-gray-800 text-xl font-semibold">
                Application And Documentation
              </h3>
            </div>
            <div
              className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center"
              style={{ width: "242px", height: "298px" }}
            >
              <img
                src={p3i4}
                alt="Secured Admission"
                className=" mb-4"
                style={{ width: "100px", height: "100px" }}
              />
              <h3 className="text-gray-800 text-xl font-semibold">Secured Admission</h3>
            </div>
          </div>
        </section>
  )
}

export default Services
