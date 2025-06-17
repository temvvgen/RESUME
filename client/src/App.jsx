import React, { useState, useContext } from "react";
import ResumeHome from "./resume/ResumeHome";
import AboutHome from "./about/AboutHome";
import Navbar from "./components/Navbar";
import { PageUseContext } from "./components/PageUseContext.js";
const App = () => {
	const [page, setPage] = useState("Resume");
	const [language, setLanguage] = useState("Mongolian");
	return (
		<div className='bg-gray-300'>
			<PageUseContext.Provider value={{ page, setPage }}>
				<Navbar language={language} setLanguage={setLanguage} />
				{page === "Resume" ? (
					<ResumeHome language={language} />
				) : (
					<AboutHome language={language} />
				)}
			</PageUseContext.Provider>
		</div>
	);
};

export default App;
