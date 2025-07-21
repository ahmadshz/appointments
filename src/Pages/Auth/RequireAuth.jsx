import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';

export const RequireAuth = ({ allowRole }) => {
    const cookies = new Cookies();
    const token = cookies.get('auth_token');


    try {
        const decoded = jwtDecode(token);
        const userRole = decoded.role;

        if (allowRole.includes(userRole)) {
            return <Outlet />;
        } else {
            return <Navigate to="/unauthorized" replace />;
        }
    } catch {
        return <Navigate to="/login" replace />;
    }
};
