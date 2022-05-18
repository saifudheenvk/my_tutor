import { FC } from "react";
import { Navigate, useRoutes } from "react-router-dom";
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
        element: <div>Profile</div>,
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

interface IProps {
    user: any
}

const RouteMap: FC<IProps> = (props) => {
    let routes = useRoutes(routeArray.filter((ri: IRouteItem) => ri.isPublic || props.user.id))
    return routes
}

export default RouteMap;