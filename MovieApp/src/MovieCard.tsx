import React from 'react';

interface MovieProps {
	movie: {
		Year: string;
		Poster: string;
		Title: string;
		Type: string;
	};
}

const MovieCard: React.FC<MovieProps> = ({
	movie: { Year, Poster, Title, Type },
}: MovieProps) => {
	return (
		<div className='movie w-72 h-96 mx-4 my-6 relative rounded-lg overflow-hidden shadow-md transition-transform duration-400 ease-in-out transform hover:scale-105'>
			<div className='absolute top-0 left-0 w-full bg-opacity-0 opacity-0 p-4 text-white'>
				<p>{Year}</p>
			</div>

			<div>
				<img
					src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'}
					alt={Title}
					className='w-full h-full'
				/>
			</div>

			<div className='absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 p-4'>
				<span className='font-semibold text-xs uppercase tracking-wide text-gray-300'>
					{Type}
				</span>
				<h3 className='text-white mt-1'>{Title}</h3>
			</div>
		</div>
	);
};

export default MovieCard;
