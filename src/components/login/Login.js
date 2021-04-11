import React from "react";
import { LoginContainer, LoginContent } from "../styles/containers/container";
import { StyledOutlineButton } from "../styles/button/button";
import { StyledInput, StyledLabel } from "../styles/label/label";

const Signup = () => {
    return (
        <>
            <LoginContainer>
                <LoginContent>
                    <StyledLabel>Email</StyledLabel>
                    <StyledInput type="text" placeholder="email@mail.com" />
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput type="text" placeholder="password" />
                    <StyledOutlineButton>Log In</StyledOutlineButton>
                </LoginContent>
            </LoginContainer>
        </>
    );
};

export default Signup;
