import { FC } from 'react';
import css from './WeWorkWith.module.scss';
import slack from './assets/brand_slack.svg';
import airbnb from './assets/brand_airbnb.svg';
import heroku from './assets/brand_heroku.svg';
import netflix from './assets/brand_netflix.svg';
import spotify from './assets/brand_spotify.svg';
import vimeo from './assets/brand_vimeo.svg';
import slack_light from './assets/brand_slack_light.svg';
import airbnb_light from './assets/brand_airbnb_light.svg';
import heroku_light from './assets/brand_heroku_light.svg';
import netflix_light from './assets/brand_netflix_light.svg';
import spotify_light from './assets/brand_spotify_light.svg';
import vimeo_light from './assets/brand_vimeo_light.svg';
import { AppSelector } from '../../../../redux';
import { useTranslation } from 'react-i18next';

const base: string = 'Landing.OurWork';

const WeWorkWith: FC = () => {
	const { t } = useTranslation();
	const themeDark = AppSelector((state) => state.themeDark);

	const arr_imgs: Array<string> = themeDark ? [spotify_light, slack_light, netflix_light, heroku_light, vimeo_light, airbnb_light] : [spotify, slack, netflix, heroku, vimeo, airbnb];

	return (
		<section className={css.wrapper + " container"}>
			<span className={css.title}>
				<h2>{t(`${base}.h2`)}</h2>
				<p className='secondary_mid_text'>{t(`${base}.p`)}</p>
			</span>
			<div className={css.icons}>
				{arr_imgs.map((e) => {
					return <img src={e} alt={`brand icon`} />;
				})}
			</div>
		</section>
	);
};

export default WeWorkWith;
