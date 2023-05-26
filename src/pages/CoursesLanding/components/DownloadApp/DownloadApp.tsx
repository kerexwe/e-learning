import React, { FC } from 'react';
import css from './DownloadApp.module.scss';
import mockUp from './assets/mock.svg';
import AppStore from './assets/AppStore.svg';
import PlayStore from './assets/PlayStore.svg';
import qr from './assets/qr.svg';
import qr_dark from './assets/qr_dark.svg';
import { AppSelector } from '../../../../redux';
import { useTranslation } from 'react-i18next';


const base = "Landing.DownloadApp."
const DownloadApp: FC = () => {
    const {t} = useTranslation();

    const themeDark = AppSelector((s) => s.themeDark)
	return (
		<section className={`${css.wrapper} container`}>
			<div className={css.content}>
				<article>
					<h2>{t(`${base}h2`)}</h2> <p className='secondary_mid_text'>{t(`${base}p`)}</p>
				</article>
				<div className={css.downloading_info}>
					<span>
						<img src={themeDark ? qr_dark : qr} alt='QR' />
						<h6>{t(`${base}h6`)}</h6>
					</span>
                    <hr className='divider' />
					<span className={css.storesButtons}>
						<a target='_blank' href='https://www.apple.com/kg/app-store/' rel='noreferrer'>
							<img src={AppStore} alt='AppStore' />
						</a>
						<a target='_blank' href='https://play.google.com/store/games?hl=en&gl=US&pli=1' rel='noreferrer'>
							<img src={PlayStore} alt='PlayStore' />
						</a>
					</span>
				</div>
			</div>
			<div className={css.mockUp}>
				<img src={mockUp} alt='' />
			</div>
		</section>
	);
};

export default DownloadApp;
