import React from 'react';
import { Navigate } from 'react-router-dom';

function AdminRoute({ children, user, ...rest }) {
    if (user && user.role === 'Admin') {
        return children;
    }

    return <Navigate to="/LogIn" replace />;
}

export default AdminRoute;
