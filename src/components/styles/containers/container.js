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

export const BecomeAScoutContainer = styled(DashboardContainer)`
    width: 100vw;
    filter: brightness(1);
`;
export const ContentContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 10px auto;
    margin-top: 20px;
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

export const FormContainerFilter = styled(FormContainer)`
    max-width: 200px;
    width: 100%;
    margin-left: 15px;
    margin-top: 10px;
`;

export const FilterStyle = styled.div`
    max-width: 760px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

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
    display: flex;
`;
export const CollapsibleText = styled.div`
    width: 100%;
    max-width: 300px;
    margin: 15px 20px;
`;

export const InfoName = styled.div`
    align-self: center;
    margin-left: 25px;
`;
export const InfoClub = styled.div`
    align-self: center;
    display: flex;
`;

export const CloseFilter = styled.div`
    width: 100%;
    height: 45px;
`;
export const CloseFilterContent = styled.div`
    float: right;
    margin-top: 4px;
    margin-right: 20px;
    align-self: center;
    font-size: 30px;
    cursor: pointer;
`;

export const ContentShowMore = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const CollapsibleInfo = styled.div`
    float: right;
`;

export const ErrorMsg = styled.div`
    border: 1px solid #e84548;
    width: 100%;
    max-width: 580px;
    margin: 0 auto;
    text-align: center;
    padding: 30px 0;
    color: #e84548;
    border-radius: 5px;
`;
