import React from 'react';
import commerce from "../assets/commerce.png";
import barch from "../assets/Barch.png";
import law from "../assets/law.png";
import engineering from "../assets/Engineering.png";
import ayurveda from "../assets/Ayurveda.png";
import management from "../assets/Management.png"

const courses = [
    { title: "Commerce", image: commerce },
    { title: "Engineering", image: engineering },
    { title: "B.Arch", image: barch },
    { title: "Ayurvedic", image: ayurveda },
    { title: "Management", image: management },
    { title: "Law", image: law },
];

const Courses = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 pl-40">
      <div className="container mx-auto">
        <h1 className="text-orange-500 text-sm font-bold uppercase text-center">
          Vertexpace Courses
        </h1>
        <h2 className="text-4xl font-bold text-center text-gray-800 mt-2 mb-8">
          Most Featured Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{ height: '333px', width: '350px' }}  
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
                style={{ height: '250px', width: '350px' }}
              />
              <div className="p-4 flex justify-start items-center " style={{ height: '83px', width: '350px' }}>
                <h3 className="text-xl font-extrabold" style={{ color: "#113575" }}>
                  {course.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
