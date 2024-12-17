import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Home from "../pages/home/Home";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications";
import AddJob from "../pages/AddJob";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        errorElement: <h1>404</h1>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/myApplications',
                element: <PrivateRoute><MyApplications/></PrivateRoute>,
                
            },
            {
                path: '/addJob',
                element: <PrivateRoute><AddJob/></PrivateRoute>,
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path:'/login',
                element: <SignIn/>
            }
        ]
    }
])