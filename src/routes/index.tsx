import { FC, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Page1 from '_Pages/Page1';
const Page2 = lazy(() => import('_Pages/Page2'));
const Page404 = lazy(() => import('_Pages/Page404'));

const Routing: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path="/page-2" element={<Page2 />} />
                <Route element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
