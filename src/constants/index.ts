import { Gun, Head, News1, News2, News3, Trophy } from "assets";
import {
	about,
	battleRoyal,
	country,
	free,
	joinConversation,
	latestNews,
	social,
} from "types";

const ABOUT: about[] = [
	{
		name: "About Apex Legends",
		link: "/about",
	},
	{
		name: "Legends ",
		link: "/legends",
	},
	{
		name: "Maps ",
		link: "/maps",
	},
	{
		name: "Lore Hub",
		link: "https://www.ea.com/games/apex-legends/lore-hub",
	},
	{
		name: "FAQ ",
		link: "https://www.ea.com/games/apex-legends/about/frequently-asked-questions",
	},
	{
		name: "PC Requirements",
		link: "https://www.ea.com/games/apex-legends/about/pc-system-requirements",
	},
	{
		name: "Credits",
		link: "https://www.ea.com/games/apex-legends/credits",
	},
	{
		name: "Accessibility",
		link: "https://www.ea.com/able/resources/apex-legends",
	},
];

const SOCIAL: social[] = [
	{
		name: "Twitter",
		href: "https://twitter.com/PlayApex",
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/playapex/",
	},
	{
		name: "Facebook",
		href: "https://www.facebook.com/playapex",
	},
	{
		name: "Youtube",
		href: "https://www.youtube.com/playapex",
	},
	{
		name: "Twitch",
		href: "https://www.twitch.tv/playapex",
	},
];

const FREE_DOWNLOAD: free[] = [
	{
		name: "The EA Apps ForWindows",
		href: "https://www.ea.com/games/apex-legends/buy/pc",
	},
	{
		name: "Steam on PC",
		href: "https://smarturl.it/apex-steam-unav",
	},
	{
		name: "PlayStation®4",
		href: "https://lnk.to/apex-legends-ps4",
	},
	{
		name: "PlayStation®5",
		href: "https://lnk.to/apex-legends-ps5",
	},
	{
		name: "Xbox",
		href: "https://www.microsoft.com/p/APEX-Legends/BV9ML45J2Q5V",
	},
	{
		name: "Nintendo Switch",
		href: "https://smarturl.it/apex-std-ed-switch",
	},
];

const COMPETE: any[] = [];

const ROLES: any[] = [
	{
		name: "All",
	},
	{
		name: "Assault",
	},
	{
		name: "Skirmisher",
	},
	{
		name: "Recon",
	},
	{
		name: "Controller",
	},
	{
		name: "Support",
	},
];

const LEGENDS: any[] = [
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-ash.png.adapt.crop16x9.png",
		name: "Ash",
		role: "Assault",
		nick_name: "Incisive Instigator",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/02/apex-legend-revenant-grid-tile.png.adapt.crop16x9.png",
		name: "Revenant",
		role: "Assault",
		nick_name: "",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/05/apex-grid-tile-legends-loba.png.adapt.crop16x9.png",
		name: "Loba",
		role: "Support",
		nick_name: "Translocating Thief",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-crypto.png.adapt.crop16x9.png",
		name: "Crypto",
		role: "Recon",
		nick_name: "Surveillance Expert",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wraith.png.adapt.crop16x9.png",
		name: "Wraith",
		role: "Skirmisher",
		nick_name: "",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/10/apex-grid-tile-legends-catalyst.png.adapt.crop16x9.png",
		name: "Catalyst",
		role: "Controller",
		nick_name: "Defensive Conjurer",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-caustic.png.adapt.crop16x9.png",
		name: "Caustic",
		role: "Controller",
		nick_name: "Toxic Trapper",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/seer-assets/apex-grid-tile-legends-seer.png.adapt.crop16x9.png",
		name: "Seer",
		role: "Recon",
		nick_name: "",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/01/apex-grid-tile-legends-maggie.png.adapt.crop16x9.png",
		name: "MadMaggie",
		role: "Assault",
		nick_name: "",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bangalore.png.adapt.crop16x9.png",
		name: "Bangalore",
		role: "Assault",
		nick_name: "Professional Soldier",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/01/apex-grid-tile-legends-fuse.png.adapt.crop16x9.png",
		name: "Fuse",
		role: "Assault",
		nick_name: "Bombastic Explosives Expert",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/horizon/apex-grid-tile-legends-horizon.png.adapt.crop16x9.png",
		name: "Horizon",
		role: "Skirmisher",
		nick_name: "Gravitational Manipulator",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-mirage.png.adapt.crop16x9.png",
		name: "Mirage",
		role: "Skirmisher",
		nick_name: "",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-octane.png.adapt.crop16x9.png",
		name: "Octane",
		role: "Skirmisher",
		nick_name: "",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-pathfinder.png.adapt.crop16x9.png",
		name: "Pathfinder",
		role: "Skirmisher",
		nick_name: "",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/04/apex-grid-tile-legends-valkyrie.png.adapt.crop16x9.png",
		name: "Valkyrie",
		role: "Skirmisher",
		nick_name: "",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/07/apex-grid-tile-legends-vantage.png.adapt.crop16x9.png",
		name: "Vantage",
		role: "Recon",
		nick_name: "",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bloodhound.png.adapt.crop16x9.png",
		name: "Bloodhound",
		role: "Recon",
		nick_name: "Technological Tracker",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/08/rampart/apex-grid-tile-legends-rampart.png.adapt.crop16x9.png",
		name: "Rampart",
		role: "Controller",
		nick_name: "",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wattson.png.adapt.crop16x9.png",
		name: "Wattson",
		role: "Controller",
		nick_name: "",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2022/05/apex-grid-tile-legends-newcastle.png.adapt.crop16x9.png",
		name: "Newcastle",
		role: "Support",
		nick_name: "",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-lifeline.png.adapt.crop16x9.png",
		name: "Lifeline",
		role: "Support",
		nick_name: "Combat Medic",
	},
	{
		img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-gibraltar.png.adapt.crop16x9.png",
		name: "Gibraltar",
		role: "Support",
		nick_name: "Shielded Fortress",
	},
];

