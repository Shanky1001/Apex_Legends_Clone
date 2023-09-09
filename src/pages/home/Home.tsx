import {
	BattleRoyalBG,
	DeathReborn,
	DeathReborn770,
	LatestNewsBG,
} from "assets";
import Hero from "components/Hero/Hero";
import NewsCard from "components/LatestNewsCard/NewsCard";
import VideoPlayer from "components/VideoPopup/VideoPlayer";
import { BATTLE_ROYAL, LATEST_NEWS } from "../../constants/index";
import React, { FC, useState } from "react";
import { latestNews } from "types";

const Home: FC = () => {
	const [play, setPlay] = useState(false);
	return (
		<main>
			<Hero play={play} setPlay={setPlay} />
			{play && <VideoPlayer play={play} setPlay={setPlay} />}
			{/* Sub Hero section */}
			<section
				id="sub-hero"
				className="w-full h-[800px] 760:h-[460px] relative"
			>
				<div className="w-full h-full   absolute z-10 frc justify-between">
					<div className="w-full h-full fcc justify-end mb-16 760:frc 760:justify-center">
						<div className="w-full h-auto fcc justify-center">
							<span
								id="monospace"
								className="text-[25px] 330:text-[30px] 400:text-[35px] 1400:text-[45px] text-white font-bold uppercase"
							>
								Death is Reborn
							</span>
							<p id="Roboto" className="sub-hero-desc">
								Darkness is here. Revenant is reborn with a
								killer new look and deadly new abilities.
								Revenant is unlocked for players all season
								long; complete a set of challenges before the
								season ends to unlock him permanently. Battle on
								new stages for Mixtape on Broken Moon and prove
								your worth in a new Ranked Season.
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
			<section className="w-full h-[2200px] 745:h-[1500px] 1123:h-[800px] relative overflow-hidden">
				<div className="w-full h-full fcc  mt-[50px] absolute ">
					<div className=" w-[98%] 1400:w-[1300px] h-full m-auto">
						<div
							id="monospace"
							className="w-full h-[13%] text-black text-[33px] font-bold  frc justify-center "
						>
							LATEST NEWS
						</div>
						<div className="w-full h-[81%] frc items-start justify-center flex-wrap ">
							{LATEST_NEWS.map((data: latestNews) => (
								<NewsCard data={data} />
							))}
						</div>
					</div>
				</div>
				<img src={LatestNewsBG} className="w-full h-full" />
			</section>
			{/* Battle Royal */}
			<section className="w-full h-[1950px] 720:h-[1300px] 1077:h-[700px] overflow-hidden relative">
				<div className="w-full h-full absolute">
					<div className="w-[90%] 1400:w-[1200px] h-full m-auto ">
						<div
							id="monospace"
							className="w-full h-[15%] text-center mt-[15px] frc justify-center text-white text-[44px] tracking-tighter font-bold"
						>
							BEYOND BATTLE ROYALE
						</div>
						<div
							id="Roboto"
							className="w-full h-[10%] mb-[20px]  text-center text-[22px] frc justify-center text-white  tracking-tighter "
						>
							Show 'em what you're made of in Apex Legends, a
							free-to-play hero shooter where <br />
							contenders from across the Frontier team up to
							battle for glory, fame, and fortune.
						</div>
						<div className="w-full h-[75%] text-white justify-between frc items-start flex-wrap">
							{BATTLE_ROYAL.map((data) => (
								<div className="w-[30%] h-[440px] 1225:h-[90%] fcc">
									<img
										src={data.image}
										className="w-full h-auto"
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
		</main>
	);
};

export default Home;
