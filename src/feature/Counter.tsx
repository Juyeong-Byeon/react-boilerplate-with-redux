import { decreaseCounter, increaseCounter } from '../modules/counter';
import { useAppDispatch, useAppSelector } from '../hook/reduxHooks';

import React from 'react';

export default function Counter() {
	const dispatch = useAppDispatch();
	const count = useAppSelector((store) => store.counter.count);

	const onClickIncrease = () => dispatch(increaseCounter());
	const onClickDecrease = () => dispatch(decreaseCounter());
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={onClickIncrease}>+</button>
			<button onClick={onClickDecrease}>-</button>
		</div>
	);
}
