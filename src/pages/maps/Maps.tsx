import { FooterDust } from "assets";
import PlayFree from "components/PlayForFree/PlayFree";
import { MapData, MapsList } from "constants/index";
import React, { useEffect, useState } from "react";
import { mapDetails, maps } from "types";

const Maps = () => {
	const [pathname, setpathname] = useState<string | undefined>("BrokenMoon");

	useEffect(() => {
		if (window) {
			window.addEventListener("hashchange", () => {
				const pathname = window.location.hash;
				setpathname(pathname);
			});
		}
	}, []);

	const isActive = pathname?.split("#").pop();

	return (
		<>
			{/* Discover section */}
			<section className="w-full h-auto relative">
				<div
					id="monospace"
					className="w-full 1200:w-[1200px] text-white h-auto z-50 relative m-auto fcc justify-center"
				>
					<div className=" text-[30px] 800:text-[40px] font-bold  mt-[50px] text-center">
						DISCOVER THE MAPS OF THE APEX GAMES
					</div>
					<p className=" text-center  text-[18px] 800:text-[20px] 1200:text-[23px] my-[10px]">
						Kings Canyon, World’s Edge, and Olympus. You’ve fought
						there, you’ve died there, but do you know why they were
						chosen? Hammond Robotics and the Mercenary Syndicate
						seem to have a hand in everything that shapes the
						destiny of the Outlands... Learn more about the maps
						that host the Apex Games.
					</p>
					<div className="my-[30px] px-[25px] py-[17px] cursor-pointer hover:scale-105 transition-all duration-100 rounded-[3px] text-[20px] border-[2px] border-white ">
						Battle Royale Maps
					</div>
				</div>
				<div
					className="w-full h-[100%]  bg-cover bg-center z-0 absolute top-0 "
					style={{
						backgroundImage: `url(${FooterDust})`,
					}}
				></div>
			</section>
			{/* Maps List section */}
			<section>
				<div
					id="monospace"
					className="w-full h-auto 1200:h-[300px] frc justify-center text-white bg-[#161616]"
				>
					<div className="w-full 1200:w-[1200px] h-auto fcc  justify-center m-auto py-[40px] 1200:py-0">
						<div className="text-[40px] font-bold  text-center">
							BATTLE ROYALE
						</div>
						<span className="text-[19px] text-center my-[10px]">
							Located on planets across the Outlands, these
							massive landscapes host the massive Apex Games.
						</span>
						<div className="w-full h-auto frc justify-center flex-wrap">
							{MapsList.map((data: maps) => (
								<a
									href={`#${data.link}`}
									className={`text-[19px] ${
										data.link.toLowerCase() ===
										isActive?.toLowerCase()
											? "text-red-600"
											: ""
									} cursor-pointer group hover:text-red-600 hover:scale-105 
               transition-all duration-100 mr-[25px] my-[15px] fcc`}
								>
									<span>{data.name}</span>
									<div
										className={`w-full h-[2px] ${
											data.link.toLowerCase() ===
											isActive?.toLowerCase()
												? "bg-red-600"
												: "bg-white "
										} group-hover:bg-red-600`}
									></div>
								</a>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* Map Details */}
			<section>
				{MapData.map((data: mapDetails) => (
					<div
						id="monospace"
						className={`w-full h-auto ${
							data.name2.toLowerCase() === isActive?.toLowerCase()
								? ""
								: "hidden"
						} `}
					>
						<div className="w-full h-auto hidden 690:inline">
							<img src={data.map_img1} />
						</div>
						<div className="w-full h-auto inline 690:hidden">
							<img src={data.map_img2} />
						</div>
						<div className="w-full h-auto text-black relative pb-[100px] ">
							<div className="w-full 1000:w-[1000px] h-auto m-auto fcc items-start relative z-50 px-[20px] 1000:px-0">
								<div className="w-full h-[120px] frc text-[35px] font-bold mt-[50px]">
									{data.name1}
								</div>
								<p className="w-full h-auto text-[19px]">
									{data.details}
								</p>
							</div>
							<div
								className="w-full h-[100%]  bg-cover bg-center z-0  absolute top-0 "
								style={{
									backgroundImage: `url(https://media.contentapi.ea.com/content/dam/apex-legends/common/apex-section-bg-beige-texture-xl.jpg.adapt.1920w.jpg)`,
								}}
							></div>
						</div>
					</div>
				))}
			</section>
			<PlayFree />
		</>
	);
};

export default Maps;
