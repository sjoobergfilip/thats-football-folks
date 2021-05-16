import React, { useState } from "react";
import {
    EachPlayer,
    InfoName,
    InfoClub,
    CollapsibleText,
    ContentShowMore,
    CollapsibleInfo,
} from "../styles/containers/container";
import { BigText, TeamText } from "../styles/text/Text";
import "./player.css";

const EachPlayers = ({ player }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <EachPlayer onClick={handleClick}>
                <InfoName>
                    <BigText>
                        {player.firstName} {player.lastName}
                    </BigText>
                </InfoName>
                <InfoClub>
                    <TeamText>{player.age} år</TeamText>
                    <TeamText>{player.position}</TeamText>
                    <TeamText>{player.team}</TeamText>
                </InfoClub>
            </EachPlayer>
            {isOpen && (
                <ContentShowMore>
                    <CollapsibleText>{player.description}</CollapsibleText>
                    <CollapsibleInfo>
                        <CollapsibleText>Foot: {player.foot}</CollapsibleText>
                        <CollapsibleText>
                            Strength: {player.strength}
                        </CollapsibleText>
                    </CollapsibleInfo>
                </ContentShowMore>
            )}
        </>
    );
};

export default EachPlayers;
