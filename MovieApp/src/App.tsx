import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

interface Movie {
	imdbID: string;
	Title: string;
	Year: string;
	Poster: string;
	Type: string;
}

const API_URL = 'http://www.omdbapi.com?apikey=96b17e94';
const RESULTS_PER_PAGE = 10;

const App: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('batman');
	const [movies, setMovies] = useState<Movie[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalResults, setTotalResults] = useState<number>(0);

	useEffect(() => {
		searchMovies('Batman', currentPage);
	}, []);

	const searchMovies = async (title: string, page: number) => {
		try {
			const response = await fetch(`${API_URL}&s=${title}&page=${page}`);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			if (data.Error) {
				throw new Error(data.Error);
			}
			setMovies(data.Search || []);
			setTotalResults(parseInt(data.totalResults) || 0);
			setError(null);
		} catch (error) {
			setMovies([]);
			setTotalResults(0);
			setError('Too many results, try a bigger text.');
		}
	};

	const handleSearch = () => {
		setCurrentPage(1);
		searchMovies(searchTerm, 1);
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		searchMovies(searchTerm, page);
	};

	const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);

	const isSearchActive = searchTerm.trim() !== '';

	return (
		<div className='app bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center'>
			<h1
				className='text-3xl mt-5 font-bold bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent inline-block cursor-pointer'
				onClick={() => {
					setSearchTerm('Batman');
					setMovies([]);
					setError(null);
					setCurrentPage(1);
					setTotalResults(0);
					searchMovies('Batman', 1);
				}}>
				MovieApp
			</h1>

			<div className='search w-3/4 mt-8 flex items-center justify-between p-4 rounded-full bg-gray-800 shadow-md'>
				<input
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onKeyDown={handleKeyPress}
					placeholder='Search for movies'
					className='flex-1 bg-transparent outline-none text-white placeholder-gray-400'
				/>
				<img
					src={SearchIcon}
					alt='search'
					onClick={handleSearch}
					className={`w-8 h-8 cursor-pointer ml-2 ${
						isSearchActive ? 'active' : ''
					}`}
				/>
			</div>

			{error && (
				<div className='error text-red-500 text-center mt-4'>
					<p>{error}</p>
				</div>
			)}

			{movies.length > 0 ? (
				<div className='container mt-8 flex flex-wrap place-content-around'>
					{movies.map((movie) => (
						<MovieCard
							key={movie.imdbID}
							movie={movie}
						/>
					))}
				</div>
			) : (
				!error && (
					<div className='empty text-center mt-8'>
						<h2>No movies found</h2>
					</div>
				)
			)}

			{totalPages > 1 && (
				<div className='pagination flex items-center justify-center mt-8 space-x-4'>
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className='px-4 py-2 text-white bg-gray-800 rounded-md shadow-md cursor-pointer'>
						Previous
					</button>
					<span className='text-white'>
						{currentPage} / {totalPages}
					</span>
					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className='px-4 py-2 text-white bg-gray-800 rounded-md shadow-md cursor-pointer'>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default App;
