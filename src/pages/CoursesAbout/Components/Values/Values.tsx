import { FC } from 'react';
import css from './Values.module.scss';
import curve from '../../assets/icon/ic_3D_curve_auto_colon.svg';
import location from '../../assets/icon/ic_airport_location.svg';
import bot from '../../assets/icon/ic_chat_bot.svg';
import event from '../../assets/icon/ic_event.svg';
import { useTranslation } from 'react-i18next';

const Values: FC = () => {
	const { t } = useTranslation();
	const base = 'AboutUsPage.Values.';

	return (
		<section className={css['Values'] + ' container'}>
			<div className={css['Values_top']}>
				<h2> {t(`${base}h2`)}</h2>
				<p className='secondary_mid_text'>Etiam ultricies nisi vel augue. Suspendisse potenti. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Phasellus viverra nulla ut metus varius laoreet.</p>
			</div>
			<main className={css['Values_cards']}>
				<span className={css['card']}>
					<img src={curve} alt='curve' />
					<h5> {t(`${base}cards.h5_1`)}</h5>
					<p className='secondary_mid_text'>Aenean urna dictum adipiscing nec, cras quisque.</p>
				</span>

				<span className={css['card']}>
					<img src={bot} alt='bot' />
					<h5>{t(`${base}cards.h5_2`)}</h5>
					<p className='secondary_mid_text'>Aenean urna dictum adipiscing nec, cras quisque.</p>
				</span>

				<span className={css['card']}>
					<img src={location} alt='location' />
					<h5>{t(`${base}cards.h5_3`)}</h5>
					<p className='secondary_mid_text'>Aenean urna dictum adipiscing nec, cras quisque.</p>
				</span>

				<span className={css['card']}>
					<img src={event} alt='event' />
					<h5>{t(`${base}cards.h5_4`)}</h5>
					<p className='secondary_mid_text'>Aenean urna dictum adipiscing nec, cras quisque.</p>
				</span>
			</main>
		</section>
	);
};

export default Values;
