import { HeroLogo, HeroVideo1 } from "assets/index";
import { heroComponent } from "types";
import { FiPlay } from "react-icons/fi";

const Hero = ({ play, setPlay }: heroComponent) => {
	return (
		<section
			id="Roboto"
			className="w-full h-[70vh] bg-black relative  overflow-hidden "
		>
			<div className="w-full h-full fcc justify-center absolute inset-0 z-50 translate-y-[-60px] ">
				<img src={HeroLogo} className={"w-[235px] h-[200px]"} />
				<span className=" text-slate-200 mt-3 text-[20px] text-center">
					Death is Reborn in Apex Legends: Resurrection.
				</span>
				<div className=" w-full 450:w-auto fcc 720:frc mt-[20px] ">
					<a
						href="https://www.ea.com/en-us/games/apex-legends/play-now-for-free"
						className="px-[25px] text-[18px] 
          py-[15px] bg-red-600 rounded text-white hover:scale-105 transition-all duration-75 mr-[20px] cursor-pointer
          mb-[20px] 720:mb-0 hidden 450:flex
          "
					>
						PLAY FREE NOW*
					</a>
					<a
						href="https://www.ea.com/en-us/games/apex-legends/play-now-for-free"
						className="w-[95%] justify-center m-auto px-[25px] text-[18px] 
          py-[15px] bg-red-600 rounded text-white hover:scale-105 transition-all duration-75  cursor-pointer
          mb-[20px] 720:mb-0 flex 450:hidden
          "
					>
						PLAY FREE NOW*
					</a>
					<div
						onClick={() => setPlay(true)}
						className="px-[25px] select-none text-[18px] hidden 450:flex frc  py-[15px] bg-red-600 rounded text-white hover:scale-105 transition-all duration-75 mr-[20px] cursor-pointer"
					>
						WATCH GAMEPLAY TRAILER <FiPlay className="ml-[10px]" />
					</div>
					<div
						onClick={() => setPlay(true)}
						className="w-[95%] select-none m-auto px-[25px] justify-center text-[18px] frc flex 450:hidden py-[15px] bg-red-600 rounded text-white hover:scale-105 
          transition-all duration-75  cursor-pointer"
					>
						WATCH GAMEPLAY TRAILER <FiPlay className="ml-[10px]" />
					</div>
				</div>
			</div>
			<video
				className="min-w-[100%] min-h-[100%] object-cover translate-y-[-50%] absolute top-[50%] bottom-[50%]"
				src={HeroVideo1}
				muted
				autoPlay={true}
				preload="auto"
				loop
			>
				something
			</video>
		</section>
	);
};

export default Hero;
