import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import {
	reset,
	decrement,
	increment,
	incrementByAmount,
	incrementAsync,
} from '../state/counter/counterSlice';

const Counter = () => {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div className='flex flex-col items-center mt-6'>
			<h2 className='text-3xl mb-4 text-white'>{count}</h2>
			<div className='space-x-4'>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => dispatch(reset())}>
					Reset
				</button>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => dispatch(increment())}>
					Increment
				</button>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => dispatch(decrement())}>
					Decrement
				</button>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => dispatch(incrementByAmount(5))}>
					Increment by 5
				</button>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					onClick={() => dispatch(incrementAsync(10))}>
					Increment Async by 10
				</button>
			</div>
		</div>
	);
};

export default Counter;
