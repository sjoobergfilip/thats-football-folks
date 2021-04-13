import React from "react";
import SideNavBar from "../navbar/SideNavbar";
import { DashboardContainer } from "../styles/containers/container";

const MyPlayers = () => {
    return (
        <>
            <SideNavBar />
            <DashboardContainer>
                <h1>THis is My MyPlayers page</h1>
            </DashboardContainer>
        </>
    );
};

export default MyPlayers;
