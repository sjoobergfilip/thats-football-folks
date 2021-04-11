import styled from "styled-components/macro";

export const StyledFilledButton = styled.button`
    cursor: pointer;
    margin: 15px 20px 10px 0;
    max-width: 120px;
    width: 120px;
    height: 40px;
    color: ${({ theme }) => theme.colors.Black};
    background-color: ${({ theme }) => theme.colors.Yellow};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.Yellow};
    justify-content: center;
    align-items: center;
    transition: 0.7s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.Black};
        color: ${({ theme }) => theme.colors.Yellow};
    }
`;

export const StyledOutlineButton = styled.button`
    cursor: pointer;
    margin: 10px 10px 10px 0;
    max-width: 120px;
    width: 120px;
    height: 40px;
    color: ${({ theme }) => theme.colors.Yellow};
    background-color: ${({ theme }) => theme.colors.Black};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.Yellow};
    justify-content: center;
    align-items: center;
    transition: 0.7s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.Yellow};
        color: ${({ theme }) => theme.colors.Black};
    }
`;