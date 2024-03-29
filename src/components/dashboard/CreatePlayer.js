import React, { useRef, useState, useEffect } from "react";
import SideNavBar from "../navbar/SideNavbar";
import {
    DashboardContainer,
    ContentContainer,
    TwoInputContainer,
    FormContainer,
    ErrorMsg,
} from "../styles/containers/container";
import { HeroTextOutline } from "../styles/text/Text";
import { StyledOutlineButton } from "../styles/button/button";
import {
    PlayerInput,
    StyledLabel,
    PlayerSelect,
    PlayerOption,
    PlayerInputFull,
} from "../styles/label/label";
import { LoadingContainer, SpinnerImg } from "../styles/dashboard/Style";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase/Firebase";
import Spinner from "./Ellipsis-3.6s-51px.gif";

const CreatePlayer = () => {
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const firstName = useRef("");
    const lastName = useRef("");
    const description = useRef("");
    const division = useRef("");
    const team = useRef("");
    const position = useRef("");
    const coverage = useRef("");
    const potential = useRef("");
    const contract = useRef("");
    const strength = useRef("");
    const weakness = useRef("");
    const foot = useRef("");
    const age = useRef("");
    const currentAbility = useRef("");
    const randomId = require("random-id");
    const len = 15;
    const pattern = "aA0";

    const onSubmit = async () => {
        window.scrollTo(0, 0);
        setLoading(true);
        setError(false);

        if (firstName.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }
        if (lastName.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }
        if (description.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }
        if (division.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }
        if (team.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }
        if (position.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }
        if (coverage.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }
        if (potential.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }
        if (contract.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }
        if (strength.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }
        if (weakness.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }

        if (foot.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }
        if (age.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }

        if (currentAbility.current.value === "") {
            setError(true);
            setLoading(false);
            return;
        }

        try {
            await db.collection("players").add({
                _id: randomId(len, pattern),
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                description: description.current.value,
                division: division.current.value,
                team: team.current.value,
                position: position.current.value,
                coverage: coverage.current.value,
                potential: potential.current.value,
                contract: contract.current.value,
                strength: strength.current.value,
                weakness: weakness.current.value,
                foot: foot.current.value,
                age: age.current.value,
                currentAbility: currentAbility.current.value,
                owner: currentUser.uid,
            });
        } catch (e) {
            console.log("something went wrong", e);
        }
        setLoading(false);
    };

    return (
        <>
            <SideNavBar />
            <DashboardContainer>
                <HeroTextOutline>Add a new player</HeroTextOutline>
                {error && <ErrorMsg>Please Fill in all felid</ErrorMsg>}
                {loading ? (
                    <LoadingContainer>
                        <h3>Creating player</h3>
                        <p>one moment</p>
                        <SpinnerImg src={Spinner} alt="loading..." />
                    </LoadingContainer>
                ) : (
                    <ContentContainer>
                        <TwoInputContainer>
                            <FormContainer>
                                <StyledLabel>First Name</StyledLabel>
                                <PlayerInput
                                    type="text"
                                    placeholder="Name"
                                    firstName="firstName"
                                    ref={firstName}
                                    required
                                />
                            </FormContainer>
                            <FormContainer>
                                <StyledLabel>Last Name</StyledLabel>
                                <PlayerInput
                                    ref={lastName}
                                    type="text"
                                    placeholder="Namesson"
                                    required
                                />
                            </FormContainer>
                        </TwoInputContainer>
                        <FormContainer>
                            <StyledLabel>Description</StyledLabel>
                            <PlayerInputFull
                                type="text"
                                placeholder="Description"
                                ref={description}
                                required
                            />
                        </FormContainer>
                        <FormContainer>
                            <StyledLabel>Division</StyledLabel>
                            <PlayerSelect ref={division} name="division">
                                <PlayerOption disabled selected required>
                                    Division
                                </PlayerOption>
                                <PlayerOption value="Allsvenskan">
                                    Allsvenskan
                                </PlayerOption>
                                <PlayerOption value="Superettan">
                                    Superettan
                                </PlayerOption>
                                <PlayerOption value="Division 1">
                                    Division 1
                                </PlayerOption>
                                <PlayerOption value="Division 2">
                                    Division 2
                                </PlayerOption>
                                <PlayerOption value="Division 3">
                                    Division 3
                                </PlayerOption>
                                <PlayerOption value="Division 4">
                                    Division 4
                                </PlayerOption>
                            </PlayerSelect>
                        </FormContainer>
                        <FormContainer>
                            <StyledLabel>Team</StyledLabel>
                            <PlayerInputFull
                                ref={team}
                                type="text"
                                placeholder="Team"
                                required
                            />
                        </FormContainer>
                        <FormContainer>
                            <StyledLabel>Position</StyledLabel>
                            <PlayerSelect ref={position} name="position">
                                <PlayerOption disabled selected required>
                                    Position
                                </PlayerOption>
                                <PlayerOption value="Goalkeeper">
                                    GK
                                </PlayerOption>
                                <PlayerOption value="Right Back">
                                    RB
                                </PlayerOption>
                                <PlayerOption value="Center Back">
                                    CB
                                </PlayerOption>
                                <PlayerOption value="Left Back">
                                    LB
                                </PlayerOption>
                                <PlayerOption value="Right Midfield">
                                    RM
                                </PlayerOption>
                                <PlayerOption value="Center Defensive Midfield">
                                    CDM
                                </PlayerOption>
                                <PlayerOption value="Center Attacking Midfield">
                                    CAM
                                </PlayerOption>
                                <PlayerOption value="Left Midfield">
                                    LM
                                </PlayerOption>
                                <PlayerOption value="Striker">ST</PlayerOption>
                            </PlayerSelect>
                        </FormContainer>
                        <FormContainer>
                            <StyledLabel>Coverage</StyledLabel>
                            <PlayerSelect ref={coverage} name="coverage">
                                <PlayerOption disabled selected required>
                                    Coverage
                                </PlayerOption>
                                <PlayerOption value="1-3">
                                    1-3 Games
                                </PlayerOption>
                                <PlayerOption value="4-6">
                                    4-6 Games
                                </PlayerOption>
                                <PlayerOption value="7-10">
                                    7-10 Games
                                </PlayerOption>
                                <PlayerOption value="+10">
                                    +10 Games
                                </PlayerOption>
                            </PlayerSelect>
                        </FormContainer>
                        <FormContainer>
                            <StyledLabel>Current Ability</StyledLabel>
                            <PlayerSelect ref={currentAbility}>
                                <PlayerOption disabled selected required>
                                    Current Ability
                                </PlayerOption>
                                <PlayerOption value="1">
                                    Good for Division 3
                                </PlayerOption>
                                <PlayerOption value="2">
                                    Good for Division 2
                                </PlayerOption>
                                <PlayerOption value="3">
                                    Good for Division 1
                                </PlayerOption>
                                <PlayerOption value="4">
                                    Good for Superettan
                                </PlayerOption>
                                <PlayerOption value="5">
                                    Good for Allsvenskan
                                </PlayerOption>
                                <PlayerOption value="6">
                                    Star in Allsvenskan
                                </PlayerOption>
                            </PlayerSelect>
                        </FormContainer>
                        <FormContainer>
                            <StyledLabel>Potential</StyledLabel>
                            <PlayerSelect ref={potential} name="potential">
                                <PlayerOption disabled selected required>
                                    Potential
                                </PlayerOption>
                                <PlayerOption value="6">
                                    Good for Division 3
                                </PlayerOption>
                                <PlayerOption value="5">
                                    Good for Division 2
                                </PlayerOption>
                                <PlayerOption value="4">
                                    Good for Division 1
                                </PlayerOption>
                                <PlayerOption value="3">
                                    Good for Superettan
                                </PlayerOption>
                                <PlayerOption value="2">
                                    Good for Allsvenskan
                                </PlayerOption>
                                <PlayerOption value="1">
                                    Star in Allsvenskan
                                </PlayerOption>
                            </PlayerSelect>
                        </FormContainer>
                        <FormContainer>
                            <StyledLabel>Contract</StyledLabel>
                            <PlayerSelect ref={contract} name="Contract">
                                <PlayerOption disabled selected required>
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
                            <FormContainer>
                                <StyledLabel>Age</StyledLabel>
                                <PlayerSelect ref={age} name="age">
                                    <PlayerOption disabled selected>
                                        Age
                                    </PlayerOption>
                                    <PlayerOption
                                        value="17"
                                        aria-required="true"
                                    >
                                        17
                                    </PlayerOption>
                                    <PlayerOption value="18">18</PlayerOption>
                                    <PlayerOption value="19">19</PlayerOption>
                                    <PlayerOption value="20">20</PlayerOption>
                                    <PlayerOption value="21">21</PlayerOption>
                                    <PlayerOption value="22">22</PlayerOption>
                                    <PlayerOption value="23">23</PlayerOption>
                                    <PlayerOption value="24">24</PlayerOption>
                                    <PlayerOption value="25">25</PlayerOption>
                                    <PlayerOption value="26">26</PlayerOption>
                                    <PlayerOption value="27">27</PlayerOption>
                                    <PlayerOption value="28">28</PlayerOption>
                                    <PlayerOption value="29">29</PlayerOption>
                                    <PlayerOption value="30">30</PlayerOption>
                                    <PlayerOption value="31">31</PlayerOption>
                                    <PlayerOption value="32">32</PlayerOption>
                                    <PlayerOption value="33">33</PlayerOption>
                                </PlayerSelect>
                            </FormContainer>
                            <StyledLabel>Strength</StyledLabel>
                            <PlayerInputFull
                                ref={strength}
                                type="text"
                                placeholder="Strength"
                                required
                            />
                        </FormContainer>
                        <FormContainer>
                            <StyledLabel>Weakness</StyledLabel>
                            <PlayerInputFull
                                ref={weakness}
                                type="text"
                                placeholder="Weakness"
                                required
                            />
                        </FormContainer>
                        <FormContainer>
                            <StyledLabel>Foot</StyledLabel>
                            <PlayerSelect ref={foot} name="Foot">
                                <PlayerOption disabled selected>
                                    Best foot
                                </PlayerOption>
                                <PlayerOption value="left">Left</PlayerOption>
                                <PlayerOption value="right">Right</PlayerOption>
                            </PlayerSelect>
                        </FormContainer>
                        <StyledOutlineButton onClick={onSubmit}>
                            Create Player
                        </StyledOutlineButton>
                    </ContentContainer>
                )}
            </DashboardContainer>
        </>
    );
};

export default CreatePlayer;
