import { Route, Switch } from 'react-router-dom';

import Counter from '../Counter';
import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
`;

export default function Main() {
	return (
		<StyledMain>
			<Switch>
				<Route path="/counter">
					<Counter />
				</Route>
			</Switch>
		</StyledMain>
	);
}
