import React, { useState, useEffect } from "react";
import { db } from "../../firebase/Firebase";
import Filter from "./Filter";
import { HiOutlineFilter } from "react-icons/hi";
import { PlayersContainer, EachPlayer } from "../styles/containers/container";
import "./player.css";
import EachPlayers from "./EachPlayer";

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [filteredPlayer, setFilteredPlayer] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const handelShowMoreInfo = (id) => {
        setShowMoreInfo(!showMoreInfo);
    };

    const handelShowFilter = () => {
        setShowFilter(true);
        setFilteredPlayer(players);
    };

    useEffect(() => {
        setLoading(true);
        db.collection("players")
            .get()
            .then((snapshot) => {
                setLoading(false);
                snapshot.docs.map((doc) => {
                    setPlayers((prevState) => [...prevState, doc.data()]);
                    setFilteredPlayer((prevState) => [
                        ...prevState,
                        doc.data(),
                    ]);
                });
            });
    }, []);

    return (
        <>
            {showFilter ? (
                <Filter
                    setFilteredPlayer={setFilteredPlayer}
                    players={players}
                    filteredPlayer={filteredPlayer}
                    setShowFilter={setShowFilter}
                />
            ) : (
                <PlayersContainer onClick={handelShowFilter}>
                    <HiOutlineFilter className="icon" />
                </PlayersContainer>
            )}

            {loading ? (
                <PlayersContainer>
                    <h2 onClick={handelShowFilter}>Laddar spelare......</h2>
                </PlayersContainer>
            ) : (
                <PlayersContainer>
                    {!filteredPlayer.length ? (
                        <div>
                            No player match the filter, reset the filter and try
                            again
                        </div>
                    ) : (
                        filteredPlayer.map((player) => {
                            return <EachPlayers player={player} />;
                        })
                    )}
                </PlayersContainer>
            )}
        </>
    );
};

export default Players;
