import React from 'react'
import choosebg from "../assets/choosebg.jpeg"
import choosei1 from "../assets/choosei1.jpeg"

const Choose = () => {
  return (
    <section className="relative text-white py-16"
      style={{
        height: '1000px',
        width: '1440px',
        background: `linear-gradient(180deg, #122648 0%, #0F3069 100%)`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${choosebg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity:10, 
          zIndex: -1, 
        }}
      ></div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full relative z-10 mt-36">
        <div className="text-center mb-8 items-center" style={{width:'800px' , height:"368px"} }>
          <h2 className="text-3xl font-semibold mb-4">Why Choose Vertexpace?</h2>
          <p className="text-base mb-6 max-w-2xl mx-auto">
            Vertexpace is dedicated to empowering students and their families, turning the often-complicated admission process into a manageable and rewarding experience. With us by your side, achieving admission to your dream school, college, or university becomes smoother and more attainable.
          </p>
          <div className="flex justify-center gap-8 mb-6">
            <span>Personalized Attention</span>
            <span>Streamlined & Efficient Process</span>
            <span>Reliable & Consistent Results</span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded">
            JOIN US NOW
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-8 mb-4">
          <img
            src={choosei1}
            alt="Students working together"
            className="mx-auto rounded-lg shadow-lg"
            style={{ width: '80%', Width: '960px', objectFit: 'cover', height:"500px" }}
          />
        </div>
      </div>
    </section>
  )
}

export default Choose
