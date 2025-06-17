import React from "react";

const Courses = () => {
	return (
		<div>
			<strong>
				<h1>Сургалтууд</h1>
			</strong>
			<ul>
				<li>
					1234.mn
					<ul className='list-disc text-xs pl-10 '>
						<li>REST API BACKEND эхнээс дуустал</li>
						<li>REACT эхнээс дуустал</li>
						<li>JavaScript хэлийг эхнээс дуустал</li>
						<li>CSS animation</li>
						<li>CSS, HTML</li>
						<li>МАШИН СУРГАЛТ PYTHON ХЭЛНИЙ ҮНДЭС</li>
						<li>Git + github эхнээс дуустал</li>
						<li>Adobe Premiere Pro</li>
					</ul>
				</li>
				<li>
					Youtube
					<ul className='list-disc text-xs pl-10 '>
						<li>
							<a href='https://www.youtube.com/@freecodecamp' target='blank'>
								freeCodeCamp.org
							</a>
						</li>
						<li>
							<a href='https://www.youtube.com/@Codevolution' target='blank'>
								Codevolution
							</a>
						</li>
						<li>
							<a
								href='https://www.youtube.com/results?search_query=sodod'
								target='blank'>
								Sod-Od Tech Tips
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default Courses;
