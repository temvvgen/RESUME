import React from "react";

const EngAbout = () => {
	return (
		<div className='max-w-6xl mx-auto p-6 md:p-10 mt-8'>
			<h2 className='text-2xl md:text-3xl font-bold text-orange-600 mb-6'>
				About Me
			</h2>

			<p className='text-gray-800 leading-relaxed text-justify'>
				My name is Temuugen Baljin. I was born on January 29, 2002, and I am 23
				years old. I completed my secondary education at the 15th General
				Secondary School with an advanced mathematics curriculum in Darkhan-Uul
				province. In 2020, I enrolled in the School of Technology in Darkhan, a
				branch of the Mongolian University of Science and Technology (MUST),
				majoring in Software Engineering.
			</p>

			<p className='text-gray-800 leading-relaxed text-justify mb-4'>
				From 2021 to 2022, I served one year of mandatory military service in
				Engineering Unit 014.
			</p>

			<p className='text-gray-800 mb-6'>
				I have also actively participated in various sports and achieved the
				following accomplishments:
			</p>

			<div className='space-y-6 text-gray-800'>
				{/* Archery */}
				<section>
					<h3 className='font-semibold text-xl text-gray-700'>🏹 Archery</h3>
					<ul className='list-disc ml-6 mt-2 space-y-1'>
						<li>2016, 2017, 2018 – Provincial Champion – Gold Medal</li>
						<li>July 22, 2016 – National Championship – Bronze Medal</li>
						<li>2019 – Children's Sports Festival – Gold Medal</li>
						<li>April 6, 2019 – Onon's Memorial Competition – Bronze Medal</li>
						<li>2021 – Ulaanbaatar City Championship – Silver Medal</li>
					</ul>
				</section>

				{/* Shootboxing */}
				<section>
					<h3 className='font-semibold text-xl text-gray-700'>
						🥊 Shootboxing
					</h3>
					<ul className='list-disc ml-6 mt-2 space-y-1'>
						<li>2024 – National Championship – Bronze Medal</li>
						<li>2024 – Professional 71kg Match</li>
					</ul>
				</section>

				{/* Muay Thai */}
				<section>
					<h3 className='font-semibold text-xl text-gray-700'>
						🥋 Muay Thai Boxing
					</h3>
					<ul className='list-disc ml-6 mt-2 space-y-1'>
						<li>2023, 2024 – National Championship – Silver Medal</li>
						<li>2023 – WBC Muay Thai Mongolia – Silver Medal</li>
					</ul>
				</section>

				{/* Taekwondo */}
				<section>
					<h3 className='font-semibold text-xl text-gray-700'>🥇 Taekwondo</h3>
					<ul className='list-disc ml-6 mt-2 space-y-1'>
						<li>2024 – Tornado Cup – Silver Medal</li>
					</ul>
				</section>

				{/* Other achievements */}
				<section className='pt-4 border-t'>
					<ul className='list-disc ml-6 space-y-1'>
						<li>Candidate Master of Archery (National Level)</li>
						<li>Black Belt in Shootboxing</li>
						<li>2019 – Best Athlete of Darkhan Province</li>
						<li>2020 – Best Student Athlete of the Province</li>
					</ul>
				</section>
			</div>
		</div>
	);
};

export default EngAbout;
