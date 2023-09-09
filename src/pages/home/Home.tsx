import Hero from "components/Hero/Hero";
import VideoPlayer from "components/VideoPopup/VideoPlayer";
import React, { FC, useState } from "react";

const Home: FC = () => {
	const [play, setPlay] = useState(false);
	return (
		<main>
			<Hero play={play} setPlay={setPlay} />
            {play && <VideoPlayer play={play} setPlay={setPlay}  />}
		</main>
	);
};

export default Home;
