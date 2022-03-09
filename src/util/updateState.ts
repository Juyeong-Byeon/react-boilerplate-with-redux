import { produce } from 'immer';
export function updateState<STATE>(state: STATE, updateFunction: (state: STATE) => void) {
	return produce(state, updateFunction);
}
