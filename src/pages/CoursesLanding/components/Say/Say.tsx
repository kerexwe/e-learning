import React, { FC } from 'react';
import Slider from 'react-slick';
import './Say.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import person1 from './assets/person1.svg';
import person2 from './assets/person2.svg';
import person3 from './assets/person3.svg';
import person4 from './assets/person4.svg';
import person5 from './assets/person5.svg';
import ic_quotes from './assets/ic_quotes.svg';
import prevButton from './assets/prevButton.svg';
import nextButton from './assets/nextButton.svg';

const comments = [
	{
		text: 'I had an amazing experience with this company. The staff were friendly and helpful, I would definitely recommend this company to anyone looking for a great experience.',
		img: person3,
		name: 'Jay james',
		prof: 'Writer',
	},
	{
		text: "I'm so glad I chose this company. They were professional and efficient, and they really took the time to understand my needs. I would definitely use them again.",
		img: person2,
		name: 'Niki Smith',
		prof: 'Teacher',
	},
	{
		text: 'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach. Truly professionals!',
		img: person1,
		name: 'Robert Fox',
		prof: 'Designer',
	},
	{
		text: 'I was really impressed with the service I received from this company. They were responsive to my needs. I would definitely recommend them to anyone looking for a great experience.',
		img: person4,
		name: 'Jack Williams',
		prof: 'Artist',
	},
	{
		text: "I'm so happy I chose this company. They were amazing! They went above and beyond to make sure I was happy, and I would definitely use them again.",
		img: person5,
		name: 'Ana Jones',
		prof: 'Engineer',
	},
];

function NextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<button className={className} style={style} onClick={onClick}>
			<img src={nextButton} alt='nextButton' />
		</button>
	);
}

function PrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<button className={className} style={style} onClick={onClick}>
			<img src={prevButton} alt='prevbutton' />
		</button>
	);
}

const Say: FC = () => {
	const settings = {
		customPaging: function (i: any) {
			console.log(i);
			return (
				<a>
					<img src={comments[i].img} alt={comments[i].name} />
					<h6>{comments[i].name}</h6>
					<p>{comments[i].prof}</p>
				</a>
			);
		},
		dotsClass: 'slick-dots slick-thumb',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 2560,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					nextArrow: <NextArrow />,
					prevArrow: <PrevArrow />,
				},
			},
			{
				breakpoint: 678,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};

	return (
		<div className={'saySection container'}>
			<h2>What Our Students Say</h2>
			<Slider {...settings}>
				{comments.map(({ text }) => (
					<div className='commentSlide'>
						<span>
							<img src={ic_quotes} alt='quote' />
						</span>
						<p>{text}</p>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Say;
