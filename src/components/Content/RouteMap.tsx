import { Navigate, useRoutes } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import Profile from "../Profile";
import Services from "../Services";
import { IRouteItem } from "./types";


const routeArray: IRouteItem[] = [
    {
        path: "/notifications",
        element: <div>Notifications</div>,
        isPublic: true
    }, {
        path: "/messages",
        element: <div>Messages</div>,
        isPublic: true
    }, {
        path: "/trending",
        element: <div>Trending</div>,
        isPublic: true
    }, {
        path: "/people",
        element: <div>Profiles</div>,
        isPublic: true
    }, {
        path: "/profile/:id",
        element: <Profile/>,
        isPublic: true
    }, {
        path: "/services",
        element: <Services />,
        isPublic: false
    }, {
        path: "/",
        element: <Navigate to="/services" />,
        isPublic: false
    }
]

const RouteMap = () => {
    const user = useAppSelector(state => state.loginReducer)
    let routes = useRoutes(routeArray.filter((ri: IRouteItem) => ri.isPublic || user.id))
    return routes;
}

export default RouteMap;