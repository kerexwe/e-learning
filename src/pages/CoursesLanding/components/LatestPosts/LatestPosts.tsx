import React, { FC } from 'react';
import css from './LatestPosts.module.scss';
import { Post, Post_Small } from '../../../../components/Post/Post';
import { PostType } from './../../../../types/types';
import img from './assets/IMG.svg';
import img_1 from './assets/IMG-1.svg';
import img_2 from './assets/IMG-2.svg';
import pfp from './assets/pfp.svg';
import pfp1 from './assets/pfp1.svg';
import pfp2 from './assets/pfp2.svg';
import MediaQuery from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const arr_LatestPosts = [
	{
		img: img,
		month: 'Jul',
		day: 12,
		title: 'The 7 Best Things About Event',
		desc: 'Moment in the life of any aspiring astronomer of that it is time to.',
		name: 'Arlene McCoy',
		time: '8 min read',
		pfp: pfp,
	},
	{
		img: img_1,
		month: 'Sep',
		day: 24,
		title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
		desc: 'Moment in the life of any aspiring astronomer of that it is time to.',
		name: 'Cody Fisher',
		time: '8 min read',
		pfp: pfp1,
	},
	{
		img: img_2,
		month: 'Dec',
		day: 29,
		title: "Thinking About Event? 7 Reasons Why It's ...",
		desc: 'Moment in the life of any aspiring astronomer of that it is time to.',
		name: 'Marvin McKinney',
		time: '8 min read',
		pfp: pfp2,
	},
] as Array<PostType>;

const base = 'Landing.latestPosts.';
const LatestPosts: FC = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<>
			<section className={css.wrapper + ' container'}>
				<div className={css.top}>
					<h2>{t(`${base}h2`)}</h2>
					<MediaQuery maxWidth={678}>
						<div className={css.cards}>
							{arr_LatestPosts.map(({ img, month, day, title, desc, name, time, pfp }) => {
								// eslint-disable-next-line react/jsx-pascal-case
								return <Post_Small img={img} month={month} day={day} title={title} desc={desc} name={name} time={time} pfp={pfp} />;
							})}
						</div>
					</MediaQuery>
					<button onClick={() => navigate('/Blog')}>
						{t(`${base}button`)}
						<svg width='18' height='11' viewBox='0 0 18 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M17.25 5.4082L12.4375 0.595703L11.4654 1.56783L14.6183 4.7207H0.75V6.0957H14.6183L11.4654 9.24858L12.4375 10.2207L17.25 5.4082Z' fill='#FA541C' />
						</svg>
					</button>
				</div>
				<MediaQuery minWidth={679}>
					<div className={css.cards}>
						{arr_LatestPosts.map(({ img, month, day, title, desc, name, time, pfp }) => {
							return <Post img={img} month={month} day={day} title={title} desc={desc} name={name} time={time} pfp={pfp} />;
						})}
					</div>
				</MediaQuery>
			</section>
		</>
	);
};

export default LatestPosts;
