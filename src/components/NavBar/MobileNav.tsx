import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { BsChevronDown } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { APEX_LEGEND_LOGO } from "assets/SVGImages";
import { ABOUT, SOCIAL } from "constants/index";
import { about, mobileNav, social, dropState } from "types";
import { Link } from "react-router-dom";

const MobileNav = ({ menu, setMenu }: mobileNav) => {
	const [drop, setDrop] = useState<dropState>({
		about: false,
		modes: false,
		community: false,
		compete: false,
		social: false,
	});
	return (
		<div
			id="monospace"
			className={`w-full 400:w-[350px] h-[100vh] bg-black bottom-0 z-[999] fixed fcc ${
				menu ? "" : "hidden"
			}  animate-slideleft2 overflow-auto `}
		>
			<div className="w-full h-[70px] mt-4 frc justify-center relative">
				<APEX_LEGEND_LOGO className={"w-[70px]"} />
				<div
					onClick={() => setMenu(false)}
					className={`mr-[15px] ml-[20px] hover:animate-Fastspin absolute right-0  flex ${
						menu ? "" : " hidden"
					} 1090:hidden `}
				>
					<HiOutlineXMark className="text-white text-[40px] cursor-pointer" />
				</div>
			</div>
			{/* About */}
			<div className=" w-full h-auto select-none">
				<div
					onClick={() => setDrop({ ...drop, about: !drop.about })}
					className={`w-[92%]  h-[60px] cursor-pointer  text-white border-b ${
						drop.about ? "border-rose-600 " : "border-white"
					}  m-auto frc justify-between`}
				>
					<span>ABOUT</span>
					<div className=" text-[18px]">
						<BsChevronDown
							className={` text-[18px] ${
								drop.about
									? "transform rotate-[180deg]  transition-all  duration-300  "
									: "transform rotate-[0deg]  transition-all  duration-300"
							}`}
						/>
					</div>
				</div>
				{drop.about &&
					ABOUT.map((data: about) => (
						<Link
							to={data.link}
							key={data.name}
							className={
								"cursor-pointer group animate-slideleft2"
							}
						>
							<div
								className={`w-[92%] h-[60px] px-4 text-white border-b border-rose-600 m-auto frc justify-between`}
							>
								<span>{data.name}</span>
							</div>
						</Link>
					))}
			</div>
			{/* Modes */}
			<div className=" w-full h-auto select-none">
				<div
					onClick={() => setDrop({ ...drop, modes: !drop.modes })}
					className={`w-[92%]  h-[60px] cursor-pointer  text-white border-b ${
						drop.modes ? "border-rose-600" : "border-white"
					}  m-auto frc justify-between`}
				>
					<span>MODES</span>
					<div className=" text-[18px]">
						<BsChevronDown
							className={` text-[18px] ${
								drop.modes
									? "transform rotate-[180deg]  transition-all  duration-300  "
									: "transform rotate-[0deg]  transition-all  duration-300"
							}`}
						/>
					</div>
				</div>

				{drop.modes && (
					<a
						href="https://www.ea.com/games/apex-legends/modes/team-deathmatch"
						className={`cursor-pointer group animate-slideleft2`}
					>
						<div
							className={`w-[92%] h-[60px] px-4 text-white border-b border-rose-600 m-auto frc justify-between`}
						>
							<span>Team Deathmatch</span>
						</div>
					</a>
				)}
				{drop.modes && (
					<a
						href="https://www.ea.com/games/apex-legends/modes/battle-royale"
						className={`cursor-pointer group animate-slideleft2`}
					>
						<div
							className={`w-[92%] h-[60px] px-4 text-white border-b border-rose-600 m-auto frc justify-between`}
						>
							<span>Battle Royale</span>
							<div className=" text-[18px]">
								<GoPlus className="text-[18px] transform group-hover:rotate-[180deg]  transition-all  duration-300" />
							</div>
						</div>
					</a>
				)}
			</div>
			{/* Season */}
			<a
				href="https://www.ea.com/en-us/games/apex-legends/revelry"
				className=" w-full h-auto select-none"
			>
				<div
					className={`w-[92%]  h-[60px] cursor-pointer  text-white border-b  border-white  m-auto frc justify-between`}
				>
					<span>SEASON</span>
				</div>
			</a>
			{/* BattlePass */}
			<a
				href="https://www.ea.com/en-us/games/apex-legends/revelry"
				className=" w-full h-auto select-none"
			>
				<div
					className={`w-[92%]  h-[60px] cursor-pointer  text-white border-b  border-white  m-auto frc justify-between`}
				>
					<span>BATTLEPASS</span>
				</div>
			</a>
			{/* Community */}
			<div className=" w-full h-auto select-none">
				<div
					onClick={() =>
						setDrop({ ...drop, community: !drop.community })
					}
					className={`w-[92%]  h-[60px] cursor-pointer  text-white border-b ${
						drop.community ? "border-rose-600" : "border-white"
					}  m-auto frc justify-between`}
				>
					<span>COMMUNITY</span>
					<div className=" text-[18px]">
						<BsChevronDown
							className={` text-[18px] ${
								drop.community
									? "transform rotate-[180deg]  transition-all  duration-300  "
									: "transform rotate-[0deg]  transition-all  duration-300"
							}`}
						/>
					</div>
				</div>

				{drop.community && (
					<div className={`cursor-pointer group `}>
						<div className=" z-30 w-full h-auto ">
							<div
								onClick={() =>
									setDrop({ ...drop, social: !drop.social })
								}
								className={`w-[92%] h-[60px] px-4  text-white border-b 
								border-rose-600 m-auto frc justify-between`}
							>
								<span>SOCIAL</span>
								<div className=" text-[18px]">
									<GoPlus
										className={`text-[18px] transform  ${
											drop.social
												? "rotate-[45deg]"
												: "group-hover:rotate-[180deg]"
										}  transition-all  duration-300`}
									/>
								</div>
							</div>
							{drop.social &&
								SOCIAL.map((data: social) => (
									<a
										href={data.href}
										key={data.name}
										className={`cursor-pointer group animate-slideleft2`}
									>
										<div
											className={`w-[92%] h-[40px] px-8 text-white m-auto frc justify-between`}
										>
											<span>{data.name}</span>
										</div>
									</a>
								))}
						</div>
					</div>
				)}
				{drop.community && (
					<a
						href="https://answers.ea.com/t5/Apex-Legends/ct-p/apex-legends-en"
						className={`cursor-pointer animate-slideleft2 group`}
					>
						<div
							className={`w-[92%] h-[60px] px-4 text-white border-b border-rose-600 m-auto frc justify-between`}
						>
							<span>COMMUNITY</span>
						</div>
					</a>
				)}
				{drop.community && (
					<a
						href="https://answers.ea.com/t5/Apex-Legends/ct-p/apex-legends-en"
						className={`cursor-pointer group animate-slideleft2`}
					>
						<div
							className={`w-[92%] h-[60px] px-4 text-white border-b border-rose-600 m-auto frc justify-between`}
						>
							<span>MERCHANDISE</span>
						</div>
					</a>
				)}
			</div>
            {/* Compete */}
			<div className=" w-full h-auto select-none">
				<div
					onClick={() => setDrop({ ...drop, compete: !drop.compete })}
					className={`w-[92%]  h-[60px] cursor-pointer  text-white border-b ${
						drop.compete ? "border-rose-600" : "border-white"
					}  m-auto frc justify-between`}
				>
					<span>COMPETE</span>
					<div className=" text-[18px]">
						<BsChevronDown
							className={` text-[18px] ${
								drop.compete
									? "transform rotate-[180deg]  transition-all  duration-300  "
									: "transform rotate-[0deg]  transition-all  duration-300"
							}`}
						/>
					</div>
				</div>

				{drop.compete && (
					<a
						href="https://www.ea.com/games/apex-legends/compete"
						className={`cursor-pointer group animate-slideleft2`}
					>
						<div
							className={`w-[92%] h-[60px] px-4 text-white border-bx
								border-rose-600 m-auto frc justify-between`}
						>
							<span>COMPETE</span>
						</div>
					</a>
				)}
				{drop.compete && (
					<a
						href="https://www.ea.com/games/apex-legends/modes/battle-royale"
						className={`cursor-pointer group animate-slideleft2`}
					>
						<div
							className={`w-[92%] h-[60px] px-4 text-white border-b border-rose-600
									 m-auto frc justify-between`}
						>
							<span>Community Guidelines</span>
						</div>
					</a>
				)}
			</div>
		</div>
	);
};

export default MobileNav;
