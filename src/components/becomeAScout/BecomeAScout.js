import React from "react";
import emailjs from "emailjs-com";

import {
    BecomeAScoutContainer,
    ContentContainer,
    FormContainer,
} from "../styles/containers/container";
import { HeroText, TeamText } from "../styles/text/Text";
import { StyledLabel, PlayerInputFull, TextArea } from "../styles/label/label";
import { SubmitForm } from "../styles/button/button";

const BecomeAScout = () => {
    const onSubmit = (e) => {
        console.log("I will send the form");
        e.preventDefault();
        emailjs
            .sendForm(
                "service_pqeg73x",
                "template_we6polu",
                e.target,
                "user_z39orhdyyhuxjW8rpQ1Z8"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <>
            <BecomeAScoutContainer>
                <ContentContainer>
                    <HeroText>Do you want to become a scout?</HeroText>
                    <TeamText>
                        'm baby cold-pressed pork belly swag, hexagon keffiyeh
                        master cleanse XOXO flannel locavore plaid skateboard
                        fanny pack seitan before they sold out enamel pin.
                        Crucifix hexagon pour-over umami. Bushwick chia
                        authentic gentrify selvage microdosing copper mug{" "}
                    </TeamText>
                    <ContentContainer>
                        <form onSubmit={onSubmit}>
                            <FormContainer>
                                <StyledLabel>Name</StyledLabel>
                                <PlayerInputFull
                                    type="text"
                                    placeholder="wright your name"
                                    name="name"
                                />
                            </FormContainer>
                            <FormContainer>
                                <StyledLabel>email</StyledLabel>
                                <PlayerInputFull
                                    type="email"
                                    placeholder="where can we contact you?"
                                    name="email"
                                />
                            </FormContainer>
                            <FormContainer>
                                <StyledLabel>Description</StyledLabel>
                                <TextArea
                                    type="description"
                                    placeholder="describe way you want to become a member in our team"
                                    name="description"
                                />
                            </FormContainer>
                            <SubmitForm type="submit" value="Send" />
                        </form>
                    </ContentContainer>
                </ContentContainer>
            </BecomeAScoutContainer>
        </>
    );
};

export default BecomeAScout;
