import styled from "styled-components/macro";

export const LoginContainer = styled.div`
    height: 85vh;
    width: 100vw;
    display: flex;
    justify-content: center;
`;

export const LoginContent = styled.div`
    max-width: 400px;
    width: 400px;
    height: 400px;
    margin: auto;

    background-color: ${({ theme }) => theme.colors.Black};
    filter: brightness(1.75);
    color: ${({ theme }) => theme.colors.Yellow};
    border: 2px solid ${({ theme }) => theme.colors.Yellow};
    border-radius: 10px;
    box-shadow: 2px 2px 10px ${({ theme }) => theme.colors.Yellow};

    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;
