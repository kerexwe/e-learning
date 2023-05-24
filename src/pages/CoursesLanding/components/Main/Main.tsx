import { FC } from 'react';
import css from './Main.module.scss';

import svg from './assets/main.svg';
import arrow from './assets/Arrow-main.svg';
import play from './assets/play.svg';
import { useTranslation } from 'react-i18next';

const base = "Landing.Main."

const Main: FC = () => {
	const { t } = useTranslation();

	return (
		<section className={`${css.section} container`}>
			<div className={css.content}>
				<h1>
				{t(`${base}free`)} <span className={css.gray}>{t(`${base}Online`)}</span> <span className={css.orange}>{t(`${base}Courses`)}</span> {t(`${base}From The Experts`)} 
				</h1>
				<p className='secondary_mid_text'>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. </p>
				<span className={css.buttons}>
					<button>
						{t(`${base}Button`)} <img src={arrow} alt='arrow' />
					</button>
					<h6>
						<button>
							<img src={play} alt='play' />
						</button>
						{t(`${base}WatchVideo`)}
					</h6>
				</span>
				<hr />
				<div className={css.info}>
                    <span>
                        <h3>14k+</h3>
                        <p className='secondary_mid_text'>{t(`${base}Learners`)}</p>
                    </span>
                    <span>
                        <h3>1,05k+</h3>
                        <p className='secondary_mid_text'>{t(`${base}Courses_1`)}</p>
                    </span>
                    <span>
                        <h3>59k+</h3>
                        <p className='secondary_mid_text'>{t(`${base}Graduates`)}</p>
                    </span>
                </div>
			</div>

			<span className={css.img}>
				<img src={svg} alt='illustration' />
			</span>
		</section>
	);
};

export default Main;
