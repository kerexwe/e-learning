import { FC } from 'react';
import { AppSelector } from '../../../../redux';
import css from './Teachers.module.scss';
import img from '../../assets/Teachers/IMG.svg';
import img1 from '../../assets/Teachers/IMG-1.svg';
import img2 from '../../assets/Teachers/IMG-2.svg';
import img3 from '../../assets/Teachers/IMG-3.svg';
import img4 from '../../assets/Teachers/IMG-4.svg';
import img5 from '../../assets/Teachers/IMG-5.svg';
import img6 from '../../assets/Teachers/IMG-6.svg';
import img7 from '../../assets/Teachers/IMG-7.svg';

import facebook from '../../assets/facebook.svg';
import insta from '../../assets/insta.svg';
import linkedin from '../../assets/linkedin.svg';
import tweeter from '../../assets/tweeter.svg';
import { useTranslation } from 'react-i18next';

const team_arr = [
	{
		name: 'Eleanor Pena',
		job: 'Founder and CEO',
		img: img,
	},
	{
		name: 'Sofia Nguyen',
		job: 'Analyst and Marketing specialist',
		img: img1,
	},
	{
		name: 'Lucas Sullivan',
		job: 'PM, Curator of Management Course',
		img: img2,
	},
	{
		name: 'Ava Anderson',
		job: 'Curator of HR & Recruiting Course',
		img: img3,
	},
	{
		name: 'Benjamin Peterson',
		job: 'Founder and Program Director',
		img: img4,
	},
	{
		name: 'Harper Taylor',
		job: 'Marketer, Curator of Marketing Course',
		img: img5,
	},
	{
		name: 'Ethan Roberts',
		job: 'Marketer, Curator of Marketing Course',
		img: img6,
	},
	{
		name: 'Mia Wilson',
		job: 'UX Designer, Curator of Design Course',
		img: img7,
	},
];
const team_arr_ru = [
	{
		name: 'Элеонора Пенья',
		job: 'Основатель и генеральный директор',
		img: img,
	},
	{
		name: 'София Нгуен',
		job: 'Аналитик и специалист по маркетингу',
		img: img1,
	},
	{
		name: 'Лукас Салливан',
		job: 'Руководитель проекта, куратор курса по управлению',
		img: img2,
	},
	{
		name: 'Ава Андерсон',
		job: 'Куратор курса по HR и подбору персонала',
		img: img3,
	},
	{
		name: 'Бенджамин Питерсон',
		job: 'Основатель и директор программы',
		img: img4,
	},
	{
		name: 'Харпер Тейлор',
		job: 'Маркетолог, куратор курса по маркетингу',
		img: img5,
	},
	{
		name: 'Итан Робертс',
		job: 'Маркетолог, куратор курса по маркетингу',
		img: img6,
	},
	{
		name: 'Миа Уилсон',
		job: 'Дизайнер пользовательского опыта, куратор курса по дизайну',
		img: img7,
	},
];

const Teachers: FC = () => {
	const themeDark = AppSelector((s) => s.themeDark);
	const { t, i18n } = useTranslation();
	const language = i18n.resolvedLanguage;

	const cardStyles: any = {
		'--card-background': themeDark ? '#212b36' : 'white', // Set the CSS variable value
	};

	const renderCards = (language === 'ru' ? team_arr_ru : team_arr).map(({ name, job, img }) => {
		return (
			<div className={`${css['card']}`} style={cardStyles}>
				<span className={css['card_title']}>
					<h6>{name}</h6>
					<p className=''>{job}</p>
				</span>
				<span className={css['card_img']} style={{ background: `url(${img}) center/cover no-repeat` }}>
					{/* <img src={img} alt={name} /> */}
				</span>
				<span className={css['card--overlay']}>
					<span className={css.icons}>
						<img className={css.icon} src={facebook} alt='facebook' />
						<img className={css.icon} src={insta} alt='instagram' />
						<img className={css.icon} src={linkedin} alt='linkedin' />
						<img className={css.icon} src={tweeter} alt='tweeter' />
					</span>
				</span>
			</div>
		);
	});

	return (
		<section className={css['Teachers'] + ' container'}>
			<div className={css['Teachers_title']}>
				<h2>{t('AboutUsPage.team.h2')}</h2>
			</div>
			<main className={css['Teachers_cards']}>{renderCards}</main>
		</section>
	);
};

export default Teachers;
