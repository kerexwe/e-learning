import { FC } from 'react';
import css from './Main.module.scss';

import svg from './assets/main.svg';
import arrow from './assets/Arrow-main.svg';
import play from './assets/play.svg';
import { t } from 'i18next';

const Main: FC = () => {
	return (
		<section className={`${css.section} container`}>
			<div className={css.content}>
				<h1>
					Free <span className={css.gray}>Online</span> <span className={css.orange}>Courses</span> From The Experts
				</h1>
				<p className='secondary_mid_text'>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. </p>
				<span className={css.buttons}>
					<button>
						{t('Landing.Main.Button')} <img src={arrow} alt='arrow' />
					</button>
					<h6>
						<button>
							<img src={play} alt='play' />
						</button>
						Watch Video
					</h6>
				</span>
				<hr />
				<div className={css.info}>
                    <span>
                        <h3>14k+</h3>
                        <p className='secondary_mid_text'>Learners</p>
                    </span>
                    <span>
                        <h3>1,05k+</h3>
                        <p className='secondary_mid_text'>Courses</p>
                    </span>
                    <span>
                        <h3>59k+</h3>
                        <p className='secondary_mid_text'>Graduates</p>
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