const LATEST_NEWS: latestNews[] = [
	{
		image: News1 as string,
		header: "Apex Legends™: August 2023 Revenant Reborn Dev AMA",
		message: "Apex Legends™: August 2023 Revenant Reborn Dev AMA",
		date: "SEP 1,2023",
		href: "https://www.ea.com/games/apex-legends/news/august-2023-revenant-dev-ama",
	},
	{
		image: News2 as string,
		header: "Apex Legends™: August 2023 Lore Dev AMA",
		message: "Apex Legends™: August 2023 Lore Dev AMA",
		date: "Aug 11,2023",
		href: "https://www.ea.com/games/apex-legends/news/august-2023-lore-dev-ama",
	},
	{
		image: News3 as string,
		header: "Apex Legends™: Resurrection Patch Notes",
		message: "Apex Legends™: Resurrection Patch Notes",
		date: "Aug 7,2023",
		href: "https://www.ea.com/games/apex-legends/news/resurrection-patch-notes",
	},
];

const BATTLE_ROYAL: battleRoyal[] = [
	{
		image: Trophy as string,
		header: "Legendary Characters",
		message:
			"Explore a growing roster of powerful Legends, each with their own unique personality, strengths, and abilities.",
	},
	{
		image: Gun as string,
		header: "The Ultimate Squad",
		message:
			"Choose your Legend, team up, and combine your unique skills to be the last squad standing.",
	},
	{
		image: Head as string,
		header: "Strategic Combat",
		message:
			"Master an expanding assortment of powerful weapons, unique abilities, and game-changing equipment in a variety of environments and limited-time and permanent modes.",
	},
];

const COUNTRIES: country[] = [
	{
		code: "US",
		label: "United States",
		phone: "1",
		suggested: true,
	},
	{ code: "AD", label: "Andorra", phone: "376" },
	{
		code: "AE",
		label: "United Arab Emirates",
		phone: "971",
	},
	{ code: "AF", label: "Afghanistan", phone: "93" },
	{
		code: "AG",
		label: "Antigua and Barbuda",
		phone: "1-268",
	},
	{ code: "AI", label: "Anguilla", phone: "1-264" },
	{ code: "AL", label: "Albania", phone: "355" },
	{ code: "AM", label: "Armenia", phone: "374" },
	{ code: "AO", label: "Angola", phone: "244" },
	{ code: "AQ", label: "Antarctica", phone: "672" },
	{ code: "AR", label: "Argentina", phone: "54" },
	{ code: "AS", label: "American Samoa", phone: "1-684" },
	{ code: "AT", label: "Austria", phone: "43" },
	{
		code: "AU",
		label: "Australia",
		phone: "61",
		suggested: true,
	},
];

const JOIN_CONVERSATION: joinConversation[] = [
	{
		name: "Home",
		href: "https://www.ea.com/games/apex-legends",
	},
	{
		name: "About",
		href: "https://www.ea.com/games/apex-legends/about",
	},
	{
		name: "Legends",
		href: "https://www.ea.com/games/apex-legends/about/characters",
	},
	{
		name: "FAQ",
		href: "https://www.ea.com/games/apex-legends/about/frequently-asked-questions",
	},
	{
		name: "PC Specs",
		href: "https://www.ea.com/games/apex-legends/about/pc-system-requirements",
	},
	{
		name: "News",
		href: "https://www.ea.com/games/apex-legends/news",
	},
	{
		name: "Media",
		href: "https://www.ea.com/games/apex-legends/media",
	},
	{
		name: "Forums",
		href: "https://answers.ea.com/t5/Apex-Legends/ct-p/apex-legends-en",
	},
	{
		name: "Play Free Now*",
		href: "https://www.ea.com/games/apex-legends/play-now-for-free",
	},
];

export {
	ABOUT,
	SOCIAL,
	FREE_DOWNLOAD,
	COMPETE,
	ROLES,
	LEGENDS,
	LATEST_NEWS,
	BATTLE_ROYAL,
	COUNTRIES,
	JOIN_CONVERSATION,
};
