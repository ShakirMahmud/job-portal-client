import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Home from "../pages/home/Home";
import JobDetails from "../pages/JobDetails";

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
                element: <JobDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
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