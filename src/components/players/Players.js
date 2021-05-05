import React, { useState, useEffect } from "react";
import { db } from "../../firebase/Firebase";
import {
    Filter,
    PlayersContainer,
    EachPlayer,
} from "../styles/containers/container";

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

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
                            <EachPlayer>
                                <h1>
                                    {player.formState.firstName}{" "}
                                    {player.formState.lastName}
                                </h1>
                            </EachPlayer>
                        );
                    })}
                </PlayersContainer>
            )}
        </>
    );
};

export default Players;
