import React, { useRef, useState, useEffect } from "react";
import { StyledOutlineReset } from "../styles/button/button";
import { HiOutlineXCircle } from "react-icons/hi";
import {
    FilterStyle,
    FormContainerFilter,
    CloseFilter,
    CloseFilterContent,
} from "../styles/containers/container";
import { PlayerOption, PlayerSelect, StyledLabel } from "../styles/label/label";

const Filter = ({
    players,
    filteredPlayer,
    setFilteredPlayer,
    setShowFilter,
}) => {
    const division = useRef("");
    const position = useRef("");
    const currentAbility = useRef("");
    const minAge = useRef("");
    const maxAge = useRef("");
    const [disabledDivision, setDisabledDivision] = useState(false);
    const [disabledPosition, setDisabledPosition] = useState(false);
    const [disabledCurrentAbility, setDisabledCurrentAbility] = useState(false);
    const [disabledMinAge, setDisabledMinAge] = useState(false);
    const [disabledMaxAge, setDisabledMaxAge] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);

    const resetFilter = () => {
        setDisabledButton(true);
        setDisabledDivision(false);
        setDisabledPosition(false);
        setDisabledCurrentAbility(false);
        setDisabledMinAge(false);
        setDisabledMaxAge(false);
        setFilteredPlayer(players);
        division.current.value = "All";
        position.current.value = "All";
        currentAbility.current.value = "All";
        minAge.current.value = "All";
        maxAge.current.value = "All";
    };

    const closeFilter = () => {
        setFilteredPlayer(players);
        setShowFilter(false);
    };

    const handleDivFilter = () => {
        const divFilter = filteredPlayer.filter(
            (player) => player.division === division.current.value
        );
        setFilteredPlayer(divFilter);
        setDisabledDivision(true);
        setDisabledButton(false);
    };
    const handlePositionFilter = () => {
        const posFilter = filteredPlayer.filter(
            (player) => player.position === position.current.value
        );
        setFilteredPlayer(posFilter);
        setDisabledPosition(true);
        setDisabledButton(false);
    };
    const handleCurrentAbilityFilter = () => {
        const CAFilter = filteredPlayer.filter(
            (player) => player.currentAbility >= currentAbility.current.value
        );
        setFilteredPlayer(CAFilter);
        setDisabledCurrentAbility(true);
        setDisabledButton(false);
    };
    const handleMinAgeFilter = () => {
        const minAgeFilter = filteredPlayer.filter(
            (player) => player.age >= minAge.current.value
        );
        setFilteredPlayer(minAgeFilter);
        setDisabledMinAge(true);
        setDisabledButton(false);
    };
    const handleMaxAgeFilter = () => {
        const maxAgeFilter = filteredPlayer.filter(
            (player) => player.age <= maxAge.current.value
        );
        setFilteredPlayer(maxAgeFilter);
        setDisabledMaxAge(true);
        setDisabledButton(false);
    };

    useEffect(() => {
        console.log("this is my status on button", disabledButton);
    }, [disabledButton]);

    return (
        <>
            <FilterStyle>
                <CloseFilter>
                    <CloseFilterContent onClick={closeFilter}>
                        <HiOutlineXCircle />
                    </CloseFilterContent>
                </CloseFilter>
                <FormContainerFilter>
                    <StyledLabel>Division</StyledLabel>
                    <PlayerSelect
                        onChange={handleDivFilter}
                        ref={division}
                        name="division"
                        disabled={disabledDivision}
                    >
                        <PlayerOption value="All">All</PlayerOption>
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
                </FormContainerFilter>
                <FormContainerFilter>
                    <StyledLabel>Position</StyledLabel>
                    <PlayerSelect
                        onChange={handlePositionFilter}
                        ref={position}
                        name="position"
                        disabled={disabledPosition}
                    >
                        <PlayerOption value="All">All</PlayerOption>
                        <PlayerOption value="Goalkeeper">GK</PlayerOption>
                        <PlayerOption value="Right Back">RB</PlayerOption>
                        <PlayerOption value="Center Back">CB</PlayerOption>
                        <PlayerOption value="Left Back">LB</PlayerOption>
                        <PlayerOption value="Right Midfield">RM</PlayerOption>
                        <PlayerOption value="Center Defensive Midfield">
                            CDM
                        </PlayerOption>
                        <PlayerOption value="Center Attacking Midfield">
                            CAM
                        </PlayerOption>
                        <PlayerOption value="Left Midfield">LM</PlayerOption>
                        <PlayerOption value="Striker">ST</PlayerOption>
                    </PlayerSelect>
                </FormContainerFilter>
                <FormContainerFilter>
                    <StyledLabel>Current Ability (min) </StyledLabel>
                    <PlayerSelect
                        onChange={handleCurrentAbilityFilter}
                        ref={currentAbility}
                        disabled={disabledCurrentAbility}
                        name="currentAbility"
                    >
                        <PlayerOption value="All">All</PlayerOption>
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
                </FormContainerFilter>
                <FormContainerFilter>
                    <StyledLabel>Min Age</StyledLabel>
                    <PlayerSelect
                        onChange={handleMinAgeFilter}
                        ref={minAge}
                        name="minAge"
                        disabled={disabledMinAge}
                    >
                        <PlayerOption disabled selected value="All">
                            All
                        </PlayerOption>
                        <PlayerOption value="17" aria-required="true">
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
                </FormContainerFilter>
                <FormContainerFilter>
                    <StyledLabel>Max Age</StyledLabel>
                    <PlayerSelect
                        onChange={handleMaxAgeFilter}
                        ref={maxAge}
                        name="minAge"
                        disabled={disabledMaxAge}
                    >
                        <PlayerOption disabled selected value="All">
                            All
                        </PlayerOption>
                        <PlayerOption value="17" aria-required="true">
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
                </FormContainerFilter>
                <FormContainerFilter>
                    <StyledOutlineReset
                        disabledButton={disabledButton}
                        onClick={resetFilter}
                    >
                        Reset Filter
                    </StyledOutlineReset>
                </FormContainerFilter>
            </FilterStyle>
        </>
    );
};

export default Filter;
