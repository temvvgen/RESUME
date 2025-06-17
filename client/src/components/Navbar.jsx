import React, { useContext, useState } from "react";
import { PageUseContext } from "./PageUseContext";
import mongolianFlag from "../assets/MongoliaFlag.png";
import usaFlag from "../assets/usaFlag.png";
const Navbar = ({ language, setLanguage }) => {
	const { setPage } = useContext(PageUseContext);
	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "Mongolian" ? "English" : "Mongolian"));
	};
	return (
		<div className='bg-white sticky top-0 w-[90%] lg:w-[70%] mx-auto left-0 right-0 flex justify-center py-2 shadow-md rounded-b-2xl'>
			<div className='flex gap-3 '>
				<strong>
					<button
						onClick={() => setPage("Resume")}
						className=' cursor-pointer hover:text-blue-400 transform hover:scale-105 transition duration-300'
						type='submit'>
						RESUME
					</button>
				</strong>
				<span> | </span>
				<strong>
					<button
						onClick={() => setPage("About")}
						className=' cursor-pointer hover:text-blue-400 transform hover:scale-105 transition duration-300'>
						ABOUT
					</button>
				</strong>
				<span> | </span>
				<button onClick={toggleLanguage}>
					<img
						src={language === "Mongolian" ? usaFlag : mongolianFlag}
						alt='flag'
						className='w-9'
					/>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
