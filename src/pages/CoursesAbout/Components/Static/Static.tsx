import { FC } from 'react';
import css from './Static.module.scss';
import img from '../../assets/img_static.svg';
import { AppSelector } from '../../../../redux';
import { useTranslation } from 'react-i18next';

const Static: FC = () => {
	const themeDark = AppSelector((state) => state.themeDark);
  const {t} = useTranslation()
	const base = "AboutUsPage.Static."

	return (
		<section className={css['staticWrapper'] + ' container'}>
			<div className={css['staticWrapper_top']}>
				<p className='secondary_small_text OrangeText'>Nullam accumsan lorem in dui.</p>
				<article>
					<h3>{t(`${base}h3`)}</h3>
					<p className='secondary_mid_text'>{t(`${base}p`)}</p>
				</article>
			</div>
			<main className={css['staticWrapper_main']}>
				<div className={css['main_cards']}>
					<span className={css['card']}>
						<h4 className={themeDark ? css['card_tag--DarkGray'] : css['card_tag--gray']}>{t(`${base}cards.tag_first`)}</h4>
						<h2>14k+</h2>
						<p className='secondary_mid_text'>Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
					</span>
					<span className={css['card']}>
						<h4 className={themeDark ? css['card_tag--DarkGray'] : css['card_tag--gray']}>{t(`${base}cards.tag_sec`)}</h4>
						<h2>1.05k+</h2>
						<p className='secondary_mid_text'>Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
					</span>
					<span className={css['card']}>
						<h4 className={themeDark ? css['card_tag--DarkGray'] : css['card_tag--gray']}>{t(`${base}cards.tag_thd`)}</h4>
						<h2>52k+</h2>
						<p className='secondary_mid_text'>Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
					</span>
				</div>
				<aside className={css['main_image']}>
					<img src={img} alt='girl_Photo' />
				</aside>
			</main>
		</section>
	);
};

export default Static;
