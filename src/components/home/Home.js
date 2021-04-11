import React from "react";
import { StyledFilledButton, StyledOutlineButton } from "../styles/button";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="hero-container">
                <div className="slogan-container">
                    <h1>We are That's football folks!</h1>
                    <p>
                        I'm baby bicycle rights la croix swag, try-hard drinking
                        vinegar authentic four loko jean shorts banh mi tattooed
                        retro selvage iceland. Mixtape snackwave taxidermy
                        waistcoat, farm-to-table
                    </p>
                    <StyledFilledButton>Players</StyledFilledButton>
                    <StyledOutlineButton>Become A Scout</StyledOutlineButton>
                </div>
            </div>
        </>
    );
};

export default Home;
