import styled from "styled-components/macro";

export const StyledInput = styled.input`
    height: 50px;
    width: 90%;
    padding-left: 15px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.Yellow};
    font-family: "Work Sans", sans-serif;
    margin: 10px auto;
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
export const StyledForm = styled.form`
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.colors.Yellow};
`;

export const PlayerInput = styled.input`
    max-width: 250px;
    height: 35px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.Yellow};
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.Yellow};
    outline-width: 0;
`;
export const PlayerInputFull = styled.input`
    max-width: 100%;
    height: 35px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.Yellow};
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.Yellow};
    outline-width: 0;
`;
export const PlayerSelect = styled.select`
    max-width: 600px;
    height: 35px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.Yellow};
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.Yellow};
    outline-width: 0;
`;
export const PlayerOption = styled.option`
    color: ${({ theme }) => theme.colors.Black};
`;
