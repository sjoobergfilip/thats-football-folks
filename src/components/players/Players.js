import React, { useState, useEffect } from "react";
import { db } from "../../firebase/Firebase";

const Players = () => {
    const [playersArr, setPlayersArr] = useState([]);

    useEffect(() => {
        db.collection("players")
            .get()
            .then((snapshot) => {
                console.log(snapshot.docs.length);
                snapshot.docs.map((doc) => {
                    setPlayersArr((prevState) => [...prevState, doc.data()]);
                });
            });
    }, []);

    return <div>This is Players Side</div>;
};

export default Players;

// this.setState((prevState) => ({ myArray: [values, ...prevState.myArray] }));
