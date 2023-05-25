import React from "react";
import Newsletter from "../../components/Newsletter/Newsletter";
import FeaturedCategory from "./components/FeaturedCategory/FeaturedCategory";

const CoursesLanding: React.FC = () => {
  return (
    <section>
      <Newsletter/>
      <FeaturedCategory/>
    </section>
  );
};
export default CoursesLanding;
