import React from "react";
import FeaturedCategory from "./components/FeaturedCategory/FeaturedCategory";
import Main from './components/Main/Main';
import WeWorkWith from './components/WeWorkWith/WeWorkWith';
import DownloadApp from './components/DownloadApp/DownloadApp';

const CoursesLanding: React.FC = () => {
  return (
    <section>
      <Main/>
      <WeWorkWith/>
      <FeaturedCategory/>
      <DownloadApp/>
      
    </section>
  );
};
export default CoursesLanding;
