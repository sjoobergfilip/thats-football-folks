import React, { useRef, useState, useEffect } from "react";
import { db } from "../../firebase/Firebase";
import {
    FilterStyle,
    FormContainerFilter,
} from "../styles/containers/container";
import { PlayerOption, PlayerSelect, StyledLabel } from "../styles/label/label";

const Filter = ({ players, filteredPlayer, setFilteredPlayer }) => {
    const [queryArr, setQueryArr] = useState([]);
    const division = useRef("");
    const position = useRef("");
    const currentAbility = useRef("");
    const minAge = useRef("");
    const maxAge = useRef("");

    const handelFilter = () => {
        setQueryArr([]);
        if (division.current.value !== "All") {
            let query = "division";
            let form = "==";
            let value = division.current.value;
            let queryObj = {
                query,
                form,
                value,
            };
            setQueryArr((prevQuery) => [...prevQuery, queryObj]);
        }
        if (position.current.value !== "All") {
            let query = "position";
            let form = "==";
            let value = position.current.value;
            let queryObj = {
                query,
                form,
                value,
            };
            setQueryArr((prevQuery) => [...prevQuery, queryObj]);
        }
        if (currentAbility.current.value !== "All") {
            let query = "currentAbility";
            let form = ">=";
            let value = currentAbility.current.value;
            let queryObj = {
                query,
                form,
                value,
            };
            setQueryArr((prevQuery) => [...prevQuery, queryObj]);
        }

        if (minAge.current.value !== "All") {
            let query = "age";
            let form = ">=";
            let value = minAge.current.value;
            let queryObj = {
                query,
                form,
                value,
            };
            setQueryArr((prevQuery) => [...prevQuery, queryObj]);
        }
        if (maxAge.current.value !== "All") {
            let query = "age";
            let form = "<=";
            let value = maxAge.current.value;
            let queryObj = {
                query,
                form,
                value,
            };
            setQueryArr((prevQuery) => [...prevQuery, queryObj]);
        }
    };

    useEffect(() => {
        (async () => {
            if (queryArr.length) {
                const dbRef = db.collection("players");
                const dbQuery = await queryArr.forEach((query) => {
                    dbRef.where(query.query, query.form, query.value);
                });
                const dbProm = await dbQuery.get();
                console.log(dbProm.docs);
            }
        })();
    }, [queryArr]);

    return (
        <>
            <FilterStyle>
                <FormContainerFilter>
                    <StyledLabel>Division</StyledLabel>
                    <PlayerSelect ref={division} name="division">
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
                    <PlayerSelect ref={position} name="position">
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
                    <PlayerSelect ref={currentAbility} name="currentAbility">
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
                    <PlayerSelect ref={minAge} name="minAge">
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
                    <PlayerSelect ref={maxAge} name="minAge">
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
                <button onClick={handelFilter}>Applay</button>
            </FilterStyle>
        </>
    );
};

export default Filter;
