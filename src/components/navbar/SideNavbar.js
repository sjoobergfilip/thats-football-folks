import React from "react";
import { Link } from "react-router-dom";
import {
    NavSideBarContainer,
    NavSideBarContent,
} from "../styles/containers/container";
import { useAuth } from "../../context/AuthContext";
import {
    AiOutlineDashboard as DashboardIcon,
    AiOutlineIdcard,
    AiOutlineLogout,
    AiOutlineUserAdd,
} from "react-icons/ai";

const SideNavbar = () => {
    const { logout } = useAuth();
    const handleLogOut = () => {
        logout();
    };

    return (
        <NavSideBarContainer>
            <NavSideBarContent>
                <Link to="/dashboard">
                    <DashboardIcon color="#ffe700" size="1.8rem" />
                </Link>
                <Link to="/dashboard/create-player">
                    <AiOutlineUserAdd color="#ffe700" size="1.8rem" />
                </Link>
                <Link to="/dashboard/my-players">
                    <AiOutlineIdcard color="#ffe700" size="1.8rem" />
                </Link>
            </NavSideBarContent>
            <NavSideBarContent>
                <p onClick={handleLogOut}>
                    <AiOutlineLogout color="#ffe700" size="1.8rem" />
                </p>
            </NavSideBarContent>
        </NavSideBarContainer>
    );
};

export default SideNavbar;
