import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const Stats = React.lazy(() => import("../pages/Stats"));
const App = React.lazy(() => import("../App"));
const Home = React.lazy(() => import("../pages/Home"));


const RouterConfig = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },

                {
                    path: "/stats",
                    element: <Stats />
                }
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default RouterConfig;
