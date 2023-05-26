import React from "react";
import Newsletter from "../../components/Newsletter/Newsletter";
import FeaturedCategory from "./components/FeaturedCategory/FeaturedCategory";
import Why from "./components/Why/Why";
import Team from "./components/Team/Team";
import Main from './components/Main/Main';
import WeWorkWith from './components/WeWorkWith/WeWorkWith';
import DownloadApp from './components/DownloadApp/DownloadApp';

const CoursesLanding: React.FC = () => {
  return (
    <section>
      <Main/>
      <FeaturedCategory/>
       <WeWorkWith/>
      <Team/>
      <Why/>
      <Newsletter/>
      <DownloadApp/>
    </section>
  );
};
export default CoursesLanding;
