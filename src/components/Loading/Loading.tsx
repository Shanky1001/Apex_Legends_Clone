const Loading = () => {
	return (
		<div className="container_loading flex w-full min-h-screen max-h-screen mx-auto text-center">
			<svg>
				<path
					d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
					style={{ fill: "none", stroke: "black" }}
				/>
				<path
					d="M 130 155 m -12, 0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0"
					style={{ fill: "#0C2F4A", stroke: "none" }}
				>
					<animateMotion
						path="M -30, -55 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
						dur="4s"
						fill="freeze"
						repeatCount="indefinite"
					/>
				</path>
				<path
					d="M 130 155 m -12, 0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0"
					style={{ fill: "#2A5576", stroke: "none" }}
				>
					<animateMotion
						path="M -30, -55 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
						dur="10s"
						fill="freeze"
						repeatCount="indefinite"
					/>
				</path>
				<path
					d="M 130 155 m -12, 0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0"
					style={{ fill: "gray", stroke: "none" }}
				>
					<animateMotion
						path="M -30, -55 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
						dur="1.9s"
						fill="freeze"
						repeatCount="indefinite"
					/>
				</path>
				<path
					d="M 130 155 m -12, 0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0"
					style={{ fill: "#446F90", stroke: "none" }}
				>
					<animateMotion
						path="M 7, -55 m -75, 0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0"
						dur="2s"
						fill="freeze"
						repeatCount="indefinite"
					/>
				</path>
				<path
					d="M 130 155 m -12, 0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0"
					style={{ fill: "#5D89AB", stroke: "none" }}
				>
					<animateMotion
						path="M 7, -55 m -75, 0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0"
						dur="5s"
						fill="freeze"
						repeatCount="indefinite"
					/>
				</path>
				<path
					d="M 130 155 m -12, 0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0"
					style={{ fill: "#44657E", stroke: "none" }}
				>
					<animateMotion
						path="M 7, -55 m -75, 0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0"
						dur="4s"
						fill="freeze"
						repeatCount="indefinite"
					/>
				</path>
			</svg>
		</div>
	);
};

export default Loading;
