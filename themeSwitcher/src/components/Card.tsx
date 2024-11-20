import React from "react";

const Card: React.FC = () => {
	const starIcons = Array.from({ length: 4 }, (_, index) => (
		<svg
			key={index}
			className='w-4 h-4 text-yellow-500 mr-1'
			aria-hidden='true'
			xmlns='http://www.w3.org/2000/svg'
			fill='currentColor'
			viewBox='0 0 22 20'>
			<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
		</svg>
	));
	return (
		<div className='w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
			<img
				className='p-5 rounded-t-lg object-contain w-full h-auto'
				src='https://m.media-amazon.com/images/I/51wOosVNYuL._AC_SX425_.jpg'
				alt='product_image1'
			/>
			<div className='px-5 py-3'>
				<h5 className='text-lg font-semibold tracking-wide text-gray-900 dark:text-white'>
					Apple Watch Series 7 GPS
				</h5>
				<div className='flex items-center mt-1 mb-3'>{starIcons}</div>
				<div className='flex items-center justify-between'>
					<span className='text-xl font-bold text-gray-900 dark:text-white'>
						$189.97
					</span>
					<button className='text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
