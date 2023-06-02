import React, { useState, useEffect, SetStateAction, useMemo, FC } from 'react';
import useBlogs from '../../../hooks/useBlogs';
import css from './Blogs_main.module.scss';
import { PostArr, Categories, Categories_ru } from '../../../constants/PostArr';
import { Post } from '../../../components/Post/Post';
import { Pagination } from '@mui/material';
//@ts-ignore
import { animateScroll as scroll } from 'react-scroll';
import { PostType } from '../../../types/types';

const sxStyles = {
	'& .Mui-selected': {
		backgroundColor: 'rgba(250, 84, 28, 0.08)',
		color: 'var(--Orange)',
	},
	'& .Mui-selected:hover': {
		backgroundColor: 'rgba(250, 84, 28, 0.2)',
	},
	'& button': {
		width: '40px',
		height: '40px',
		borderRadius: '100%',
		color: 'var(--textMain)',
	},
	'& button:hover': {
		backgroundColor: 'rgba(250, 84, 28, 0.08)',
		color: 'var(--Orange)',
	},
	'& button:hover svg path': {
		backgroundColor: 'rgba(250, 84, 28, 0.08)',
		fill: 'var(--Orange)',
	},
	'& button[disabled]': {
		backgroundColor: 'rgba(250, 84, 28, 0.08);',
		color: 'var(--Orange)',
	},
};

const Blogs_main: FC = () => {
	const { blog, langauge, getBlog, isLoading } = useBlogs();
	// const blog = PostArr;

	//? states

	const categories_language = langauge === 'en' ? Categories : Categories_ru;
	const [CategoriesValue, setCategories] = useState('All');
	const [Data, setData] = useState<PostType[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 8;
	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const [currentPosts, setCurrentPosts] = useState(Data.slice(firstPostIndex, lastPostIndex));
	const [pageCount, setPageCount] = useState(Math.ceil(blog?.length / postsPerPage));

	//? functions

	const HandelCategories = (e: any) => {
		const selectedCategory = e.target.innerText;
		setData(blog.filter(({ category }) => category === selectedCategory));
		setCategories(e.target.innerText);
	};

	const handlePagination = (e: any, value: SetStateAction<number>) => {
		setCurrentPage(value);
	};

	const renderData = useMemo(
		() =>
			currentPosts.map(({ tid, img, month, day, title, desc, name, time, pfp }, index) => {
				return <Post key={tid} img={img} month={month} day={day} title={title} desc={desc} name={name} time={time} pfp={pfp} />;
			}),
		[currentPosts, blog],
	);

	//? effects

	useEffect(() => {
		getBlog();
	}, [getBlog, langauge]);

	useEffect(() => setData(blog), [blog, langauge]);

	useEffect(() => {
		scroll.scrollToTop();
	}, [currentPage, CategoriesValue]);

	useEffect(() => {
		setCurrentPosts(Data.slice(firstPostIndex, lastPostIndex));
		setPageCount(Math.ceil(Data.length / postsPerPage));
	}, [Data, currentPage]);

	return (
		<>
			<div className={css['Blogs_wrapper'] + ' container'}>
				<main className={css['Blogs_main']}>
					{renderData && !isLoading ? renderData : <h1>Empty...</h1>}
					<Pagination count={pageCount} className={css['Blogs-pagination']} page={currentPage} onChange={handlePagination} sx={sxStyles} />
				</main>
				<aside className={css['Blogs_aside']}>
					<h4>search</h4>
					<br />
					<div className={css['Blogs_aside_Categories']}>
						<h4>Categories</h4>
						<ul>
							{categories_language.map((e) => {
								return (
									<li onClick={HandelCategories} className={`secondary_mid_text mainColorText ${CategoriesValue === e ? css['active_li'] : ''}`}>
										{e}
									</li>
								);
							})}
						</ul>
					</div>
				</aside>
			</div>
		</>
	);
};

export default Blogs_main;
