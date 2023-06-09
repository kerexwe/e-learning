import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AppSelector } from './redux/index';
import { ThemeType } from './types/types';
import CoursesLanding from './pages/CoursesLanding/CoursesLanding';
import CoursesBlog from './pages/CoursesBlog/CoursesBlog';
import CoursesList from './pages/CoursesList/CoursesList/CoursesList';
import CoursesListDetails from './pages/CoursesList/CoursesListDetails/CorsesListDetails';
import CoursesContact from './pages/CoursesContact/CoursesContact';
import CoursesAbout from './pages/CoursesAbout/CoursesAbout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Newsletter/Newsletter';
import CoursesBlogDetails from './pages/CoursesBlogDetails/CoursesBlogDetails';

const App: React.FC = () => {
  const themeDark = AppSelector((state: ThemeType) => state.themeDark);
  const styleVars: object = {
    "--textMain": themeDark ? "#fff" : "#212b36",
    "--textSec": themeDark ? "#919eab" : "#637381",
    "--Orange": "#fa541c",
    "--bkgMain": themeDark ? "#161c24" : "#fff",
    "--bkgSec": themeDark ? "rgba(145, 158, 171, 0.12)" : "#f9fafb",
    "--bkgSec2": themeDark ? "#212b36" : "#fff"
  };

    return (
		<div className='App' style={styleVars}>
			<Header />
			<Routes>
				<Route path='/' element={<CoursesLanding />} />
				<Route path='/Blog' element={<CoursesBlog />} />
				<Route path='/Blog/details/:id' element={<CoursesBlogDetails />} />
				<Route path='/Courses/list' element={<CoursesList />} />
				<Route path='/Courses/list/details/:id' element={<CoursesListDetails/>} />
				<Route path='/Contacts' element={<CoursesContact />} />
				<Route path='/AboutUs' element={<CoursesAbout />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
			<Newsletter/>
			<Footer />
		</div>
	);
};

export default App;
