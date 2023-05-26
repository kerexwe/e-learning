import React from "react";
import Newsletter from "../../components/Newsletter/Newsletter";
import FeaturedCategory from "./components/FeaturedCategory/FeaturedCategory";
import Why from "./components/Why/Why";
import Team from "./components/Team/Team";

const CoursesLanding: React.FC = () => {
  return (
    <section>
      <FeaturedCategory/>
      <Team/>
      <Why/>
      <Newsletter/>
    </section>
  );
};
export default CoursesLanding;
