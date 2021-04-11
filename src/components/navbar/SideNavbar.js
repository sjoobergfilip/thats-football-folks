import React from "react";
import { Link } from "react-router-dom";
import {
    NavSideBarContainer,
    NavSideBarContent,
} from "../styles/containers/container";
import { CgProfile, CgUserAdd, CgLogOff } from "react-icons/cg";
import { useAuth } from "../../context/AuthContext";

const SideNavbar = () => {
    const { logout } = useAuth();
    const handleLogOut = () => {
        logout();
    };

    return (
        <NavSideBarContainer>
            <NavSideBarContent>
                <Link to="/create-player">
                    <CgUserAdd color="#ffe700" size="1.8rem" />
                </Link>
                <Link to="/create-player">
                    <CgProfile color="#ffe700" size="1.8rem" />
                </Link>
            </NavSideBarContent>
            <NavSideBarContent>
                <p onClick={handleLogOut}>
                    <CgLogOff color="#ffe700" size="1.8rem" />
                </p>
            </NavSideBarContent>
        </NavSideBarContainer>
    );
};

export default SideNavbar;
