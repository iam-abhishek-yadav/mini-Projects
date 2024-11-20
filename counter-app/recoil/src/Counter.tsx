import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { counterState } from './atoms';
import { doubledCounterState } from './selectors';

const Counter: React.FC = () => {
	const [count, setCount] = useRecoilState(counterState);
	const doubledCount = useRecoilValue(doubledCounterState);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-900'>
			<div className='bg-slate-300 p-8 shadow-md rounded-md'>
				<h1 className='text-2xl font-bold mb-4'>Counter App</h1>
				<p className='text-lg mb-2'>Count: {count}</p>
				<p className='text-lg mb-4'>Doubled Count: {doubledCount}</p>
				<div className='space-x-4'>
					<button
						className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-blue-600'
						onClick={increment}>
						Increment
					</button>
					<button
						className='px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-600'
						onClick={decrement}>
						Decrement
					</button>
				</div>
			</div>
		</div>
	);
};

export default Counter;
