import React from "react";
import profile from "../../assets/profile.jpg";
import { FaPhoneAlt, FaGithub, FaFacebook } from "react-icons/fa";
import { CiMail, CiLocationOn, CiLink } from "react-icons/ci";

const Contact = () => {
	return (
		<div className='bg-sky-800 text-white p-6 rounded-xl shadow-xl w-full max-w-md mx-auto '>
			<div className='w-50 h-50 lg:w-36 lg:h-36 rounded-full bg-white p-1 mx-auto mb-6 shadow-md'>
				<img
					src={profile}
					className='w-full h-full object-cover rounded-full border-2 border-white'
					alt='Profile'
				/>
			</div>

			<ul className='space-y-4 text-sm'>
				<li className='flex items-center gap-3'>
					<FaPhoneAlt className='text-blue-400' />
					<span>95727477</span>
				</li>
				<li className='flex items-center gap-3'>
					<CiMail className='text-yellow-300 text-xl' />
					<a
						href='mailto:temvvgenbaljin0129@gmail.com'
						className='hover:underline text-blue-200'>
						temvvgenbaljin0129@gmail.com
					</a>
				</li>

				<li className='flex items-center gap-3'>
					<CiLocationOn className='text-green-300 text-xl' />
					<a
						href='https://www.google.com/maps?q=FX96+3H6,+Darhan,+Darkhan-Uul'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:underline text-blue-200'>
						Дархан-Уул аймаг
					</a>
				</li>

				<li className='flex items-center gap-3'>
					<FaGithub className='text-gray-300' />
					<a
						href='https://github.com/temvvgen'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:underline text-blue-200'>
						github.com/temvvgen
					</a>
				</li>

				<li className='flex items-center gap-3'>
					<FaFacebook className='text-blue-500' />
					<a
						href='https://www.facebook.com/temvvgen.baljin/'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:underline text-blue-200'>
						facebook.com/temvvgen.baljin
					</a>
				</li>

				<li className='flex items-center gap-3'>
					<CiLink className='text-white' />
					<span>-</span>
				</li>
			</ul>
			<hr className='mt-4 border-t-1 border-white  ' />
		</div>
	);
};

export default Contact;
