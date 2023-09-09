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

export interface dropState {
	about: boolean;
	modes: boolean;
	community: boolean;
	compete: boolean;
	social: boolean;
}

// Extras
export interface svgImage {
	className: string;
}