import { FC } from 'react';
import css from './Post.module.scss';
import { PostType } from '../../types/types';

export const Post: FC<PostType> = ({ img, month, day, title, desc, name, time, pfp }) => {
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
						<h5>{title}</h5>
						<p className='secondary_text'>{desc}</p>
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

export const Post_Small: FC<PostType> = ({ img, month, day, title, desc, name, time, pfp }) => {
	return (
		<>
			<div className={css.card_small}>
				<div className={css.card_img_small} style={{ background: `url(${img}) center/cover no-repeat` }}></div>
				<div className={css.card_small__content}>
					<h6>{title}</h6>
					<span>
						<p style={{ fontWeight: 400 }} className='secondary_small_text'>{`${month} ${day}, 2023 • ${time}`}</p>
					</span>
				</div>
			</div>
		</>
	);
};

export const Post_Big: FC<PostType> = ({ img, month, day, title, desc, name, time, pfp }) => {
	return (
		<>
			<div className={css.card_big + " container"}>
				<div className={css.card_big_img} style={{ background: `url(${img}) center/cover no-repeat` }}></div>
				<div className={css.card_big_content}>
					<main className={css.card_big_content_main}>
						<span>
							<p style={{ fontWeight: 400 }} className='secondary_small_text'>{`${month} ${day}, 2023 • ${time}`}</p>
						</span>
						<h3>{title}</h3>
						<p className='secondary_mid_text'>{desc}</p>
					</main>
					<span className={css.card_big_content_user}>
						<img src={pfp} alt='pfp' />
						<p className='secondary_text mainColorText'>{name}</p>
					</span>
				</div>
			</div>
		</>
	);
};
