import React from 'react';
import FeaturedCategory from './components/FeaturedCategory/FeaturedCategory';
import Main from './components/Main/Main';
import WeWorkWith from './components/WeWorkWith/WeWorkWith';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Say from "./components/Say/Say";
import Team from './components/Team/Team';
import Why from './components/Why/Why';
import LatestPosts from './components/LatestPosts/LatestPosts';

const CoursesLanding: React.FC = () => {
  return (
    <section>
      <Main/>
      <Why/>
      <FeaturedCategory/>
      <WeWorkWith/>
      <Team/>
      <Say/>
      <LatestPosts/>
      <DownloadApp/>
    </section>
  );
};
export default CoursesLanding;
