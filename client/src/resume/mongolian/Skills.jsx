import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const skillRatings = [
	{ name: "JavaScript", stars: 4 },
	{ name: "ReactJS", stars: 4 },
	{ name: "NodeJS", stars: 3 },
	{ name: "ExpressJS", stars: 3 },
	{ name: "MongoDB", stars: 3 },
	{ name: "HTML", stars: 4 },
	{ name: "CSS, SCSS TailwindCSS", stars: 4 },
	{ name: "Git", stars: 3 },
	{ name: "RESTful APIs", stars: 3 },
	{ name: "Microsoft Office (Word, Excel, PowerPoint)", stars: 4 },
	{ name: "Adobe After Effects", stars: 2 },
	{ name: "Adobe Photoshop", stars: 2 },
];

const Skills = () => {
	return (
		<div>
			<h1 className='text-lg font-bold mb-3'>Ур чадвар</h1>
			<ul className='space-y-2'>
				{skillRatings.map((skill, index) => (
					<li key={index} className='flex items-center justify-between'>
						<span>{skill.name}</span>
						<div className='flex ml-2'>
							{[...Array(skill.stars)].map((_, i) => (
								<FaStar key={`filled-${i}`} className='text-yellow-400' />
							))}
							{[...Array(5 - skill.stars)].map((_, i) => (
								<FaRegStar key={`unfilled-${i}`} className='text-gray-400' />
							))}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Skills;
