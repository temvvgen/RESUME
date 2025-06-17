import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Contact from "./mongolian/Contact";
import Profile from "./mongolian/Profile";
import Edu from "./mongolian/Edu";
import Work from "./mongolian/Work";
import Skills from "./mongolian/Skills";
import Reference from "./mongolian/Reference";
import Courses from "./mongolian/Courses";
import EngProfile from "./english/EngProfile";
import EngEdu from "./english/EngEdu";
import EngCourses from "./english/EngCourses";
import EngReference from "./english/EngReference";
import EngSkills from "./english/EngSkills";
import EngWork from "./english/EngWork";
const ResumeHome = ({ language }) => {
	return (
		<div>
			{language === "Mongolian" ? (
				<div className='bg-white sm:w-full md:w-[90%] lg:w-[70%] mx-auto left-0 right-0 flex flex-col lg:flex-row mt-10 overflow-hidden '>
					<div id='sideBar' className='bg-sky-800 w-full lg:w-1/3 pb-5'>
						<Contact />
						<Edu />
					</div>

					<div id='mainContent' className='w-full lg:w-2/3 p-6'>
						<Profile />
						<Work />
						<div className='flex flex-col lg:flex-row justify-around divide-y-2 lg:divide-x-2 divide-gray-300  '>
							<div className='w-full lg:w-1/2 px-4'>
								<Skills />
							</div>
							<div className='w-full lg:w-1/2 px-4 divide-y-2 divide-gray-300'>
								<div className='pb-5'>
									<Reference />
								</div>
								<div className='pt-5'>
									<Courses />
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className='bg-white sm:w-full md:w-[90%] lg:w-[70%] mx-auto left-0 right-0 flex flex-col lg:flex-row mt-10 overflow-hidden '>
					<div id='sideBar' className='bg-sky-800 w-full lg:w-1/3 pb-5'>
						<Contact />
						<EngEdu />
					</div>

					<div id='mainContent' className='w-full lg:w-2/3 p-6'>
						<EngProfile />
						<EngWork />
						<div className='flex flex-col lg:flex-row justify-around divide-y-2 lg:divide-x-2 divide-gray-300  '>
							<div className='w-full lg:w-1/2 px-4'>
								<EngSkills />
							</div>
							<div className='w-full lg:w-1/2 px-4 divide-y-2 divide-gray-300'>
								<div className='pb-5'>
									<EngReference />
								</div>
								<div className='pt-5'>
									<EngCourses />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ResumeHome;
