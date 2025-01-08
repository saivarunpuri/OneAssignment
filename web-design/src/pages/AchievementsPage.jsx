import React from "react";

const AchievementsPage = () => {
  return (
    <div
      className="flex justify-center items-center text-white"
      style={{
        width: "1440px",
        height: "715px",
        backgroundColor: "#122648", // Updated background color
      }}
    >
      <div
        className="grid md:grid-cols-2 gap-10 items-center w-full max-w-6xl"
        style={{ width: "1050px", height: "500px" }}
      >
        {/* Left Section */}
        <div className="pl-10">
          <h4 className="text-orange-500 font-semibold text-lg">HAVE A LOOK</h4>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Certifications <br />
            Counseling Success <br />& Institutional Partnerships
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            We are ISO certified, ensuring top-quality counseling services. Over
            1,000 counseling sessions and partnerships with 100+ institutions
            reflect our commitment to student success.
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
            START LEARNING NOW
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full">
          {/* Section Title */}
          <div className="text-center mb-6 md:mb-8">
            <h4 className="text-orange-500 font-semibold text-lg">
              OUR ACHIEVEMENTS
            </h4>
            <h2 className="text-3xl font-bold mt-2">Our Great Achievement</h2>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full" style={{ width: "485px", height: "350px" }}>
            {/* Achievement Card 1 */}
            <div className="bg-white text-blue-900 flex items-center justify-center text-center py-6 rounded-lg shadow-lg">
              <div>
                <h3 className="text-3xl text-orange-600 font-bold">1000+</h3>
                <p className="mt-2 font-bold" style={{ color: "#676767" }}>Counselling done</p>
              </div>
            </div>

            {/* Achievement Card 2 */}
            <div className="bg-white text-blue-900 flex items-center justify-center text-center py-6 rounded-lg shadow-lg">
              <div>
                <h3 className="text-3xl text-orange-600 font-bold">100+</h3>
                <p className="mt-2 font-bold" style={{ color: "#676767" }}>Institutes associated</p>
              </div>
            </div>

            {/* Achievement Card 3 */}
            <div className="bg-white text-blue-900 flex items-center justify-center text-center py-6 rounded-lg shadow-lg">
              <div>
                <h3 className="text-3xl text-orange-600 font-bold">ISO 9001</h3>
                <p className="mt-2 font-bold" style={{ color: "#676767" }}>2015 Certified</p>
              </div>
            </div>

            {/* Achievement Card 4 */}
            <div className="bg-white text-blue-900 flex items-center justify-center text-center py-6 rounded-lg shadow-lg">
              <div>
                <h3 className="text-3xl text-orange-600 font-bold">1000+</h3>
                <p className="mt-2 font-bold" style={{ color: "#676767" }}>Students Succeeded</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
