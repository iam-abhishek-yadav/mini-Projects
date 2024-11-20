import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

export const incrementAsync = createAsyncThunk<number, number>(
	'counter/incrementAsync',
	async (amount: number) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return amount;
	}
);

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		reset: (state) => {
			state.value = 0;
		},
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(incrementAsync.pending, (state) => {
				console.log('incrementAsync.pending');
			})
			.addCase(
				incrementAsync.fulfilled,
				(state, action: PayloadAction<number>) => {
					state.value += action.payload;
				}
			);
	},
});

export const { reset, increment, decrement, incrementByAmount } =
	counterSlice.actions;

export default counterSlice.reducer;
