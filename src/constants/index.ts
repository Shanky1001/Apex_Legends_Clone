import {
	BrokenMoon1,
	BrokenMoon2,
	Gun,
	Head,
	KingsCanyon1,
	KingsCanyon2,
	News1,
	News2,
	News3,
	Olympus1,
	Olympus2,
	StormPoint1,
	StormPoint2,
	Trophy,
	WorldEdge1,
	WorldEdge2,
} from "assets";
import {
	about,
	battleRoyal,
	country,
	free,
	joinConversation,
	latestNews,
	mapDetails,
	maps,
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

const MapsList: maps[] = [
	{
		name: "Broken Moon",
		link: "BrokenMoon",
	},
	{
		name: "Kings Canyon",
		link: "KingsCanyon",
	},
	{
		name: "World's Edge",
		link: "World'sEdge",
	},
	{
		name: "Olympus",
		link: "Olympus",
	},
	{
		name: "Storm Point",
		link: "StormPoint",
	},
];

const MapData: mapDetails[] = [
	{
		name1: "Broken Moon",
		name2: "BrokenMoon",
		map_img1: BrokenMoon1 as string,
		map_img2: BrokenMoon2 as string,
		details:
			"Boreas’ moon, Cleo, was once whole–until a meteor and a myth broke it apart. Unbeknownst to the peoples of Boreas, the meteor didn’t just split the moon and cause surface-level destruction, but also sent the entire planet on a path to destruction. It wasn’t until researchers discovered the link between the moon and an increase in devastating weather events that the nations of Boreas came together and promised to heal Cleo, naming their efforts Project Hope. What previously was an unoccupied satellite became a teeming colony of researchers, engineers, and builders. Workers mended divides, celestial rock became fields, and new technologies were born. However, long years and slow progress caused the peoples’ hearts and wallets to turn from Hope. This forced the Cleo Restoration Committee to privatize the moon for funding–with townhomes, shopping centers, and prestige burial plots added. Now, Cleo is a collection of public and private enterprises, including the Apex Games, all with the hope of saving Cleo and Boreas.",
	},
	{
		name1: "KINGS CANYON",
		name2: "KINGSCANYON",
		map_img1: KingsCanyon1 as string,
		map_img2: KingsCanyon2 as string,
		details:
			" Once a simple settlement on Solace, the island known as Kings Canyon didn't thrive until the IMC chose it as a hub for research and development. It housed an airbase, a water treatment plant, and a plethora of other facilities to support IMC operations. To blow off steam, the IMC soldiers stationed here would compete in a gladiator-esque combat arena they nicknamed ‘Thunderdome’, the predecessor of the Apex Games. Secretly, it was also home to underground facilities that hid the IMC’s more radical operations–like a highly classified project on Phase tech and a program to create a simulacra army powered by a single brain.In the years since the IMC left the Outlands, the island has undergone many changes due to Syndicate construction projects and freak incidents. The most notable being the destruction of the Repulsor Tower, an underground explosion that sank Thunderdome and Skulltown, and a ship crash that obliterated the northern edge of Kings Canyon. Now, the Syndicate is further altering the landscape with terraforming projects to its caves, and salvage operations for Relic (the area formerly known as Skull Town). But no matter how it changes, Kings Canyon will always be the first home of the Apex Games.",
	},
	{
		name1: "WORLD'S EDGE",
		name2: "WORLD'SEDGE",
		map_img1: WorldEdge1 as string,
		map_img2: WorldEdge2 as string,
		details:
			"A harsh planet beset by intense volcanic activity, Talos was once deemed uninhabitable, and only small luddite settlements took root there. However, it became a hotbed of IMC activity when a rare mineral compound was discovered beneath its surface. Heat-reducing towers were built to super-cool its natural lava flows and allow resource extraction - the facility that housed them was optimistically dubbed “New Dawn”, and the town of World’s Edge grew around it.Decades ago, an explosion in one of the towers covered the surrounding area in a lethal flash freeze. World’s Edge was abandoned, its only remaining inhabitants a small community of hunters who once spurned modern technology (but tentatively accepted it again under the guidance of their beloved local hero, Bloodhound). However, its ruins and the planet’s energy-rich soil drew the attention of two critical groups: the Mercenary Syndicate and Hammond Robotics. Today, World’s Edge is the second home of the Apex Games and a key operational center for Hammond Robotics, which installed the latest in modern mining technology - the Planet Harvester - to begin its own resource extraction.",
	},
	{
		name1: "OLYMPUS",
		name2: "OLYMPUS",
		map_img1: Olympus1 as string,
		map_img2: Olympus2 as string,
		details:
			"Once a city built on dreams, Olympus was a utopia floating in clouds above Psamathe. Here, the brightest minds in the Outlands could gather and exchange ideas, leading to breakthroughs in the sciences and arts. However, an accident in an experimental research facility led to the creation of the Phase Rift (a massive bubble of Phase energy), and the Outlands’ best and brightest quickly abandoned the city. With the support of the Mercenary Syndicate, Hammond Robotics stepped in to transform Olympus into a new stage for the Apex Games.Since then, a ship from the Icarus Fleet brought a deadly virus along with powerful Medusa Vines to Olympus. While the virus was cured, the vines remained and kept the ship docked to the city. Additionally, a disastrous attempt to transport Olympus to a new location using phase technology sent the city into a tailspin, its structures being littered across the terrain as it stabilized. The changes shook up the Games, creating new challenges for participating Legends.",
	},
	{
		name1: "STORM POINT",
		name2: "STORMPOINT",
		map_img1: StormPoint1 as string,
		map_img2: StormPoint2 as string,
		details:
			"This deserted island wasn’t always so deserted. Beautiful and teeming with resources, Storm Point was the prime candidate for early IMC expeditions to planet Gaea. However, IMC settlement teams quickly discovered that intense tropical storms plague the island and a permanent settlement was established nearby–the city of Suotamo. As the city grew, the IMC built power-generating storm catchers on Storm Point to keep up with their energy needs.When the IMC pulled out of the Outlands, the storm catchers fell into disrepair. Left with only one functional storm catcher and few resources, the naive citizens of Storm Point decided to pull it down for parts. The absence of the storm catcher exacerbated the surrounding storms, causing them to overtake the island. Later, a survey of the area revealed previously unknown settlements but no survivors. The island was then abandoned for many years, save for the occasional scavenger or pirate, until it caught the eye of the Mercenary Syndicate.They knew there was old IMC tech and dangerous wildlife on Storm Point, but they didn’t realize how deadly the island was until the rumblings of a colossal sea beast woke the old IMC defenses. Now, Spectres roam fully-stocked IMC Armories, giving Apex Games competitors a new challenge.",
	},
];

export {
	ABOUT,
	SOCIAL,
	FREE_DOWNLOAD,
	ROLES,
	LEGENDS,
	LATEST_NEWS,
	BATTLE_ROYAL,
	COUNTRIES,
	JOIN_CONVERSATION,
	MapsList,
	MapData,
};
