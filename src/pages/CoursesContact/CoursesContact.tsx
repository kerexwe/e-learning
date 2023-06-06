import React from 'react';
import Map from './Map/Map';
import scss from './CoursesContact.module.scss';

import email from './assets/ic_email.svg';
import mobile from './assets/ic_mobile.svg';
import pin from './assets/ic_pin.svg';
import email_dark from './assets/ic_email_dark.svg';
import mobile_dark from './assets/ic_mobile_dark.svg';
import pin_dark from './assets/ic_pin_dark.svg';

import facebook from './assets/Icons/Facebook.svg';
import insta from './assets/Icons/insta.svg';
import linkedIn from './assets/Icons/linkedIn.svg';
import twitter from './assets/Icons/twitter.svg';
import facebook_dark from './assets/Icons/Facebook_dark.svg';
import insta_dark from './assets/Icons/insta_dark.svg';
import linkedIn_dark from './assets/Icons/linkedIn_dark.svg';
import twitter_dark from './assets/Icons/twitter_dark.svg';
import { AppSelector } from '../../redux';
import { useTranslation } from 'react-i18next';

const base = 'ContactPage.';

const CoursesContact: React.FC = () => {
	const themeDark = AppSelector((s) => s.themeDark);
	const { t } = useTranslation();

	const iconsArr = [
		{ icon: themeDark ? facebook : facebook_dark, name: 'facebook' },
		{ icon: themeDark ? insta : insta_dark, name: 'instagram' },
		{ icon: themeDark ? linkedIn : linkedIn_dark, name: 'linkedIn' },
		{ icon: themeDark ? twitter : twitter_dark, name: 'twitter' },
	];

	return (
		<section className={scss['map'] + ' container'}>
			<article className={scss['map__info']}>
				<span className={scss['map__info--title']}>
					<h2>{t(`${base}h2`)}</h2>
				</span>

				<div className={scss['map__info__Wrapper']}>
					<span className={scss['map__info__Wrapper--Information']}>
						<label>
							<img src={themeDark ? email_dark : email} alt='email' />
							<p className='Subtitle2'>{t(`${base}email`)}</p>
						</label>
						<a href='mailto:debbie.baker@example.com' rel='noreferrer' target='_blank'>
							debbie.baker@example.com
						</a>
					</span>

					<span className={scss['map__info__Wrapper--Information']}>
						<label>
							<img src={themeDark ? mobile_dark : mobile} alt='mobile' />
							<p className='Subtitle2'>{t(`${base}Phone`)}</p>
						</label>
						<a href='tel:(907) 555-0101' rel='noreferrer'>
							(907) 555-0101
						</a>
					</span>

					<span className={scss['map__info__Wrapper--Information']}>
						<label>
							<img src={themeDark ? pin_dark : pin} alt='pin' />
							<p className='Subtitle2'>{t(`${base}Address`)}</p>
						</label>
						<a href='!#' onClick={(e) => e.preventDefault()}>
							{t(`${base}Address--info`)}
						</a>
					</span>
					<hr className='divider' />

					<div className={scss['map__info__Wrapper__Socail']}>
						<p className='secondary_small_text mainColorText'>{t(`${base}Follow`)}</p>
						<span>
							{iconsArr.map((e) => (
								<img key={e.name} style={{ cursor: 'pointer' }} src={e.icon} alt={e.name} onClick={() => window.open(`https://${e.name}.com`, '_blank')} />
							))}
						</span>
					</div>
				</div>
			</article>

			<div className={scss['map--wrapper']}>
				<Map />
			</div>
		</section>
	);
};

export default CoursesContact;
