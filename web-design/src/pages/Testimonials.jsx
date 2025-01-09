import React from 'react';
import men1 from "../assets/men1.png";
import women from "../assets/women.png";

const testimonials = [
  {
    name: 'Roboto Eroure',
    designation: 'Designation',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: men1,
  },
  {
    name: 'Courtney Henry',
    designation: 'Designation',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: women,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-semibold text-orange-500">TESTIMONIES</h2>
        <h3 className="text-3xl font-bold text-gray-900 mt-2">What's Our Clients Say About <br /> Vertexpace</h3>
      </div>
      <div className="mt-20 flex justify-center space-x-8 mb-10">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center" 
            style={{ width: '525px', height: '375px' }}
          >
           
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-[128px] text-[#122648]" style={{height:"145px",width:"163px"}}>
              "
            </div>
            <div className="flex justify-center">
              <img className="w-16 h-16 rounded-full" src={testimonial.image} alt={testimonial.name} />
            </div>
            <p className="text-gray-600 mt-10 text-center">{testimonial.feedback}</p>
            <div className="mt-4 text-center">
              <p className="text-gray-900 font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
