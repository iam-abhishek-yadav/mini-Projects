import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';

export const Quotes = () => {
	const navigate = useNavigate();
	return (
		<div className='flex mx-16 flex-col justify-center pb-10 '>
			<h1 className='text-6xl font-bold'>Play Plinko!</h1>
			<h3 className='mt-4 text-xl mb-4'>
				Plinko lets players drop a ball down a triangular pin pyramid to reach a
				multiplier. Inspired by Pachinko, this game allows customization of risk
				and multipliers, making it perfect for everyone at our online casino!
			</h3>
			<Button
				className='hover:bg-green-600 rounded-2xl'
				onClick={() => navigate('/game')}>
				Play
			</Button>
		</div>
	);
};
