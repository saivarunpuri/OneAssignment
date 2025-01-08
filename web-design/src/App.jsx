import React from "react";

import 'font-awesome/css/font-awesome.min.css';

import PageOne from "./pages/pageone";
import Pagetwo from "./pages/pagetwo";
import PageThree from "./pages/pagethree";
import AchievementsPage from "./pages/AchievementsPage";
import Courses from "./pages/Courses";
import Choose from "./pages/Choose";
import Trusted from "./pages/Trusted";
import Testimonials from "./pages/Testimonials";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>
      {/* Render Page One */}
      <PageOne />
      <Pagetwo />
      <PageThree/>
      <AchievementsPage/>
      <Courses/>
      <Choose/>
      <Trusted/>
      <Testimonials/>
      <Footer/>

    </div>
  );
};

export default App;
