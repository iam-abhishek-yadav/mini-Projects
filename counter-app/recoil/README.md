- **Atoms**:

  - Atoms represent units of state in Recoil. They are akin to React's `useState`, but they can be used across components.

    ```ts
    import { atom } from 'recoil';

    export const counterState = atom({
    	key: 'counterState',
    	default: 0,
    });
    ```

  - Here `counterState` is an atom that holds a numerical value (`default: 0`).

- **Selectors**:

  - Selectors derive computed state from atoms or other selectors. They enable efficient composition and transformation of state.

    ```ts
    import { selector } from 'recoil';

    export const doubledCounterState = selector({
    	key: 'doubledCounterState',
    	get: ({ get }) => {
    		const count = get(counterState);
    		return count * 2;
    	},
    });
    ```

  - Here, `doubledCounterState` is a selector that doubles the value of `counterState`.

- **RecoilRoot**:

  - Recoil's provider component (`RecoilRoot`) wraps your application to provide access to Recoil state.

    ```ts
    import React from 'react';
    import { RecoilRoot } from 'recoil';
    import Counter from './Counter';

    const App: React.FC = () => {
    	return (
    		<RecoilRoot>
    			<Counter />
    		</RecoilRoot>
    	);
    };

    export default App;
    ```

- **State Declaration**: Define atoms and selectors to represent your application's state.
- **State Consumption**:
  - Use `useRecoilState` to read and write atom values within components.
  - Use `useRecoilValue` to read selector values within components.
- **State Updates**:
  - Modify state using setters returned by `useRecoilState`.
  - Recoil automatically manages updates across components that subscribe to the same state.
