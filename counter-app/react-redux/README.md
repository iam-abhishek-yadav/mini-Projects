- **Redux Store**

  ```ts
  import { configureStore } from '@reduxjs/toolkit';
  import counterReducer from './counter/counterSlice';

  export const store = configureStore({
  	reducer: {
  		counter: counterReducer,
  	},
  });

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  ```

  - **Purpose**:

    - Manages the application's state in a single object.
    - Provides a centralized location to access and update the application state.

  - **Key Points**:
    - **`Single Source of Truth`**: Redux store holds the entire state tree of the application.
    - **`Access State`**: You can access the current state using `store.getState()`.
    - **`Update State`**: State changes are made by dispatching actions to the store.

- **Redux Slice**

  ```ts
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';

  const initialState = { value: 0 };

  const counterSlice = createSlice({
  	name: 'counter',
  	initialState,
  	reducers: {
  		reset: (state) => {
  			state.value = 0;
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

  export const { reset, incrementByAmount } = counterSlice.actions;
  export default counterSlice.reducer;
  ```

  - **Purpose**:

    - Defines a part (or slice) of the application's state and its related logic.
    - Helps in organizing reducers and actions that operate on a specific portion of the state.

  - **Key Points**:
    - **`Reducer and Actions`**: A slice includes both reducers (functions that specify how the state changes) and action creators (functions that create actions).
    - **`Modular State Management`**: Encapsulates state and behavior related to a particular feature or domain.

- **Actions**

  ```ts
  export const incrementCounter = () => ({
  	type: 'INCREMENT_COUNTER',
  });

  export const decrementCounter = () => ({
  	type: 'DECREMENT_COUNTER',
  });
  ```

  - **Purpose**:

    - Describes the intention to change the state.
    - Represents the payload of information that sends data from the application to the Redux store.

  - **Key Points**:
    - **`Plain JavaScript Objects`**: Actions are plain objects with a `type` field that indicates the type of action.
    - **`Dispatching Actions`**: Actions are dispatched using `store.dispatch(action)`.
    - **`Handled by Reducers`**: Reducers specify how the state should change in response to actions.

- **Reducers**

  ```ts
  const counterReducer = (state = 0, action) => {
  	switch (action.type) {
  		case 'INCREMENT_COUNTER':
  			return state + 1;
  		case 'DECREMENT_COUNTER':
  			return state - 1;
  		default:
  			return state;
  	}
  };

  export default counterReducer;
  ```

  - **Purpose**:

    - Specify how the application's state changes in response to actions sent to the store.
    - Are pure functions that take the previous state and an action, and return the next state.

  - **Key Points**:
    - **`Pure Functions`**: Reducers should not mutate the state directly; instead, they return a new state object.
    - **`Single Responsibility`**: Each reducer manages a specific slice of the application's state tree.
    - **`Combined with combineReducers`**: Multiple reducers are combined into a single root reducer using `combineReducers`.

- **Async Thunks (Optional)**

  ```ts
  import { createAsyncThunk } from '@reduxjs/toolkit';

  export const incrementAsync = createAsyncThunk<number, number>(
  	'counter/incrementAsync',

  	async (amount: number) => {
  		await new Promise((resolve) => setTimeout(resolve, 1000));
  		return amount;
  	}
  );
  ```

  - **Purpose**:

    - Handles asynchronous logic, like fetching data from an API, inside Redux actions.
    - Ensures that Redux actions can be dispatched asynchronously.

  - **Key Points**:
    - **`createAsyncThunk`**: Helper function from Redux Toolkit to define async actions that dispatch multiple lifecycle actions: `pending`, `fulfilled`, and `rejected`.
    - **`Middleware`**: Asynchronous operations often use middleware like `redux-thunk` or are directly handled by Redux Toolkit's `createAsyncThunk`.
    - **`Error Handling`**: Provides built-in error handling for asynchronous operations.
