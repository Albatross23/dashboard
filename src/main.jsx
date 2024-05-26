import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Dashboard from './Dashboard'
import ActivityReport from './Activity_report'
import AppUsage from './App_usage'
import Home from './Home.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/Dashboard',
        element: <Dashboard />,
      },
      {
        path: '/Activity_report',
        element: <ActivityReport />,
      },
      {
        path: '/App_usage',
        element: <AppUsage />,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)