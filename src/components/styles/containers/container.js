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

export const NavSideBarContainer = styled.div`
    color: ${({ theme }) => theme.colors.Yellow};
    background-color: ${({ theme }) => theme.colors.Black};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
    position: fixed;
    height: 85vh;
    width: 150px;
`;
export const NavSideBarContent = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
`;
export const NavLinkContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const DashboardContainer = styled.div`
    height: calc(100vh - 106px);
    width: calc(100vw - 150px);
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.Black};
    filter: brightness(1.75);
`;
export const ContentContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
`;
export const TwoInputContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`;
export const OneInputContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
`;

export const FormContainer = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.Yellow};
`;

export const Filter = styled.div`
    max-width: 760px;
    width: 100%;
    height: 35px;

    border: 1px solid ${({ theme }) => theme.colors.Yellow};
    border-radius: 6px;
    margin: 40px auto 0 auto;
`;
export const PlayersContainer = styled.div`
    max-width: 760px;
    margin: 40px auto 0 auto;
    width: 100%;
`;
export const EachPlayer = styled.div`
    cursor: pointer;
    max-width: 760px;
    height: 100px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.Black};
    :nth-child(odd) {
        filter: brightness(1.5);
    }
`;
export const Collapsible = styled.div`
    max-width: 760px;
    height: 100px;
    margin: 0 auto;
    width: 100%;
`;

export const InfoName = styled.div`
    align-self: center;
    margin-left: 25px;
`;
export const InfoClub = styled.div`
    align-self: center;
    display: flex;
`;
