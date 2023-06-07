import React from 'react';
import FeaturedCategory from './components/FeaturedCategory/FeaturedCategory';
import Main from './components/Main/Main';
import WeWorkWith from './components/WeWorkWith/WeWorkWith';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Say from "./components/Say/Say";

const CoursesLanding: React.FC = () => {
  return (
    <section>
      <Main/>
      {/* <Say/> */}
      <FeaturedCategory/>
       <WeWorkWith/>
      <Team/>
      <Why/>
      <DownloadApp/>
    </section>
  );
};
export default CoursesLanding;
