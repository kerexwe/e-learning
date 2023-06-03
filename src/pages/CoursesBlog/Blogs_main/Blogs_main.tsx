/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect, SetStateAction, useMemo, FC } from 'react';
import useBlogs from '../../../hooks/useBlogs';
import css from './Blogs_main.module.scss';
import { Categories, Categories_ru } from '../../../constants/PostArr';
import { Post, Post_Small } from '../../../components/Post/Post';
import { Pagination } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

import Box from '@mui/material/Box';
import SearchIcon from './assets/ic_search.svg';
import image from './assets/image.svg';

//@ts-ignore
import { Element, scroller } from 'react-scroll';
import { PostType } from '../../../types/types';
import Button from '../../../components/Button/Button';
import { useTranslation } from 'react-i18next';

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

const base = 'BlogPage.';

const Blogs_main: FC = () => {
	const { blog, langauge, getBlog } = useBlogs();

	// const blog = PostArr;
	const { t } = useTranslation();
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1200px)',
	});

	// ? states
	const categories_language = langauge === 'en' ? Categories : Categories_ru;
	const [CategoriesValue, setCategories] = useState('All');
	const [tagValue, setTagValue] = useState('All');
	const [Data, setData] = useState<PostType[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 8;
	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const [currentPosts, setCurrentPosts] = useState(Data.slice(firstPostIndex, lastPostIndex));
	const [pageCount, setPageCount] = useState(Math.ceil(blog?.length / postsPerPage));
	const [tagsArr, setTagsArr] = useState<Set<string>>(new Set([]));
	const [searchTerm, setSearchTerm] = useState('');
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

	// ? functions
	const HandelCategories = (e: any) => {
		scrollTo();
		const selectedCategory = e.target.innerText;
		setData(blog.filter(({ category }) => category === selectedCategory));
		setCategories(e.target.innerText);
		setCurrentPage(1);
		setTagValue('All');
	};

	const handelTags = (e: any) => {
		scrollTo();
		const selectedTag = e.target.innerText;
		setData(blog.filter(({ tags }) => tags?.includes(selectedTag)));
		setTagValue(e.target.innerText);
		setCurrentPage(1);
		setCategories('All');
	};

	const updateTags = () => {
		const newTagsArr: Set<string> = new Set(tagsArr); // Create a new Set with the current values
		blog?.map(({ tags }) => {
			tags?.forEach((e) => {
				if (newTagsArr.size > 8) {
					return;
				}
				newTagsArr.add(e);
			});
			return 0;
		});
		setTagsArr(newTagsArr);
	};

	function scrollTo() {
		if (isDesktopOrLaptop) {
			scroller.scrollTo('scroll-to-element', {
				duration: 400,
				delay: 0,
				offset: -200,
				smooth: 'easeInOutQuart',
			});
		}else{
			window.scrollTo({
				top : 800,
				behavior: "smooth",
			})
		}
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newSearchTerm = event.target.value;
		setSearchTerm(newSearchTerm);
	};

	const performSearch = (searchTerm: string) => {
		setData(blog.filter(({ title }) => title?.toLowerCase().includes(searchTerm.toLowerCase())));
		setCategories('All');
		setTagValue('All');
		scrollTo();
	};

	const handlePagination = (e: any, value: SetStateAction<number>) => {
		setCurrentPage(value);
		scrollTo();
	};

	const renderData = useMemo(
		() =>
			currentPosts.map(({ tid, img, month, day, title, desc, name, time, pfp }, index) => {
				return <Post key={tid} img={img} month={month} day={day} title={title} desc={desc} name={name} time={time} pfp={pfp} />;
			}),
		[currentPosts, blog],
	);

	const renderRecentPosts = blog?.slice(0, 4).map(({ img, month, day, title, time }) => {
		return <Post_Small img={img} month={month} day={day} title={title} time={time} />;
	});

	const renderPopularTags = Array.from(tagsArr).map((tag) => {
		return (
			<button onClick={handelTags} className={tagValue === tag ? css['active_tag'] : ''}>
				{tag}
			</button>
		);
	});

	const renderSearchBar = (
		<Box className={css['search-bar']} sx={{ display: 'flex', alignItems: 'flex-end' }}>
			<input type='search' onChange={handleInputChange} value={searchTerm} placeholder={langauge === 'en' ? 'Search...' : 'Поиск...'} className={css['search-input']} />
			<img src={SearchIcon} className={css['search-icon']} alt='search-icon' />
		</Box>
	);

	//? effects

	useEffect(() => {
		getBlog();
	}, [getBlog, langauge]);

	useEffect(() => setData(blog), [blog, langauge]);

	useEffect(() => {
		setCurrentPosts(Data.slice(firstPostIndex, lastPostIndex));
		setPageCount(Math.ceil(Data.length / postsPerPage));
	}, [Data, currentPage]);

	useEffect(() => {
		updateTags();
	}, [Data]);

	useEffect(() => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		if (searchTerm.length !== 0) {
			const newTimeoutId = setTimeout(() => {
				performSearch(searchTerm);
			}, 1000);
			setTimeoutId(newTimeoutId);
		}
	}, [searchTerm]);

	return (
		<>
			{!isDesktopOrLaptop ? renderSearchBar : null}
			<div className={css['Blogs_wrapper'] + ' container'}>
				<main className={css['Blogs_main']}>
					{renderData && !(Data.length === 0) ? renderData : <h1>{t(`${base}h1_loading`)}</h1>}
					<Pagination count={pageCount} className={css['Blogs-pagination']} page={currentPage} onChange={handlePagination} sx={sxStyles} />
				</main>
				<Element name='scroll-to-element' className={css['Blogs_aside']}>
					{isDesktopOrLaptop ? renderSearchBar : null}
					<div className={css['Blogs_aside_Categories']}>
						<h4>{t(`${base}Categories`)}</h4>
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

					<div className={css['Blogs_aside_RecentPosts']}>
						<h4>{t(`${base}Posts`)}</h4>
						{renderRecentPosts}
					</div>

					<div className={css['Blogs_aside_PopularTags']}>
						<h4>{t(`${base}Tags`)}</h4>
						<span>{renderPopularTags}</span>
					</div>

					<div className={css['Blogs_aside_Advertisement']} style={{ background: `url(${image}) center/cover no-repeat` }}>
						<h4>{t(`${base}Ad`)}</h4>
						<p className='secondary_text mainColorText'>Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
						<Button text={t(`${base}Button`)} type='orange' />
					</div>
				</Element>
			</div>
		</>
	);
};

export default Blogs_main;
