import React, { FC, useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import useBlogs from '../../hooks/useBlogs';
import scss from './CoursesBlogDetails.module.scss';
import LatestPosts from './../CoursesLanding/components/LatestPosts/LatestPosts';

import playIcon from './assets/playIcon.png';
import quotes from './assets/ic_quotes.svg';
import like from './assets/like.svg';
import share from './assets/share.svg';
import facebook from './assets/ic_social/facebook.svg';
import insta from './assets/ic_social/insta.svg';
import LinkedIn from './assets/ic_social/LinkedIn.svg';
import Twitter from './assets/ic_social/Twitter.svg';
import { PostType } from '../../types/types';
import { useTranslation } from 'react-i18next';

const arr_socialMediaData = [
	{
		img: facebook,
		text: 'Facebook',
		color: '#1877F2',
	},
	{
		img: insta,
		text: 'Instagram',
		color: '#E02D69',
	},
	{
		img: LinkedIn,
		text: 'LinkedIn',
		color: '#007EBB',
	},
	{
		img: Twitter,
		text: 'Twitter',
		color: '#00AAEC',
	},
];

const base = 'Blog--details.';

const CoursesBlogDetails: FC = () => {
	const { t } = useTranslation();
	const { blog, getBlog, isLoading, langauge } = useBlogs();
	const navigate = useNavigate();
	const { id } = useParams();
	const theElement = blog?.find((element) => element.tid === id);
	const index = blog?.findIndex((element) => element.tid === id);
	const [prev, setPrev] = useState<PostType>();
	const [next, setNext] = useState<PostType>();
	const { pathname } = useLocation();

	// Find the previous element
	const FindprevElement = () => {
		if (index !== undefined && index > 0) {
			setPrev(blog[index - 1]);
		} else if (index !== undefined && index === 0) {
			setPrev(blog[blog.length - 1]);
		}
	};

	// Find the next element
	let FindnextElement = () => {
		if (index !== undefined && index < blog.length - 1) {
			setNext(blog[index + 1]);
		} else if (index !== undefined && index === blog.length - 1) {
			setNext(blog[0]);
		}
	};

	console.log(prev);
	console.log(theElement);
	console.log(next);
	console.log(blog);
	
	//? effects
	const handleChangingLanguages = useMemo(() => {
		navigate('/Blog');
		return 0;
	}, [langauge]);

	useEffect(() => {
		getBlog();
	}, [getBlog]);

	useEffect(() => {
		FindprevElement();
		FindnextElement();
	}, [blog, pathname]);

	//? renders
	const BreadCrumbs = (
		<nav className={scss['breadCrumbs'] + ' container'}>
			<p className={scss['breadCrumbs--static']} onClick={() => navigate('/')}>
				{t(`${base}Home`)}
			</p>
			<span>&gt;</span>
			<p className={scss['breadCrumbs--static']} onClick={() => navigate('/')}>
				{t(`${base}Blog`)}
			</p>
			<span>&gt;</span>
			<p className={scss['breadCrumbs--title']}>{isLoading ? '...' : theElement?.title}</p>
		</nav>
	);

	const Blog__divider = <hr className={scss['Blog--divider']} />;

	const renderBlog_details_top = (
		<span className={scss.Blog_details_top}>
			<p className='secondary_text'>{theElement?.time}</p>
			<h2>{theElement?.title}</h2>
			<h5>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</h5>
		</span>
	);

	const renderBlog_video = (
		<div className={scss.Blog_video}>
			<div className={scss.Blog_video_bkg} style={{ background: `url(${theElement?.img}) center/cover no-repeat` }}>
				<button className={scss['Blog_video--player']}>
					<img src={playIcon} alt='playIcon' />
				</button>
				<span className={scss['Blog_video--notActive']}></span>
			</div>
		</div>
	);

	const Blog_details_teacherInfo = (
		<div className={scss.Blog_details_teacherInfo}>
			<main>
				<img src={theElement?.pfp} alt='profile_Picture' />
				<span>
					<p className='secondary_text mainColorText'>{theElement?.name}</p>
					<p className='secondary_small_text'>{`${theElement?.day} ${theElement?.month} 2023 12:35 PM`}</p>
				</span>
			</main>
			<aside>
				<img src={share} alt='share' />
				<img src={like} alt='Like' />
			</aside>
		</div>
	);

	const Blog_details_mainInfo = (
		<main className={scss.Blog_details_mainInfo}>
			<article>
				<span>
					<h1>P</h1>
					<p className='secondary_mid_text mainColorText'>ellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</p>
				</span>
				<p className='secondary_mid_text mainColorText'>Donec posuere vulputate arcu. Quisque rutrum.</p>
				<p className={'secondary_mid_text mainColorText'}>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
				<p className={'secondary_mid_text mainColorText'}>
					Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.
				</p>
			</article>

			<img className={scss['Blog_details_mainInfo--mainPhoto']} src={theElement?.img} alt='img' />

			<span className={scss['Blog_details_mainInfo--textMain']}>
				<h4>Curabitur suscipit suscipit tellus</h4>
				<p className='secondary_mid_text mainColorText'>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
			</span>

			<span className={scss['Blog_details_mainInfo--textMain']}>
				<h4>Nullam accumsan lorem in</h4>
				<p className='secondary_mid_text mainColorText'>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
			</span>

			<span className={scss['Blog_details_mainInfo--textSec']}>
				<img src={quotes} alt='quets icon' />
				<h5>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.</h5>
			</span>

			<img className={scss['Blog_details_mainInfo--mainPhoto']} src={theElement?.img} alt='img' />

			<p className='secondary_mid_text mainColorText'>
				Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
				<br />
				<br />
				Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.
				<br />
				<br />
				Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.
			</p>

			<div className={scss.Blog_details_mainInfo_TagsWrapper}>
				<span className={scss.Tags}>
					<p className='Subtitle2'>Tags:</p>
					{theElement?.tags?.map((e) => (
						<button className={scss['Blog_details_mainInfo_Tags--tag']}>{e}</button>
					))}
				</span>
				<span className={scss.Tags}>
					<p className='Subtitle2'>Share:</p>
					{arr_socialMediaData?.map(({ text, color, img }) => (
						<button className={scss['Blog_details_mainInfo_Tags--link']} style={{ color: color, border: `1px solid ${color}` }} onClick={() => window.open(`https://${text}.com`, '_blank')}>
							<img src={img} alt={text} />
							{text}
						</button>
					))}
				</span>
			</div>
		</main>
	);

	const Blog_details_bottom = (
		<div className={scss.Blog_details_bottom}>
			<span className={scss.Blog_details_bottom_Avatar}>
				<img src={theElement?.pfp} alt='profile_Picture' />
			</span>
			<main className={scss.Blog_details_bottom_Main}>
				<div className={scss['Blog_details_bottom_Main--top']}>
					<span>
						<h4>{theElement?.name}</h4>
						<p className='secondary_text' style={{ fontSize: 13 + 'px' }}>
							Curator of Marketing Course
						</p>
					</span>
					<aside>
						{arr_socialMediaData.map(({ text, img }) => (
							<img src={img} alt={text} onClick={() => window.open(`https://${text}.com`, '_blank')} />
						))}
					</aside>
				</div>
				<p className='secondary_text'>Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem..</p>
				<p className='secondary_small_text' style={{ opacity: 0.7 }}>
					Member since Mar 15, 2021
				</p>
			</main>
		</div>
	);

	const renderBlogNavigation = (
		<div className={scss.Blog_navigation}>
			<Link to={`/Blog/details/${prev?.tid}`}>
				<div className={scss.Blog_Navigation_prev}>
					<svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M7.5 12.7998L15 5.2998L16.05 6.3498L9.6 12.7998L16.05 19.2498L15 20.2998L7.5 12.7998Z' fill='#919EAB' />
					</svg>
					<img src={prev?.pfp} alt='profilePhoto' />
					<span>
						<p className='secondary_small_text'>{t(`${base}prev`)}</p>
						<p className='Subtitle2'>{prev?.title}</p>
					</span>
				</div>
			</Link>

			<Link to={`/Blog/details/${next?.tid}`}>
				<div className={scss.Blog_Navigation_next}>
					<span>
						<p className='secondary_small_text'>{t(`${base}next`)}</p>
						<p className='Subtitle2'>{next?.title}</p>
					</span>

					<img src={next?.pfp} alt='profilePhoto' />

					<svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M16.5 12.7998L9 5.2998L7.95 6.3498L14.4 12.7998L7.95 19.2498L9 20.2998L16.5 12.7998Z' fill='#919EAB' />
					</svg>
				</div>
			</Link>
		</div>
	);

	return (
		<section className={scss.Blog}>
			{BreadCrumbs}

			{renderBlog_video}

			<div className={scss.Blog_details}>
				{renderBlog_details_top}

				{Blog__divider}

				{Blog_details_teacherInfo}

				{Blog__divider}

				{Blog_details_mainInfo}

				{Blog__divider}

				{Blog_details_bottom}

				{Blog__divider}
			</div>

			{renderBlogNavigation}
			<LatestPosts />
		</section>
	);
};

export default CoursesBlogDetails;
