import React, { FC } from 'react';
import illustration from '../../assets/illustration_AboutUsPage.svg';
import css from './Main.module.scss';
import Button from './../../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Main: FC = () => {
  const navigate = useNavigate()
	const {t} = useTranslation()
	const base = "AboutUsPage.Main."
	return (
		<section className={css['OnlineCoursesWrapper'] + " container"}>
			<main className={css['OnlineCoursesWrapper_main']}>
				<article>
					<h1>{t(`${base}h1`)}</h1>
          <p className='secondary_mid_text mainColorText'>Nunc nulla. Ut leo. Pellentesque commodo eros a enim. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.</p>
				</article>
				<Button text={t(`${base}button`)} type='orange' onClick={() => navigate('/Courses/list')} />
			</main>
			<aside className={css['OnlineCoursesWrapper_aside']}>
        <img src={illustration} alt="illustration" />
      </aside>
		</section>
	);
};

export default Main;
