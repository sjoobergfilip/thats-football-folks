import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AuthRouts = (props) => {
    const { currentUser } = useAuth();

    return currentUser ? <Route {...props} /> : <Navigate to="/login" />;
};

export default AuthRouts;
