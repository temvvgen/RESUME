import React from "react";
import Header from "./mongolian/Header";
import About from "./mongolian/About";
import EngAbout from "./english/EngAbout";
import EngHeader from "./english/EngHeader";

const AboutHome = ({ language }) => {
	return (
		<div className='bg-gradient-to-r from-orange-50 to-white py-10 mt-9'>
			{language === "Mongolian" ? (
				<div>
					<Header />
					<About />
				</div>
			) : (
				<div>
					<EngHeader />
					<EngAbout />
				</div>
			)}
		</div>
	);
};

export default AboutHome;
