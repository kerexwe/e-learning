import css from './Footer.module.scss';
import messageDark from './assets/Message-dark.svg';
import messageLight from './assets/Message-light.svg';
import MapMarkerDark from './assets/Mapmarker-dark.svg';
import MapMarkerLight from './assets/Mapmarker-light.svg';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import logodark from './assets/Logo-dark.svg';
import logolight from './assets/Logo-light.svg';
import instaLight from './assets/insta.svg';
import instaDark from './assets/insta-dark.svg';
import LinkedInDark from './assets/linkedIn-dark.svg';
import LinkedInLight from './assets/LinkedIn.svg';
import FacebookLight from './assets/Facebook.svg';
import FacebookDark from './assets/facebook-dark.svg';
import tweeterDark from './assets/tweeter-dark.svg';
import tweeterLight from './assets/tweeter.svg';
import { AppSelector } from '../../redux';
import { FC } from 'react';

const Footer : FC = () => {
	const { t } = useTranslation();
	const themeDark = AppSelector((state) => state.themeDark);


	return (
		<footer className={`${css.footer}`}>

			<section className={`${css.infoSection} container`}>
				<div className={css.top}>
					<div className={css.main}>
						<img src={themeDark ? logodark : logolight} alt='' />
						<p className='secondary_text'>{t("footer.text")}</p>
						<span className={css.iconsContainer}>
							<img src={themeDark ? FacebookDark : FacebookLight} alt='' />
							<img src={themeDark ? instaDark : instaLight} alt='' />
							<img src={themeDark ? LinkedInDark : LinkedInLight} alt='' />
							<img src={themeDark ? tweeterDark : tweeterLight} alt='' />
						</span>
					</div>
					<div className={css.contacts}>
						<span>
							<img src={themeDark ? messageDark : messageLight} alt='' />
							<p className='secondary_text mainColorText'>info@example.com</p>
						</span>
						<span>
							<img src={themeDark ? MapMarkerDark : MapMarkerLight} alt='' />
							<p className='secondary_text mainColorText'>655 Schaefer Dale</p>
						</span>
					</div>
					<div className={css.form}>
						<form>
							<input type='email' className={css.input} placeholder={`${t('footer.email')}`} />
							<Button
								text={
									<svg width='7' height='12' viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path d='M6.4125 6.24902L0.7875 11.874L0 11.0865L4.8375 6.24902L0 1.41152L0.7875 0.624023L6.4125 6.24902Z' fill='white' />
									</svg>
								}
								type={'orange'}
							/>
						</form>
					</div>
				</div>

				<div className={css.bottom}>
					<p className='secondary_text'>© 2021. All rights reserved</p>
					<div>
						<a href='#/' className='secondary_text'>
							{t("footer.HelpCenter")}
						</a>
						<a href='#/' className='secondary_text'>
							{t("footer.Terms")}
							
						</a>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
