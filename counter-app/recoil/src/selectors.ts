import { selector } from 'recoil';
import { counterState } from './atoms';

export const doubledCounterState = selector({
	key: 'doubledCounterState',
	get: ({ get }) => {
		const count = get(counterState);
		return count * 2;
	},
});
