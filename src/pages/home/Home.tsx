import { DeathReborn, DeathReborn770 } from "assets";
import Hero from "components/Hero/Hero";
import VideoPlayer from "components/VideoPopup/VideoPlayer";
import React, { FC, useState } from "react";

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
		</main>
	);
};

export default Home;
