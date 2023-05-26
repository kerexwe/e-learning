import React, { FC } from 'react';
import css from './DownloadApp.module.scss';
import mockUp from './assets/mock.svg';
import AppStore from './assets/AppStore.svg';
import PlayStore from './assets/PlayStore.svg';
import qr from './assets/qr.svg';
import qr_dark from './assets/qr_dark.svg';
import { AppSelector } from '../../../../redux';

const DownloadApp: FC = () => {
    const themeDark = AppSelector((s) => s.themeDark)
	return (
		<section className={`${css.wrapper} container`}>
			<div className={css.content}>
				<article>
					<h2>DownloadApp</h2> <p className='secondary_mid_text'>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>
				</article>
				<div className={css.downloading_info}>
					<span>
						<img src={themeDark ? qr_dark : qr} alt='QR' />
						<h6>Scan QR code to install on your device</h6>
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
