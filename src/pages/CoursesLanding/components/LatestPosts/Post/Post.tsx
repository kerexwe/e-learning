import { FC } from 'react';
import css from './Post.module.scss';
import { PostType } from '../../../../../types/types';

export const Post: FC<PostType> = ({ img, month, day, h5, p, name, time, pfp }) => {
	return (
		<div className={css.card}>
			<div className={css.card_img} style={{ background: `url(${img}) center/cover no-repeat` }}></div>
			<article className={css.content}>
				<div className={css.date}>
					<h6 className='Subtitle2'>{month}</h6>
					<hr />
					<h3>{day}</h3>
				</div>
				<div className={css.info}>
					<span className={css.top}>
						<h5>{h5}</h5>
						<p className='secondary_text'>{p}</p>
					</span>
					<span className={css.user}>
						<img src={pfp} alt='pfp' />
						<span>
							<p className='secondary_text mainColorText'>{name}</p>
							<p className='secondary_small_text'>{time}</p>
						</span>
					</span>
				</div>
			</article>
		</div>
	);
};

export const Post_Small: FC<PostType> = ({ img, month, day, h5, p, name, time, pfp }) => {
	return (
		<>
			<div className={css.card_small}>
				<div className={css.card_img_small} style={{ background: `url(${img}) center/cover no-repeat` }}></div>
				<div className={css.card_small__content}>
					<h6>{h5}</h6>
					<span>
						<p style={{fontWeight: 400}} className='secondary_small_text'>{`${month} ${day}, 2023 • ${time}`}</p>
					</span>
				</div>
			</div>
		</>
	);
};
