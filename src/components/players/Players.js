import React, { useState, useEffect } from "react";
import { db } from "../../firebase/Firebase";
import {
    Filter,
    PlayersContainer,
    EachPlayer,
    InfoName,
    InfoClub,
    Collapsible,
} from "../styles/containers/container";

import { BigText, TeamText } from "../styles/text/Text";

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        db.collection("players")
            .get()
            .then((snapshot) => {
                setLoading(false);
                snapshot.docs.map((doc) => {
                    setPlayers((prevState) => [...prevState, doc.data()]);
                });
            });
    }, []);

    return (
        <>
            <Filter>Filter</Filter>
            {loading ? (
                <PlayersContainer>
                    <h2>Laddar spelare......</h2>
                </PlayersContainer>
            ) : (
                <PlayersContainer>
                    {players.map((player) => {
                        return (
                            <>
                                <EachPlayer>
                                    <InfoName>
                                        <BigText>
                                            {player.formState.firstName}{" "}
                                            {player.formState.lastName}
                                        </BigText>
                                    </InfoName>
                                    <InfoClub>
                                        <TeamText>
                                            {player.formState.age} år
                                        </TeamText>
                                        <TeamText>
                                            {player.formState.position}
                                        </TeamText>
                                        <TeamText>
                                            {player.formState.team}
                                        </TeamText>
                                    </InfoClub>
                                </EachPlayer>
                                <Collapsible>
                                    {player.formState.description}
                                </Collapsible>
                            </>
                        );
                    })}
                </PlayersContainer>
            )}
        </>
    );
};

export default Players;
