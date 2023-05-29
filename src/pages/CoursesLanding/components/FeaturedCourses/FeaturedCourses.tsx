import React, { FC } from 'react';
import './FeaturedCourses.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, SwiperOptions } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import next from './assets/next.svg';
import back from './assets/Back.svg';
import CardCourse from './CardCourse/CardCourse';

import img from './assets/IMG.svg';
import img_1 from './assets/IMG-1.svg';
import img_2 from './assets/IMG-2.svg';

const dataArr = [
	{
		img: img,
		Category: 'Management',
		Price: 39,
		title: `Don't Waste Time! 7 Facts Until You Reach Your Event`,
		teacher: 'Bessie Cooper',
	},
	{
		img: img_1,
		Category: 'Management',
		Price: 99,
		title: `The 7 Most Successful Event Companies In Region`,
		teacher: 'Annette Black',
	},
	{
		img: img_2,
		Category: 'Management',
		Price: 99,
		discount: 59,
		title: `Think Your Event Is Safe? 7 Ways You Can Lose It Today`,
		teacher: 'Brooklyn Simmons',
		teachersCount: 10,
	},
	{
		img: img_2,
		Category: 'Management',
		Price: 99,
		discount: 59,
		title: `Think Your Event Is Safe? 7 Ways You Can Lose It Today`,
		teacher: 'Brooklyn Simmons',
		teachersCount: 10,
	},
];

const FeaturedCourses: FC = () => {
	const breakpoints = {
		1: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		570: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1100: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	};

	return (
		<section className={'FeaturedCourses container'}>
			<div className={'FeaturedCourses_title'}>
				<h2>Featured Courses</h2>
				<p className='secondary_mid_text'>Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet iaculis.</p>
			</div>
			<div className='FeaturedCourses_swiper'>
				<Swiper
					slidesPerView={3}
					spaceBetween={50}
					grabCursor={true}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
						//@ts-ignore
						clickable: true,
					}}
					modules={[Navigation]}
					className='swiper_container'
					breakpoints={breakpoints}>
					{dataArr.map(({ img, Category, Price, discount, title, teacher, teachersCount }) => {
						return (
							<SwiperSlide>
								<CardCourse img={img} Category={Category} Price={Price} discount={discount} title={title} teacher={teacher} teachersCount={teachersCount} />
							</SwiperSlide>
						);
					})}

					<div className='slider-controler'>
						<div className='swiper-button-prev slider-arrow'>
							<img src={back} alt='backArrow' />
						</div>
						<div className='swiper-button-next slider-arrow'>
							<img src={next} alt='nextArrow' />
						</div>
					</div>
				</Swiper>
			</div>
		</section>
	);
};

export default FeaturedCourses;
