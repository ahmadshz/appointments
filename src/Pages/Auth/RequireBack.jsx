import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

export const RequireBack = () => {

    const cookies = new Cookies()
    const token = cookies.get('auth_token')

    if(token) {
        return <Outlet />
    } else {
        return <Navigate to="/login" replace />
    }
};