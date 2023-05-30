import React, { useEffect } from 'react';
import useBlogs from '../../hooks/useBlogs';
import { PostArr } from '../../constants/PostArr';
import { Post_Big } from './../../components/Post/Post';

const CoursesBlog: React.FC = () => {
	const { isLoading, blog, getBlog /*! addBlog */ } = useBlogs();

	// const upload = () => {
	// 	PostArr.map((e) => {
	// 		return addBlog(e);
	// 	});
	// };

	useEffect(() => {
		getBlog();
	}, []);

	console.log(blog);

	if (isLoading) return <h1>Loading....</h1>;
	return (
		<section>
			{/* <Post_Big img={} month={} day={} title={} desc={} name={} time={} pfp={} /> */}
		</section>
	);
};

export default CoursesBlog;
