import React from "react";

const About = () => {
	return (
		<div className='max-w-6xl mx-auto p-6 md:p-10 mt-8 '>
			<h2 className='text-2xl md:text-3xl font-bold text-orange-600 mb-6'>
				Миний тухай
			</h2>

			<p className='text-gray-800  leading-relaxed text-justify'>
				Балжин овогтой Тэмүүгэн. 2002.01.29-нд төрсөн, 23 настай. Дархан-Уул
				аймгийн "Математикийн гүнзгийрүүлсэн сургалттай ерөнхий боловсролын 15-р
				сургууль"-д бүрэн дунд боловсрол эзэмшиж, 2020 онд ШУТИС-ийн Дархан дахь
				салбар сургуульд Програм хангамжийн инженер мэргэжлээр элссэн.
			</p>
			<p className=' text-gray-800  leading-relaxed text-justify mb-4'>
				2021-2022 онуудад инженерийн 014 дүгээр 1жилийн цэргийг алба хаасан
			</p>

			<p className='text-gray-800 mb-6'>
				Дараах спортын төрлөөр хичээллэж, олон тэмцээнд амжилт үзүүлсэн:
			</p>

			<div className='space-y-6 text-gray-800'>
				<section>
					<h3 className='font-semibold text-xl text-gray-700'>
						🏹 Байт харваа
					</h3>
					<ul className='list-disc ml-6 mt-2 space-y-1'>
						<li>2016, 2017, 2018 – Аймгийн аварга – Алтан медаль</li>
						<li>2016.07.22 – Улсын аварга – Хүрэл медаль</li>
						<li>2019 – Хүүхдийн спортын наадам – Алтан медаль</li>
						<li>2019.04.06 – Ононгийн нэрэмжит тэмцээн – Хүрэл медаль</li>
						<li>2021 – Улаанбаатар хотын аварга – Мөнгөн медаль</li>
					</ul>
				</section>

				<section>
					<h3 className='font-semibold text-xl text-gray-700'>🥊 Шүүтбокс</h3>
					<ul className='list-disc ml-6 mt-2 space-y-1'>
						<li>2024 – Улсын аварга – Хүрэл медаль</li>
						<li>2024 – Мэргэжлийн 71кг жингийн тулаан</li>
					</ul>
				</section>

				<section>
					<h3 className='font-semibold text-xl text-gray-700'>
						🥋 Муай-тай бокс
					</h3>
					<ul className='list-disc ml-6 mt-2 space-y-1'>
						<li>2023, 2024 – Улсын аварга – Мөнгөн медаль</li>
						<li>2023 – WBC Muay Thai – Мөнгөн медаль</li>
					</ul>
				</section>

				<section>
					<h3 className='font-semibold text-xl text-gray-700'>🥇 Таеквондо</h3>
					<ul className='list-disc ml-6 mt-2 space-y-1'>
						<li>2024 – Tornado Cup – Мөнгөн медаль</li>
					</ul>
				</section>

				{/* Others */}
				<section className='pt-4 border-t'>
					<ul className='list-disc ml-6 space-y-1'>
						<li>Байт харваа спортын дэд мастер</li>
						<li>Шүүтбокс хар бүс</li>
						<li>2019 – Аймгийн шилдэг тамирчин</li>
						<li>2020 – Аймгийн спортын шилдэг сурагч</li>
					</ul>
				</section>
			</div>
		</div>
	);
};

export default About;
