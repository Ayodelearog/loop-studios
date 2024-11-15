import React from "react";
import Image from "next/image";

const Footer = () => {
	return (
		<>
			<div className=" lg:hidden w-full bg-black flex flex-col items-center justify-center gap-6 py-8">
				<h2 className="text-white text-xl font-semibold font-josefin ">
					loopstudios
				</h2>
				<div className="flex  flex-col gap-4 items-center justify-center font-josefin">
					<p className="text-white text-base">About</p>
					<p className="text-white text-base">Careers</p>
					<p className="text-white text-base">Events</p>
					<p className="text-white text-base">Products</p>
					<p className="text-white text-base">Support</p>
				</div>

				<div className="flex items-center gap-4 ">
					<div className="relative w-4 h-4">
						<Image src="/images/icon-facebook.svg" fill alt="twitter icon" />
					</div>

					<div className="relative w-4 h-4">
						<Image src="/images/icon-twitter.svg" fill alt="facebook icon" />
					</div>
					<div className="relative w-4 h-4">
						<Image src="/images/icon-pinterest.svg" fill alt="pinterest icon" />
					</div>
					<div className="relative w-4 h-4">
						<Image src="/images/icon-instagram.svg" fill alt="instagram icon" />
					</div>
				</div>

				<small className="text-white font-alata opacity-60">
					© 2021 Loopstudios. All rights reserved.
				</small>
			</div>

			<div className="hidden px-[10%] w-full bg-black lg:flex items-center justify-between gap-6 py-8">
				<div className="flex flex-col gap-4 items-start">
					<h2 className="text-white text-2xl font-semibold font-josefin ">
						loopstudios
					</h2>
					<div className="flex gap-4 items-center justify-center font-josefin">
						<p className="text-white text-base">About</p>
						<p className="text-white text-base">Careers</p>
						<p className="text-white text-base">Events</p>
						<p className="text-white text-base">Products</p>
						<p className="text-white text-base">Support</p>
					</div>
				</div>

                <div className="flex flex-col gap-4 items-end">

				<div className="flex items-center gap-4 ">
					<div className="relative w-4 h-4">
						<Image src="/images/icon-facebook.svg" fill alt="twitter icon" />
					</div>

					<div className="relative w-4 h-4">
						<Image src="/images/icon-twitter.svg" fill alt="facebook icon" />
					</div>
					<div className="relative w-4 h-4">
						<Image src="/images/icon-pinterest.svg" fill alt="pinterest icon" />
					</div>
					<div className="relative w-4 h-4">
						<Image src="/images/icon-instagram.svg" fill alt="instagram icon" />
					</div>
				</div>

				<small className="text-white font-alata opacity-60">
					© 2021 Loopstudios. All rights reserved.
				</small>
                </div>

			</div>
		</>
	);
};

export default Footer;
