import MobileNav from "components/NavBar/MobileNav";
import { FC, ReactElement } from "react";

export interface SuspenseWrapperProps {
	children: ReactElement;
}
export interface LazyComponent {
	component: React.LazyExoticComponent<React.ComponentType<any>>;
}

export interface route {
	path: string;
	component: FC;
}

export interface about {
	name: string;
	link: string;
}

export interface social {
	name: string;
	href: string;
}

export interface free {
	name: string;
	href: string;
}

export interface mobileNav {
	menu: boolean;
	setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface heroComponent {
	play: boolean;
	setPlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface dropState {
	about: boolean;
	modes: boolean;
	community: boolean;
	compete: boolean;
	social: boolean;
}

export interface latestNews {
	image: string;
	header: string;
	message: string;
	date: string;
	href: string;
}

export interface battleRoyal {
	image: string;
	header: string;
	message: string;
}

export interface country {
	code: string;
	label: string;
	phone: string;
	suggested?: boolean;
}

export interface joinConversation {
	name: string;
	href: string;
}

export interface maps {
	name: string;
	link: string;
}

export interface mapDetails {
	name1:string,
	name2:string,
	map_img1:string,
	map_img2:string,
	details:string
}

// Extras
export interface svgImage {
	className: string;
}
