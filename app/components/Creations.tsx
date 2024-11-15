import React from "react";
import Image from "next/image";
import Button from "./ui/Button";

const Creations = () => {
	return (
		<div className="px-8 lg:px-0 mb-5 w-full font-josefin lg:pb-20">
			<h3 className="text-center mb-4 text-2xl font-medium lg:hidden">
				OUR CREATIONS
			</h3>

			<div className="lg:flex items-center justify-between px-[10%] hidden">
				<h3 className="text-center text-5xl font-medium">OUR CREATIONS</h3>

				<div className="max-w-[15%] flex items-center">
					<Button />
				</div>
			</div>

			<div className="w-full flex flex-col gap-4 items-center justify-center lg:hidden ">
				<div className="w-full relative h-[120px] ">
					<Image
						src="/images/mobile/image-deep-earth.jpg"
						fill
						alt="earth from space"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-5 absolute bottom-[3vh] left-[5vw] text-lg flex flex-col ">
						<span>DEEP</span>
						<span>EARTH</span>
					</p>
				</div>

				<div className="w-full relative h-[120px] ">
					<Image
						src="/images/mobile/image-night-arcade.jpg"
						fill
						alt="night arcade"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-5 absolute bottom-[3vh] left-[5vw] text-lg flex flex-col ">
						<span>NIGHT</span>
						<span>ARCADE</span>
					</p>
				</div>
				<div className="w-full relative h-[120px] ">
					<Image
						src="/images/mobile/image-soccer-team.jpg"
						fill
						alt="soccer team"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-5 absolute bottom-[3vh] left-[5vw] text-lg flex flex-col ">
						<span>SOCCER</span>
						<span>TEAM VR</span>
					</p>
				</div>
				<div className="w-full relative h-[120px] ">
					<Image
						src="/images/mobile/image-grid.jpg"
						fill
						alt="The grid"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-5 absolute bottom-[3vh] left-[5vw] text-lg flex flex-col ">
						<span>THE</span>
						<span>GRID</span>
					</p>
				</div>
				<div className="w-full relative h-[120px] ">
					<Image
						src="/images/mobile/image-from-above.jpg"
						fill
						alt="Aerial view"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-5 absolute bottom-[3vh] left-[5vw] text-lg flex flex-col ">
						<span>FROM UP</span>
						<span>ABOVE VR</span>
					</p>
				</div>
				<div className="w-full relative h-[120px] ">
					<Image
						src="/images/mobile/image-pocket-borealis.jpg"
						fill
						alt="aurora borealis"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-5 absolute bottom-[3vh] left-[5vw] text-lg flex flex-col ">
						<span>POCKET</span>
						<span>BOREALIS</span>
					</p>
				</div>
				<div className="w-full relative h-[120px] ">
					<Image
						src="/images/mobile/image-curiosity.jpg"
						fill
						alt="curiosity rover"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-5 absolute bottom-[3vh] left-[5vw] text-lg flex flex-col ">
						<span>THE</span>
						<span>CURIOSITY</span>
					</p>
				</div>
				<div className="w-full relative h-[120px] ">
					<Image
						src="/images/mobile/image-fisheye.jpg"
						fill
						alt="Fisheye view"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-5 absolute bottom-[3vh] left-[5vw] text-lg flex flex-col ">
						<span>MAKE IT</span>
						<span>FISHEYE</span>
					</p>
				</div>
			</div>

			<div className="hidden w-full lg:mt-10 lg:grid lg:grid-rows-2 lg:grid-cols-4 lg:gap-4 lg:px-[10%] ">
				<div className="w-full relative h-[490px] ">
					<Image
						src="/images/desktop/image-deep-earth.jpg"
						fill
						alt="earth from space"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-6 absolute bottom-[3vh] left-[2vw] text-2xl flex flex-col ">
						<span>DEEP</span>
						<span>EARTH</span>
					</p>
				</div>

				<div className="w-full relative h-[490px] ">
					<Image
						src="/images/desktop/image-night-arcade.jpg"
						fill
						alt="night arcade"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-6 absolute bottom-[3vh] left-[2vw] text-2xl flex flex-col ">
						<span>NIGHT</span>
						<span>ARCADE</span>
					</p>
				</div>
				<div className="w-full relative h-[490px] ">
					<Image
						src="/images/desktop/image-soccer-team.jpg"
						fill
						alt="soccer team"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-6 absolute bottom-[3vh] left-[2vw] text-2xl flex flex-col ">
						<span>SOCCER</span>
						<span>TEAM VR</span>
					</p>
				</div>
				<div className="w-full relative h-[490px] ">
					<Image
						src="/images/desktop/image-grid.jpg"
						fill
						alt="The grid"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-6 absolute bottom-[3vh] left-[2vw] text-2xl flex flex-col ">
						<span>THE</span>
						<span>GRID</span>
					</p>
				</div>
				<div className="w-full relative h-[490px] ">
					<Image
						src="/images/desktop/image-from-above.jpg"
						fill
						alt="Aerial view"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-6 absolute bottom-[3vh] left-[2vw] text-2xl flex flex-col ">
						<span>FROM UP</span>
						<span>ABOVE VR</span>
					</p>
				</div>
				<div className="w-full relative h-[490px] ">
					<Image
						src="/images/desktop/image-pocket-borealis.jpg"
						fill
						alt="aurora borealis"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-6 absolute bottom-[3vh] left-[2vw] text-2xl flex flex-col ">
						<span>POCKET</span>
						<span>BOREALIS</span>
					</p>
				</div>
				<div className="w-full relative h-[490px] ">
					<Image
						src="/images/desktop/image-curiosity.jpg"
						fill
						alt="curiosity rover"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-6 absolute bottom-[3vh] left-[2vw] text-2xl flex flex-col ">
						<span>THE</span>
						<span>CURIOSITY</span>
					</p>
				</div>
				<div className="w-full relative h-[490px] ">
					<Image
						src="/images/desktop/image-fisheye.jpg"
						fill
						alt="Fisheye view"
						className="object-contain"
					/>

					<p className="text-white font-medium leading-6 absolute bottom-[3vh] left-[2vw] text-2xl flex flex-col ">
						<span>MAKE IT</span>
						<span>FISHEYE</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Creations;
