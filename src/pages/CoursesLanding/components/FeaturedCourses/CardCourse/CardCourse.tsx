import React from 'react';
import css from './CardCourse.module.scss';

import pfp from '../assets/pfp.svg';
import star from '../assets/star.svg';
import clock from '../assets/ic_clock.svg';
import level from '../assets/ic_skill_level_intermediate.svg';

interface CardCoursesType {
	img: string;
	Category: string;
	Price: number;
	discount?: number;
	title: string;
	teacher: string;
	teachersCount?: number;
}
const CardCourse: React.FC<CardCoursesType> = ({ img, Category, Price, discount, title, teacher, teachersCount }) => {
	return (
		<div className={`${css.card_wrapper}`}>
			<div className={css.card_image} style={{ background: `url(${img}) center/cover no-repeat` }}></div>

			<div className={css.card_content}>
				<span className={css.card_content_top}>
					<p className='OrangeText'>{Category}</p>
					<span className={css.priceTag}>
						<h4 className={discount ? css.discount : null}>${Price}</h4> {discount ? <h4>${discount}</h4> : null}
					</span>
				</span>

				<h6>{title}</h6>

				<span className={css.card_content_rating}>
					<span>
						<img src={star} alt='star' />
						<h6>4.8</h6>
						<p className='secondary_text'>(1,089)</p>
					</span>
					<hr />
					<span>
						<p className='Subtitle2'>180k</p>
						<p className='mainColorText secondary_text'> students</p>
					</span>
				</span>

				<span className={css.card_content_teacherInfo}>
					<img src={pfp} alt='pfp' />
					<p className='secondary_text mainColorText'>{teacher}</p>
				</span>
			</div>

			<hr className='divider' />
			<div className={css.card_info}>
				<span>
					<img src={clock} alt='clock' />
					<p className='secondary_text'>100 hours</p>
				</span>
				<span>
					<img src={level} alt='clock' />
					<p className='secondary_text'>Beginner</p>
				</span>
			</div>
		</div>
	);
};

export default CardCourse;
