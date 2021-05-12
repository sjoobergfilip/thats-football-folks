import React, { useRef, useState, useEffect } from "react";
import { db } from "../../firebase/Firebase";
import {
    FilterStyle,
    FormContainerFilter,
} from "../styles/containers/container";
import {
    PlayerOption,
    PlayerSelect,
    StyledLabel,
    setShowFilter,
} from "../styles/label/label";

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

    const resetFilter = () => {
        setFilteredPlayer(players);
        division.current.value = "All";
        position.current.value = "All";
        currentAbility.current.value = "All";
        minAge.current.value = "All";
        maxAge.current.value = "All";
    };

    const handleFilterChange = () => {
        console.log(
            "this is filterdplayers before i set the player to players",
            filteredPlayer
        );
        setFilteredPlayer(players);
        console.log(
            "this is filterdplayers after i set the player to players",
            filteredPlayer
        );
        if (division.current.value !== "All") {
            console.log("i will filter on division");
            const divFilter = filteredPlayer.filter(
                (player) => player.division === division.current.value
            );
            setFilteredPlayer(divFilter);
        }
        if (position.current.value !== "All") {
            console.log("i will filter on position");
            const posFilter = filteredPlayer.filter(
                (player) => player.position === position.current.value
            );
            setFilteredPlayer(posFilter);
        }
        if (currentAbility.current.value !== "All") {
            console.log("i will filter on currentAbility");
            const CA = filteredPlayer.filter(
                (player) =>
                    player.currentAbility >= currentAbility.current.value
            );
            setFilteredPlayer(CA);
        }

        if (minAge.current.value !== "All") {
            console.log("i will filter on minage");
            const minAgeFilter = filteredPlayer.filter(
                (player) => player.age >= minAge.current.value
            );
            setFilteredPlayer(minAgeFilter);
        }
        if (maxAge.current.value !== "All") {
            console.log("i will filter on maxage");
            const maxAgeFilter = filteredPlayer.filter(
                (player) => player.age <= maxAge.current.value
            );
            setFilteredPlayer(maxAgeFilter);
        }
        if (filteredPlayer.length <= 0) {
            console.log("no player to filter on");
        }
    };

    return (
        <>
            <FilterStyle>
                <FormContainerFilter>
                    <StyledLabel>Division</StyledLabel>
                    <PlayerSelect
                        onChange={handleFilterChange}
                        ref={division}
                        name="division"
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
                        onChange={handleFilterChange}
                        ref={position}
                        name="position"
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
                    <StyledLabel>Current Ability (minimum) </StyledLabel>
                    <PlayerSelect
                        onChange={handleFilterChange}
                        ref={currentAbility}
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
                        onChange={handleFilterChange}
                        ref={minAge}
                        name="minAge"
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
                        onChange={handleFilterChange}
                        ref={maxAge}
                        name="minAge"
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
                <button onClick={resetFilter}>reset</button>
            </FilterStyle>
        </>
    );
};

export default Filter;
