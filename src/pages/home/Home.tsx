import { DeathReborn, DeathReborn770, LatestNewsBG } from "assets";
import Hero from "components/Hero/Hero";
import NewsCard from "components/LatestNewsCard/NewsCard";
import VideoPlayer from "components/VideoPopup/VideoPlayer";
import { LATEST_NEWS } from "../../constants/index";
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
			<div className="w-full h-[2200px] 745:h-[1500px] 1123:h-[800px] relative overflow-hidden">
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
			</div>
		</main>
	);
};

export default Home;
