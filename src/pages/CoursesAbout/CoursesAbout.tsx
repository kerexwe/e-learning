import React from 'react';
import Main from './Components/Main/Main';
import Static from './Components/Static/Static';
import Values from './Components/Values/Values';
import WeWorkWith from './../CoursesLanding/components/WeWorkWith/WeWorkWith';
import LatestPosts from './../CoursesLanding/components/LatestPosts/LatestPosts';
import Teachers from './Components/Teachers/Teachers';

const CoursesAbout: React.FC = () => {
	return (
		<section>
			<Main />
			<Static />
			<Values />
			<Teachers />
			{/*fromLandingComponents */}
			<WeWorkWith />
			<LatestPosts />
		</section>
	);
};

export default CoursesAbout;
