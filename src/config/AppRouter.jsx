import { createBrowserRouter } from 'react-router'
import App from "../App";
import LandingPage from '../pages/landingPage/LandingPage';
import SummaryPage from '../pages/summaryPage/SummaryPage';
import HistoryPage from '../pages/historyPage/historyPage';
import MazoPage from '../pages/mazoPage/MazoPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
              {
                index: true,
                element: <LandingPage />
            },
            {
                path: '/mazo',
                element: <MazoPage />
            },
            {
                path: '/summary',
                element: <SummaryPage />
            },
            {
                path: '/history',
                element: <HistoryPage />
            }
        ]
    }

])