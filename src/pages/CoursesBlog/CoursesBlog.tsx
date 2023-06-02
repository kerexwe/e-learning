/* eslint-disable react/jsx-pascal-case */
import React, { FC, useEffect } from 'react';
import useBlogs from '../../hooks/useBlogs';
import { PostArr, PostArr_ru } from '../../constants/PostArr';
import { Post_Big } from './../../components/Post/Post';
import { PostType } from '../../types/types';
import css from './CoursesBlog.module.scss';
// import Button from './../../components/Button/Button';
import Blogs_main from './Blogs_main/Blogs_main';

const CoursesBlog: FC = () => {
	const { isLoading, blog, getBlog, addBlog, langauge } = useBlogs();

	// const upload = () => {
	// 	PostArr_ru.map((e) => {
	// 	return addBlog(e);
	// 	});
	// };

	useEffect(() => {
		getBlog();
	}, [getBlog, langauge]);

	const LastPost: PostType = {
		...blog[0],
	};

	if (isLoading)
		return (
			<div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<h1>Loading....</h1>;
			</div>
		);

	return (
		<section className={css['Page_wrapper']}>
			<Post_Big img={LastPost.img} month={LastPost.month} day={LastPost.day} title={LastPost.title} desc={LastPost.desc} name={LastPost.name} time={LastPost.time} pfp={LastPost.pfp} />
			<Blogs_main />
		</section>
	);
};

export default CoursesBlog;
