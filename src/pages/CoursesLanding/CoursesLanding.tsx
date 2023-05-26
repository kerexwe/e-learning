import React from "react";
import Newsletter from "../../components/Newsletter/Newsletter";
import FeaturedCategory from "./components/FeaturedCategory/FeaturedCategory";
import Main from './components/Main/Main';
import WeWorkWith from './components/WeWorkWith/WeWorkWith';

const CoursesLanding: React.FC = () => {
  return (
    <section>
      <Main/>
      <WeWorkWith/>
      <Newsletter/>
      <FeaturedCategory/>
    </section>
  );
};
export default CoursesLanding;
