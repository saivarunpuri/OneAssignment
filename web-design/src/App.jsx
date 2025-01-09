import React from "react";

import 'font-awesome/css/font-awesome.min.css';

import PageOne from "./pages/pageone";
import Pagetwo from "./pages/pagetwo";
import AchievementsPage from "./pages/AchievementsPage";
import Courses from "./pages/Courses";
import Choose from "./pages/Choose";
import Trusted from "./pages/Trusted";
import Testimonials from "./pages/Testimonials";
import Footer from "./pages/Footer";
import Services from "./pages/Services";

const App = () => {
  return (
    <div>
      <PageOne />
      <Pagetwo />
      <Services/>
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
