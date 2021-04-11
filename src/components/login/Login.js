import React, { useRef, useState } from "react";
import { LoginContainer, LoginContent } from "../styles/containers/container";
import { StyledOutlineButton } from "../styles/button/button";
import { StyledInput, StyledLabel } from "../styles/label/label";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/dashboard");
        } catch (e) {
            setError(
                "Could not log in. Please check your email address and your password."
            );
            setLoading(false);
        }
    };
    return (
        <>
            <LoginContainer>
                <LoginContent>
                    {error && <div>{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <StyledLabel>Email</StyledLabel>
                        <StyledInput
                            ref={emailRef}
                            type="text"
                            placeholder="email@mail.com"
                        />
                        <StyledLabel>Password</StyledLabel>
                        <StyledInput
                            ref={passwordRef}
                            type="password"
                            placeholder="password"
                        />
                        <StyledOutlineButton>Log In</StyledOutlineButton>
                    </form>
                </LoginContent>
            </LoginContainer>
        </>
    );
};

export default Signup;
