import React from "react";

const NewsCard = ({ data }: any) => {
	return (
		<a
			key={data.IMAGE}
			href={data.href}
			id="monospace"
			className={"latest-news-card"}
		>
			<img src={data.image} className="w-full h-auto" />
			<div className="w-full p-[24px] fcc">
				<div className="w-full text-[18px] h-[50px] frc justify-start ">
					<span className="text-red-500 tracking-[-.1em]">
						APEXLEGENDS
					</span>
					<span className="text-white tracking-[-.0.99em] ml-[20px]">
						{data.date}
					</span>
				</div>
				<span className="w-full h-auto tracking-tighter frc justify-start text-slate-200 text-[24px]">
					{data.header}
				</span>
				<span
					id="Roboto"
					className="w-full h-auto frc justify-start text-white  text-[18px]"
				>
					{data.message}
				</span>
			</div>
			<div className="w-full h-[8px] absolute bottom-0 bg-red-600"></div>
		</a>
	);
};

export default NewsCard;
