import { StyledOutlineButton } from "../styles/button/button";
import { useAuth } from "../../context/AuthContext";
import React from "react";
import SideNavbar from "../navbar/SideNavbar";

const Dashboard = () => {
    const { logout } = useAuth();

    const handelClick = () => {
        logout();
    };
    return (
        <>
            <SideNavbar />
        </>
    );
};

export default Dashboard;
