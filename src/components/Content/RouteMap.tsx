import { FC } from "react";
import { useRoutes } from "react-router-dom";
import { IRouteItem } from "./types";


const routeArray: IRouteItem[] = [
    {
        path: "/sign-in",
        element: <div>Login</div>,
        isPublic: true
    }, {
        path: "/sign-up",
        element: <div>Sign Up</div>,
        isPublic: true
    }, {
        path: "/profile/:id",
        element: <div>Profile</div>,
        isPublic: true
    }, {
        path: "/forgot-password",
        element: <div>Forgot Password</div>,
        isPublic: true
    }, {
        path: "/",
        element: <div>Account</div>,
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