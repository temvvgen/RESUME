import React from "react";

const EngCourses = () => {
	return (
		<div>
			<strong>
				<h1>Courses</h1>
			</strong>
			<ul>
				<li>
					1234.mn
					<ul className='list-disc text-xs pl-10 '>
						<li>REST API Backend from scratch</li>
						<li>React from scratch</li>
						<li>JavaScript language from scratch</li>
						<li>CSS animation</li>
						<li>CSS, HTML</li>
						<li>Machine Learning Basics with Python</li>
						<li>Git + GitHub from scratch</li>
						<li>Adobe Premiere Pro</li>
					</ul>
				</li>
				<li>
					YouTube
					<ul className='list-disc text-xs pl-10 '>
						<li>
							<a
								href='https://www.youtube.com/@freecodecamp'
								target='_blank'
								rel='noopener noreferrer'>
								freeCodeCamp.org
							</a>
						</li>
						<li>
							<a
								href='https://www.youtube.com/@Codevolution'
								target='_blank'
								rel='noopener noreferrer'>
								Codevolution
							</a>
						</li>
						<li>
							<a
								href='https://www.youtube.com/results?search_query=sodod'
								target='_blank'
								rel='noopener noreferrer'>
								Sod-Od Tech Tips
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default EngCourses;
