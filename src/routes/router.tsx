import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Faculties from '../pages/Faculties';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import Applicant from '../pages/Applicant';
import CollegeApp from '../pages/CollgeApp';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />, 
        children: [
            { path: '/', element: <Home /> },
            { path: '/faculties', element: <Faculties /> },
            { path: '/about', element: <AboutUs /> },
            { path: '/contact', element: <Contact /> },
            { path: '/applicant', element: <Applicant /> },
            { path: '/college-app', element: <CollegeApp /> },
        ],
    },
]);
