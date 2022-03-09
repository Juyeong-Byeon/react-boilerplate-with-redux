import { AppDispatch } from '..';
import { updateState } from '../util/updateState';

interface CounterState {
	count: number;
}

//Action types
const INCREASE = 'counter/increase' as const;
const DECREASE = 'counter/decrease' as const;
const INCREASE_AMOUNT = 'counter/increase_amount' as const;

// Action Creators
export const increaseCounter = () => ({ type: INCREASE });
export const decreaseCounter = () => ({ type: DECREASE });
export const increaseAmount = (amount: number) => ({
	type: INCREASE_AMOUNT,
	payload: amount,
});

export const increaseCounterAsync = () => (dispatch: AppDispatch, getState: () => CounterState) => {
	console.log(getState());
	setTimeout(() => dispatch(increaseCounter()), 1000);
};
export const decreaseCounterAsync = () => (dispatch: AppDispatch, getState: () => CounterState) => {
	console.log(getState());
	setTimeout(() => dispatch(decreaseCounter()), 1000);
};

// Action
type CounterAction =
	| ReturnType<typeof increaseCounter>
	| ReturnType<typeof decreaseCounter>
	| ReturnType<typeof increaseAmount>;

const initialState: CounterState = { count: 0 };

export default function counter(state: CounterState = initialState, action: CounterAction) {
	switch (action.type) {
		case INCREASE:
			return updateState(state, (state) => {
				state.count++;
			});

		case DECREASE:
			return updateState(state, (state) => {
				state.count--;
			});
		case INCREASE_AMOUNT:
			return updateState(state, (state) => {
				state.count += action.payload;
			});

		default:
			return state;
	}
}
