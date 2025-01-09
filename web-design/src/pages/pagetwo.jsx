import React from "react";
import p2image1 from "../assets/p2image1.png";  
import starImage from "../assets/star.png";  
import p2image3 from "../assets/p2image3.png"; 

const PageTwo = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 p-6">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          {/* Text Section */}
          <div className="mb-16"  style={{width:"493px" ,height:"100px"}}>
            <p className="text-lg font-semibold" style={{color:'#676767'}}>
              We have exciting offers for our student community, ranging from free counselling
              sessions to carefully designed assistance programs. Aspiring to build impeccable
              careers for our youth.
            </p>
          </div>

         
          <div className="relative">
         
            <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 w-full max-w-[520px] z-10">
              <CardWithProgress
                title="Your Career Progress"
                progressItems={[
                  { label: "Personalized Counselling", percentage: "80%" },
                  { label: "Guided Assistance Programs", percentage: "75%" },
                  { label: "Career Success", percentage: "100%" }
                ]}
              />
            </div>

            {/* Image */}
            <img
              src={p2image1}
              alt="Group Discussion"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-6">
          {/* Header Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-orange-500">About Vertexpace</h2>
            <h1 className="text-4xl font-bold" style={{color:"#113575"}}>Vertexpace: Your Pathway to Career Success</h1>
            <hr className="border-0 h-[4px] bg-[#113575] w-[78px] mt-5" />


          </div>

          {/* Card Section */}
          <Card
            title="Career Compass"
            description="Feeling lost? Vertexpace guides you to the right career with expert counselling."
          />
          <img
            src={p2image3}
            alt="Career Compass"
            className="rounded-lg shadow-md my-6"
          />
          <Card
            title="Career Guidance"
            description="With expertise in the Indian education system, we guide you to the right career path for success."
          />
        </div>
      </div>
    </div>
  );
};


const CardWithProgress = ({ title, progressItems }) => (
  <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[420px] min-h-[200px]">
    <h3 className="text-[18px] font-semibold text-blue-800 mb-4">{title}</h3>
    <div className="space-y-4">
      {progressItems.map((item, index) => (
        <ProgressItem key={index} label={item.label} percentage={item.percentage} />
      ))}
    </div>
  </div>
);

const ProgressItem = ({ label, percentage }) => {
  
  const progressPercentage = parseInt(percentage);

  return (
    <div className="relative">
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
        <div
          className="bg-[#113575] h-2.5 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

     
      <div
        className="absolute top-[-20px] flex justify-center items-center font-bold text-white text-xs"
        style={{
          left: `${progressPercentage}%`,
          transform: 'translateX(-50%)',
          width: '43px',
          height: '25px',
          backgroundColor: '#122648',
          borderRadius: '5px',
        }}
      >
        {percentage}
      </div>

      {/* Label */}
      <div className="flex justify-between text-sm font-medium mt-2">
        <span className="font-bold" style={{ color: "#122648" }}>{label}</span>
      </div>
    </div>
  );
};

// Card Component
const Card = ({ title, description }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-[520px] min-h-[124.76px] flex gap-4">
    {/* Left Side (Star Image) */}
    <img src={starImage} alt="Star" className="w-[40px] h-[40px] rounded-full" />

    
    <div className="flex-1">
      <h3 className="text-[18px] font-bold mb-2" style={{color:"#113575"}} >{title}</h3>
      <p className="text-[15.5px] font-bold text-gray-600">{description}</p>
    </div>
  </div>
);

export default PageTwo;
