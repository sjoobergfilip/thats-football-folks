import React from "react";
import { Link } from "react-router-dom";
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
                    <Link className="buttons" to="/players">
                        Players
                    </Link>
                    <Link className="buttons" to="/become-a-scout">
                        Become a Scout
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
