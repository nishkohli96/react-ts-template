import { FC, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Page1 from 'pages/Page1';
const Page404 = lazy(() => import('pages/Page404'));

const Routing: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Page1 />} />
				<Route element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;
