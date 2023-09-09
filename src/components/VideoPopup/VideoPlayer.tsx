import { HiXMark } from "react-icons/hi2";
import { heroComponent } from "types";

const VideoPlayer = ({ play, setPlay }: heroComponent) => {
	var items: string[] = ["iFxUw5Cckdw", "C-WQcCqecHg", "KUY2MMRmLLM"];
	var item: string = items[Math.floor(Math.random() * items.length)];
	return (
		<div
			className={` w-full h-screen bg-black absolute  frc justify-center z-[99999] top-0  text-white  left-0`}
		>
			<div
				onClick={() => setPlay(false)}
				className=" absolute top-[20px] right-[20px]   hover:rotate-180 transition-all duration-300 cursor-pointer "
			>
				<HiXMark className="text-[40px]" />
			</div>
			<div className="w-full 1077:w-[80%] h-full m-auto frc">
				<div className=" relative overflow-hidden w-[100%] pt-[56.25%]">
					<iframe
						frameBorder="0"
						allowFullScreen
						width="100%"
						height="100%"
						src={`https://www.youtube.com/embed/${item}`}
						className=" absolute inset-0"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default VideoPlayer;
