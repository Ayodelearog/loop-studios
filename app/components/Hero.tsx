import React from "react";
import Image from "next/image";

function Hero() {
	return (
		<div className="relative w-full h-[100vh]  ">
			<Image
				src="/images/mobile/image-hero.jpg"
				sizes="(max-width: 375px) 100vw"
				fill
				alt="hero-img"
				className="object-cover lg:hidden" // Makes image cover the entire container
			/>

			<Image
				src="/images/desktop/image-hero.jpg"
				sizes="(max-width: 1440px) 100vw"
				fill
				alt="hero-img-desktop"
				className="object-cover hidden lg:block"
			/>

			{/* Overlay Content */}
			<div className="absolute top-0 flex items-center justify-between w-full p-6 text-white lg:px-[10%] lg:top-2 ">
				<h1 className="text-[2rem] font-bold font-josefin  ">loopstudios</h1>
				<div>
					<Image
						src="/images/icon-hamburger.svg"
						width={24}
						height={12}
						alt="hamburger menu"
            className="lg:hidden"
					/>
				</div>
        <nav className="hidden lg:block">
					<ul className="flex space-x-8 text-base font-medium">
						<li><a href="#" className="font-josefin hover:underline">About</a></li>
						<li><a href="#" className="font-josefin hover:underline">Careers</a></li>
						<li><a href="#" className="font-josefin hover:underline">Events</a></li>
						<li><a href="#" className="font-josefin hover:underline">Products</a></li>
						<li><a href="#" className="font-josefin hover:underline">Support</a></li>
					</ul>
				</nav>
			</div>

			<div className="  border-2 mt-[30vh] absolute m-6 p-6 lg:mx-[10%]">
				<p className="text-white text-[36px] leading-10 font-josefin lg:hidden">
					IMMERSIVE EXPERIENCES THAT DELIVER
				</p>

				<p className="text-white text-[66px] leading-[60px] font-josefin lg:flex flex-col hidden ">
					<span>IMMERSIVE</span> <span>EXPERIENCES</span> <span>THAT DELIVER</span>
				</p>
			</div>
		</div>
	);
}

export default Hero;
