import React from "react";
import SideNavBar from "../navbar/SideNavbar";
import {
    DashboardContainer,
    ContentContainer,
    TwoInputContainer,
    OneInputContainer,
    FormContainer,
} from "../styles/containers/container";
import { HeroTextOutline } from "../styles/text/Text";
import {
    PlayerInput,
    StyledLabel,
    PlayerSelect,
    PlayerOption,
    PlayerInputFull,
} from "../styles/label/label";

const CreatePlayer = () => {
    return (
        <>
            <SideNavBar />
            <DashboardContainer>
                <HeroTextOutline>Add a new player</HeroTextOutline>
                <ContentContainer>
                    <TwoInputContainer>
                        <FormContainer>
                            <StyledLabel>First Name</StyledLabel>
                            <PlayerInput type="text" placeholder="Name" />
                        </FormContainer>
                        <FormContainer>
                            <StyledLabel>Second Name</StyledLabel>
                            <PlayerInput type="text" placeholder="Namesson" />
                        </FormContainer>
                    </TwoInputContainer>
                    <FormContainer>
                        <StyledLabel>Division</StyledLabel>
                        <PlayerSelect name="division">
                            <PlayerOption disabled selected value="division">
                                Division
                            </PlayerOption>
                            <PlayerOption value="allsvenskan">
                                Allsvenskan
                            </PlayerOption>
                            <PlayerOption value="superettan">
                                Superettan
                            </PlayerOption>
                            <PlayerOption value="division-1">
                                Division 1
                            </PlayerOption>
                            <PlayerOption value="division-2">
                                Division 2
                            </PlayerOption>
                            <PlayerOption value="division-3">
                                Division 3
                            </PlayerOption>
                            <PlayerOption value="division-4">
                                Division 4
                            </PlayerOption>
                        </PlayerSelect>
                    </FormContainer>
                    <FormContainer>
                        <StyledLabel>Team</StyledLabel>
                        <PlayerInputFull type="text" placeholder="Team" />
                    </FormContainer>
                    <FormContainer>
                        <StyledLabel>Position</StyledLabel>
                        <PlayerSelect name="position">
                            <PlayerOption disabled selected value="Position">
                                Position
                            </PlayerOption>
                            <PlayerOption value="mv">GK</PlayerOption>
                            <PlayerOption value="RB">RB</PlayerOption>
                            <PlayerOption value="cb">CB</PlayerOption>
                            <PlayerOption value="lb">LB</PlayerOption>
                            <PlayerOption value="rm">RM</PlayerOption>
                            <PlayerOption value="cdm">CDM</PlayerOption>
                            <PlayerOption value="cam">CAM</PlayerOption>
                            <PlayerOption value="lm">LM</PlayerOption>
                            <PlayerOption value="st">ST</PlayerOption>
                        </PlayerSelect>
                    </FormContainer>
                    <FormContainer>
                        <StyledLabel>Coverage</StyledLabel>
                        <PlayerSelect name="position">
                            <PlayerOption disabled selected value="coverage">
                                Coverage
                            </PlayerOption>
                            <PlayerOption value="1-3">1-3 Games</PlayerOption>
                            <PlayerOption value="4-6">4-6 Games</PlayerOption>
                            <PlayerOption value="7-10">7-10 Games</PlayerOption>
                            <PlayerOption value="+10">+10 Games</PlayerOption>
                        </PlayerSelect>
                    </FormContainer>
                    <FormContainer>
                        <StyledLabel>Potential</StyledLabel>
                        <PlayerSelect name="potential">
                            <PlayerOption disabled selected value="Position">
                                Potential
                            </PlayerOption>
                            <PlayerOption value="1">1</PlayerOption>
                            <PlayerOption value="2">2</PlayerOption>
                            <PlayerOption value="3">3</PlayerOption>
                            <PlayerOption value="4">4</PlayerOption>
                            <PlayerOption value="5">5</PlayerOption>
                        </PlayerSelect>
                    </FormContainer>
                    <FormContainer>
                        <StyledLabel>Contract</StyledLabel>
                        <PlayerSelect name="Contract">
                            <PlayerOption disabled selected value="Position">
                                Contract to
                            </PlayerOption>
                            <PlayerOption value="2021" aria-required="true">
                                Free Transfer
                            </PlayerOption>
                            <PlayerOption value="2021">2021</PlayerOption>
                            <PlayerOption value="2022">2022</PlayerOption>
                            <PlayerOption value="2023">2023</PlayerOption>
                            <PlayerOption value="2024">2024</PlayerOption>
                            <PlayerOption value="2025">2025</PlayerOption>
                            <PlayerOption value="2026">2026</PlayerOption>
                        </PlayerSelect>
                    </FormContainer>
                    <FormContainer>
                        <StyledLabel>Strength</StyledLabel>
                        <PlayerInputFull type="text" placeholder="Strength" />
                    </FormContainer>
                    <FormContainer>
                        <StyledLabel>Weakness</StyledLabel>
                        <PlayerInputFull type="text" placeholder="Weakness" />
                    </FormContainer>
                    <FormContainer>
                        <StyledLabel>Description</StyledLabel>
                        <PlayerInputFull
                            type="text"
                            placeholder="Description"
                        />
                    </FormContainer>
                </ContentContainer>
            </DashboardContainer>
        </>
    );
};

export default CreatePlayer;
