import {
	BattleRoyalBG,
	DeathReborn,
	DeathReborn770,
	FooterDust,
	LatestNewsBG,
	PlatformLogos,
} from "assets";
import Hero from "components/Hero/Hero";
import NewsCard from "components/LatestNewsCard/NewsCard";
import VideoPlayer from "components/VideoPopup/VideoPlayer";
import { BATTLE_ROYAL, COUNTRIES, LATEST_NEWS } from "../../constants/index";
import { FC, useState } from "react";
import { country, latestNews } from "types";
import { BiCheck } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import PlayFree from "components/PlayForFree/PlayFree";

const Home: FC = () => {
	const [play, setPlay] = useState(false);
	const [open, setOpen] = useState<boolean>(false);
	const [country, setCountry] = useState<string>("United States");
	const [Check, setCheck] = useState<boolean>(false);

	const handleSet = (e: string) => {
		setCountry(e);
		setOpen(false);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	return (
		<main>
			{play && <VideoPlayer play={play} setPlay={setPlay} />}
			{!play && (
				<>
					<Hero play={play} setPlay={setPlay} />
					{/* Sub Hero section */}
					<section
						id="sub-hero"
						className="w-full h-[800px] 760:h-[460px] relative"
					>
						<div className="w-full h-full   absolute z-10 frc justify-between">
							<div className="w-full h-full fcc justify-around 760:frc 760:justify-center">
								<div className="w-full h-auto fcc justify-center">
									<span
										id="monospace"
										className="text-[25px] 330:text-[30px] 400:text-[35px] 1400:text-[45px] text-white font-bold uppercase"
									>
										Death is Reborn
									</span>
									<p id="Roboto" className="sub-hero-desc">
										Darkness is here. Revenant is reborn
										with a killer new look and deadly new
										abilities. Revenant is unlocked for
										players all season long; complete a set
										of challenges before the season ends to
										unlock him permanently. Battle on new
										stages for Mixtape on Broken Moon and
										prove your worth in a new Ranked Season.
									</p>
									<a
										href="https://www.ea.com/games/apex-legends/resurrection"
										id="monospace"
										className="btn-learn-more"
									>
										Learn More
									</a>
								</div>
							</div>
						</div>
						<div
							className="w-full h-[100%] bg-cover bg-center z-0 hidden  760:flex"
							style={{
								backgroundImage: `url(${DeathReborn})`,
							}}
						></div>
						<div
							className="w-full h-[100%] bg-cover z-0 flex  760:hidden"
							style={{
								backgroundImage: `url(${DeathReborn770})`,
							}}
						></div>
					</section>
					{/* Latest News Section */}
					<section className="w-full h-[1800px] 745:h-[1200px] 1170:h-[800px] relative overflow-hidden">
						<div className="w-full h-full fcc  mt-[50px] absolute ">
							<div className=" w-[98%] 1400:w-[1300px] h-full m-auto">
								<div
									id="monospace"
									className="w-full 760:mb-6 text-black text-[33px] font-bold  frc justify-center "
								>
									LATEST NEWS
								</div>
								<div className="w-full h-[81%] frc items-start justify-center flex-wrap ">
									{LATEST_NEWS.map((data: latestNews) => (
										<NewsCard data={data} key={data.href} />
									))}
								</div>
							</div>
						</div>
						<img src={LatestNewsBG} className="w-full h-full" />
					</section>
					{/* Battle Royal section */}
					<section className="w-full h-[1950px] bg-black 720:h-[1300px] 1077:h-[700px] overflow-hidden relative">
						<div className="w-full h-full absolute">
							<div className="w-[90%] 1400:w-[1200px] h-full m-auto ">
								<div
									id="monospace"
									className="w-full text-center mt-[15px] frc justify-center text-white text-[44px] tracking-tighter font-bold"
								>
									BEYOND BATTLE ROYALE
								</div>
								<div
									id="Roboto"
									className="w-full h-[10%] mb-[20px]  text-center text-[22px] frc justify-center text-white  tracking-tighter "
								>
									Show 'em what you're made of in Apex
									Legends, a free-to-play hero shooter where{" "}
									<br />
									contenders from across the Frontier team up
									to battle for glory, fame, and fortune.
								</div>
								<div className="w-full h-[80%] fcc 720:justify-center text-white  720:frc 720:gap-4 flex-wrap">
									{BATTLE_ROYAL.map((data) => (
										<div key={data.image} className="w-[50%] h-[500px] 720:w-[45%] 1000:w-[30%] justify-center 1225:h-[90%] fcc">
											<img
												src={data.image}
												className="w-[300px] 400:w-full max-w-2xl"
											/>
											<span
												id="monospace"
												className="text-[22px] mt-[20px] font-bold"
											>
												{data.header}
											</span>
											<p
												id="Roboto"
												className="text-center mt-[10px] text-[18px]"
											>
												{data.message}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
						<img src={BattleRoyalBG} className="w-full h-auto" />
					</section>
					{/* SignUp section */}
					<section className="w-full h-[900px] 720:h-[800px] 1225:h-[630px] overflow-hidden  relative">
						<div className=" w-full h-full mb-8 absolute frc justify-center">
							<div className="w-[98%] 1400:w-[1300px] h-full  fcc 1225:frc justify-center m-auto">
								<div className="w-[98%] 720:w-[78%] 1225:w-[45%] h-[30%] 1225:h-full  fcc  items-start p-[20px]">
									<span
										id="monospace"
										className="text-black font-extrabold text-[20px] 350:text-[35px] mt-[15px] 450:mt-[80px] tracking-[-4px] "
									>
										SIGN UP FOR APEX LEGENDS™ NEWS
									</span>
									<p
										id="monospace"
										className=" text-start text-[18px] mt-[10px] 450:mt-[50px]"
									>
										Sign up today to receive the latest Apex
										Legends™ news, updates,
										behind-the-scenes content, offers, and
										more (including other EA news, products,
										events, and promotions) by email.
									</p>
								</div>
								<form className="w-full 720:w-[70%] 1225:w-[55%]  h-full">
									<div className="mt-[130px] w-[98%] 720:w-[75%] h-[60px] m-auto rounded-[3px]">
										<input
											type={"email"}
											placeholder="Email"
											className="w-full form-input"
										/>
									</div>
									<div className="mt-[35px] m-auto mb-5 w-[98%] 720:w-[75%] h-[60px] frc justify-between flex-wrap">
										<div className="w-full 400:w-[40%] h-full rounded-[3px] mt-0 400:mr-[15px]">
											<input
												type={"date"}
												placeholder="Birthdate"
												className="w-[98%] form-input"
											/>
										</div>
										<div
											id="monospace"
											className="cursor-pointer w-full 400:inline relative 400:w-[55%] h-full  border-[2px] border-black  outline-none rounded-[3px]"
										>
											<div
												onClick={() => setOpen(true)}
												className=""
											>
												<span className="pt-[4px] frc px-[25px] text-gray-400 text-[14px]">
													Country
												</span>
												<span className=" frc justify-between  px-[25px] text-[black] text-[17px]">
													{country}
													<BsChevronDown
														className={`transform  ${
															open
																? "rotate-[180deg]"
																: ""
														}  transition-all  duration-200`}
													/>
												</span>
											</div>
											{open && (
												<div
													className={` absolute top-[-2px] z-50 rounded-[3px]left-[-2px] w-[360px] h-[280px] overflow-y-scroll shadow-lg bg-[#FFFFFF] border-[3px] border-black`}
												>
													{COUNTRIES.map(
														(data: country) => (
															<div
																onClick={(e) =>
																	handleSet(
																		data.label
																	)
																}
																className="w-[78%] m-auto h-[56px] frc  justify-between border-b-[2px] border-gray-200 py-[30px] text-[18px] text-gray-600 "
															>
																{data.label}
																<>
																	{country ===
																		data.label && (
																		<BiCheck
																			className={`text-[25px] text-emerald-500`}
																		/>
																	)}
																</>
															</div>
														)
													)}
												</div>
											)}
										</div>
									</div>
									<div className="w-[98%] 720:w-[75%] h-auto mt-[70px] 400:mt-[20px] fcc m-auto select-none">
										<div className="w-full h-[150px]  frc items-start ">
											<div
												onClick={() => setCheck(!Check)}
												className="w-[20px] mt-[4px] cursor-pointer h-[20px] border-[2.5px] border-black rounded-[3px] frc justify-center"
											>
												<div className="w-[20px]">
													<BiCheck
														className={`text-[20px] text-black ${
															Check
																? ""
																: " hidden"
														}`}
													/>
												</div>
											</div>
											<div className="w-[95%]">
												<p
													id="monospace"
													className="px-[10px] break-words text-[15px] 1090:text-[18px]"
												>
													I can unsubscribe at any
													time by changing my 
													<span className="text-red-500">
														{" "}email preferences,
													</span>
													contacting
													<span className="text-red-500">
														{" "}privacyadmin.ea.com,
													</span>
													or writing to Electronic
													Arts Inc., ATTN: Email
													Opt-Out, 209 Redwood Shores
													Pkwy, Redwood City, CA,
													94065, USA.
												</p>
											</div>
										</div>
									</div>
									<div className="w-[98%] 720:w-[75%] h-auto frc  justify-center 400:justify-start m-auto mt-[20px] 400:mt-0 1225:mt-[20px]">
										<button
											id="monospace"
											className="btn-signUp"
											onClick={handleSubmit}
										>
											SIGN UP
										</button>
									</div>
								</form>
							</div>
						</div>
						<img src={LatestNewsBG} className="w-full h-full" />
					</section>
					{/* Play for free section */}
					<PlayFree />
				</>
			)}
		</main>
	);
};

export default Home;
