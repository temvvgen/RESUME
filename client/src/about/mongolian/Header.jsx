import React from "react";
import profile2 from "../../assets/profile2.jpg";

const Header = () => {
	return (
		<div>
			<div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8'>
				<div className='w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg'>
					<img
						src={profile2}
						alt='Profile'
						className='w-full h-full object-cover  '
					/>
				</div>

				<div className='text-center md:text-right'>
					<h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
						Балжин Тэмүүгэн
					</h1>
					<p className='text-lg md:text-xl text-gray-600 mt-2'>
						Програм хангамжийн инженерийн оюутан
					</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
