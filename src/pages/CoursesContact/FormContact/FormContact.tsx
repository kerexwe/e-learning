import React, { FC } from 'react';
import scss from './FormContact.module.scss';
import { useTranslation } from 'react-i18next';
import Button from './../../../components/Button/Button';
import img from '../assets/illustration_courses_contact.png';

const FormContact: FC = () => {
	const base = 'ContactPage.form.';

	const { t } = useTranslation();

	return (
		<section className={scss['Wrapper'] + ' container'}>
			<img className={scss['Wrapper--illustration']} src={img} alt='illustration' />

			<form
				className={scss['Wrapper__form']}
				onSubmit={(e) => {
					e.preventDefault();
				}}>
        <div className={scss['Wrapper__form--header']}>
          <h3>{t(`${base}h`)}</h3>
          <p className='secondary_text'>{t(`${base}p`)}</p>
        </div>
				<input className={scss['Wrapper__form--inputBaisc']} type='text' name='Name' id='Name' placeholder={t(`${base}Name`) || 'undefined'} required/>
				<input className={scss['Wrapper__form--inputBaisc']} type='email' name='Email' id='Email' placeholder={t(`${base}Email`) || 'undefined'} required/>
				<input className={scss['Wrapper__form--inputBaisc']} type='text' name='Subject' id='Subject' placeholder={t(`${base}Subject`) || 'undefined'} required/>
				<textarea className={scss['Wrapper__form--textArea']} name='Message' id='Message' placeholder={t(`${base}Message`) || 'undefined'} required/>
				<Button className={scss['Wrapper__form--submit']} text={t(`${base}Send Message`)} type='orange' />
			</form>
		</section>
	);
};

export default FormContact;
