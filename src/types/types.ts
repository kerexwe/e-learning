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
	img: string;
	month: string;
	day: number;
	h5: string;
	p: string;
	name: string;
	time: string;
	pfp: string;
}
