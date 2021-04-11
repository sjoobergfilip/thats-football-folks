import styled from "styled-components/macro";

export const StyledInput = styled.input`
    height: 50px;
    width: 90%;
    padding-left: 15px;

    font-size: 1rem;

    color: ${({ theme }) => theme.colors.Yellow};
    font-family: "Work Sans", sans-serif;

    margin-bottom: 15px;

    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.Yellow};

    outline-width: 0;
`;

export const StyledLabel = styled.label`
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    font-size: 1.6rem;
`;
