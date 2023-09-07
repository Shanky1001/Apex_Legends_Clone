import React from "react";
import { route } from "types";

const Home = React.lazy(() => import("../pages/home/Home"));
const Maps = React.lazy(() => import("../pages/maps/Maps"));
const Legends = React.lazy(() => import("../pages/legends/Legends"));
const Legend = React.lazy(() => import("../pages/legends/[id]/Legend"));
const About = React.lazy(() => import("../pages/about/About"));

const PageNotFound = React.lazy(
	() => import("../pages/not-found/PageNotFound")
);

export const PUBLIC_ROUTES:route[] = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/maps",
		component: Maps,
	},
	{
		path: "/legends",
		component: Legends,
	},
	{
		path: "/legends/:id",
		component: Legend,
	},
	{
		path: "/about",
		component: About,
	},
	{
		path: "*",
		component: PageNotFound,
	},
];
