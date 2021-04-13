import { useAuth } from "../../context/AuthContext";
import React from "react";
import SideNavbar from "../navbar/SideNavbar";
import { DashboardContainer } from "../styles/containers/container";

const Dashboard = () => {
    return (
        <>
            <SideNavbar />
            <DashboardContainer>
                <h1>Hej Filip</h1>
            </DashboardContainer>
        </>
    );
};

export default Dashboard;
