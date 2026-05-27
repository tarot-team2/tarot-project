import { createBrowserRouter } from 'react-router'
import App from "../App";
import LandingPage from '../pages/landingPage/landingPage';
import LecturePage from '../pages/lecturePage/LecturePage';
import SummaryPage from '../pages/summaryPage/SummaryPage';
import HistoryPage from '../pages/historyPage/HistoryPage';

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
              path: '/lecture',
              element: <LecturePage/>
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