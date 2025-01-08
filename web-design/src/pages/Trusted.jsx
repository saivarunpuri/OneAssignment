import React from 'react';
import reva from "../assets/Reva.png"
import rammanaiah from "../assets/Ramaiah.png"
import trustedi3 from "../assets/trustedi3.png"
import presediency from "../assets/presidency.png"
import christ from "../assets/christ.png"

const Trusted = () => {
  const universities = [
    { name: 'Reva University', logo:reva },
    { name: 'Ramaiah', logo: rammanaiah },
    { name: 'Nitte Meenakshi Institute of Technology', logo: trustedi3 },
    { name: 'Presidency College Bangalore', logo: presediency },
    { name: 'Christ University', logo: christ },
  ];

  return (
    <div className="bg-white py-16 px-8 text-center mt-20">
      <h2 className="text-orange-500 font-semibold uppercase">Trusted By</h2>
      <h1 className="text-3xl font-bold text-gray-900 mt-2">100+ Leading Colleges And <br /> Universities</h1>
      <p className="text-gray-600 mt-4">
        Trusted by leading colleges and universities, Vertexpace is recognized for its reliability and commitment.
      </p>
      <div className="mt-10 flex justify-center items-center gap-8">
        {universities.map((university, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md" style={{width:"185px",height:"105px"}}>
            <img src={university.logo} alt={university.name} className="h-16 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trusted;
