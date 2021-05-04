import styled from "styled-components/macro";

export const LoadingContainer = styled.div`
    height: 150px;
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 150px auto;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.Yellow};
    border-radius: 6px;
`;

export const SpinnerImg = styled.img`
    width: 51px;
    height: 51px;
    margin: 0 auto;
`;
