import React from 'react';
import LatestPosts from './../CoursesLanding/components/LatestPosts/LatestPosts';
import Main from './Components/Main/Main';
import Static from './Components/Static/Static';

const CoursesAbout: React.FC = () => {
	return (
		<section>
			<Main />
			<Static />
			<LatestPosts />
		</section>
	);
};

export default CoursesAbout;
