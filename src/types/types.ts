import { MouseEventHandler, ReactNode } from 'react';
export interface ThemeType {
	themeDark: boolean;
}

export interface ButtonProps {
	children?: ReactNode;
	text: React.ReactNode | string;
	className?: string;
	type?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface PostType {
	tid?: string;
	category?:string;
	img: string;
	month: string;
	day: number;
	title: string;
	desc: string;
	name: string;
	time: string;
	pfp: string;
	tags?: Array<string>;
}
