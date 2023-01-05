import { createBrowserRouter,useRoutes, RouteObject } from 'react-router-dom';
import { Router as RemixRouter} from "@remix-run/router";
import Home from '../pages/Home/Home';
import Introduction from '../pages/Introduction/Introduction';
import Dashboard from '../pages/Dashboard/Dashboard';

// this is first way

// const RouteConfig = () => {
//     let routes : RouteObject[] = [
//         {
//             path: "/",
//             element: <Home/>,
//             children: [
//                 {
//                     path: 'introduction',
//                     element: <Introduction/>
//                 }
//             ]
//         }
//     ]
//     let route = useRoutes(routes)
//     return route
// }

// this is second way

const RouteConfig: RemixRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: 'introduction',
                element: <Introduction/>
            },
            {
                path: 'dashboard',
                element: <Dashboard/>
            }
        ]
    }
])

export default RouteConfig;