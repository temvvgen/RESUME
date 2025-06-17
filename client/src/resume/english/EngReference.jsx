import React from "react";

const EngReference = () => {
	return (
		<div>
			<strong>
				<h1>Reference</h1>
			</strong>

			<ul className='list-disc pl-4 '>
				<li>Name: E. Itgelsaikhan</li>
				<li>Position: Lecturer of Software Engineering</li>
				<li>School of Technology, MUST – Darkhan-Uul province</li>
				<li>Phone: 99887615</li>
				<li className='border-b-1 w-47'>
					Email:{" "}
					<a
						href='mailto:itgelsaikhan@stda.edu.mn'
						target='_blank'
						rel='noopener noreferrer'>
						itgelsaikhan@stda.edu.mn
					</a>
				</li>
			</ul>
		</div>
	);
};

export default EngReference;
