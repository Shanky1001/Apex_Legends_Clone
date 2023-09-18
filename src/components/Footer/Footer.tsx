import {
	ApexFooterLogo,
	ApexGlobalLogo,
	EA_PURPLE,
	RespawnLogo,
	TeenWarning,
} from "assets/index";
import { US_FLag } from "assets/SVGImages";
import { JOIN_CONVERSATION } from "../../constants/index";
import {
	BsTwitter,
	BsInstagram,
	BsTwitch,
	BsFacebook,
	BsYoutube,
	BsChevronDown,
} from "react-icons/bs";
import { joinConversation } from "types";

const Footer = () => {
	return (
		<footer>
			<div className="w-full h-[500px] bg-[#252525]">
				<div className="w-[98%] 1400:w-[1300px] h-full m-auto fcc ">
					<div
						id="monospace"
						className="w-full h-[38%] fcc  1225:frc"
					>
						<div className="w-full 1225:w-[65%] h-[40%]  1225:h-full  frc  justify-between  flex-wrap  ">
							{JOIN_CONVERSATION.map((data: joinConversation) => (
								<div className="w-auto h-auto mr-[10px]" key={data.href}>
									<a
										key={data.name}
										href={data.href}
										className=" text-slate-300 hover:text-red-500 cursor-pointer  text-[18px]"
									>
										{data.name}
									</a>
								</div>
							))}
						</div>
						<div className="w-full 1225:w-[35%] h-[60%]  1225:h-full  fcc items-center 1225:items-end justify-center ">
							<span className=" font-bold text-slate-200 text-[20px] tracking-tighter">
								JOIN THE CONVERSATION
							</span>
							<div className="w-[70%] frc justify-between  text-[#FFFFFF] mt-[20px] text-[25px]">
								<a href="https://twitter.com/PlayApex">
									<BsTwitter className=" cursor-pointer hover:scale-125 transition-all duration-75 " />
								</a>
								<a href="https://www.instagram.com/playapex/">
									<BsInstagram className=" cursor-pointer hover:scale-125  transition-all duration-75 " />
								</a>
								<a href="https://www.twitch.tv/playapex">
									<BsTwitch className=" cursor-pointer hover:scale-125  transition-all duration-75 " />
								</a>
								<a href="https://www.facebook.com/playapex">
									<BsFacebook className=" cursor-pointer hover:scale-125  transition-all duration-75 " />
								</a>
								<a href="https://www.youtube.com/playapex">
									<BsYoutube className=" cursor-pointer hover:scale-125  transition-all duration-75 " />
								</a>
							</div>
						</div>
					</div>
					<div className="w-full h-[1px] bg-[#595959]"></div>
					<div className="w-full h-[150px] mt-4 760:justify-between fcc 1225:frc">
						<div className="w-full 1225:w-[45%] h-full frc justify-between flex-wrap">
							<a href="https://www.ea.com/games/apex-legends/compete">
								<img
									src={ApexFooterLogo}
									className="w-[120px] 400:w-[150px] 1090:w-[100px]"
								/>
							</a>
							<a href="https://www.ea.com/games/apex-legends/apex-legends-mobile">
								<img
									src={ApexGlobalLogo}
									className="w-[80px] 400:w-[100px] 1090:w-[120px]"
								/>
							</a>
							<a href="http://www.respawn.com/">
								<img
									src={RespawnLogo}
									className="w-[100px] 400:w-[150px] 1090:w-[200px] "
								/>
							</a>
						</div>
						<div className="h-full fcc items-center 400:items-end justify-center ">
							<a href="http://www.esrb.org/">
								<img src={TeenWarning} className={"w-[150px] 760:w-full"} />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-[500px] 400:h-[300px] 1225:h-[250px] bg-[#F3F3F3] ">
				<div className="w-[98%] 1400:w-[1300px]  h-full  frc justify-between m-auto  ">
					<div className="w-[7%] h-full   frc items-start hidden 1225:inline">
						<img src={EA_PURPLE} className="w-[68%] mt-[25px]" />
					</div>
					<div id="monospace" className="w-[93%]  h-full  ">
						<div className="w-full h-[50%] frc justify-between flex-wrap ">
							<a
								href="https://www.ea.com/games"
								className="text-[20px] text-[#181818] mr-[15px]"
							>
								BROWSE
							</a>
							<a
								href="https://www.ea.com/about"
								className="text-[20px] text-[#181818] mr-[15px]"
							>
								ABOUT
							</a>
							<a
								href="https://help.ea.com/"
								className="text-[20px] text-[#181818] mr-[15px]"
							>
								SUPPORT
							</a>
							<a
								href="https://www.ea.com/ea-app"
								className="text-[20px] text-[#181818] mr-[15px]"
							>
								SHOP ON EA APP
							</a>
							<a
								href="https://www.ea.com/able"
								className="text-[20px] text-[#181818] mr-[15px]"
							>
								ACCESSIBILITY
							</a>
							<div className="w-[200px] h-[62px] border-[2px] cursor-default hover:scale-105 transition-all duration-75 rounded-[3px] border-[#181818] fcc px-[20px] items-start py-[5px]">
								<span className="text-[16px] text-gray-500">
									Language
								</span>
								<div className="w-full h-auto frc">
									<US_FLag
										className={"w-[25px] h-auto mr-[5px]"}
									/>
									<span>United State</span>{" "}
									<BsChevronDown
										className={`transform transition-all  duration-200`}
									/>
								</div>
							</div>
						</div>
						<div className="w-full h-[50%] 1225:h-[38%] fcc 400:frc justify-between ">
							<div className="w-auto h-auto fcc items-center  400:items-start">
								<div className=" frc text-[17px] mb-[20px] 400:mb-[5px]">
									<div>Legal & Privacy</div>
									<div className=" ml-[40px]">
										User Agreement
									</div>
								</div>
								<div className="mb-[5px]">
									Privacy & Cookie Policy (Your Privacy
									Rights)
								</div>
								<div className="mb-[5px]">
									© {new Date().getFullYear()} Electronic Arts
									Inc.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
