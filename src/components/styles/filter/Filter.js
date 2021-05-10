import styled from "styled-components/macro";

export const FilterContainer = styled.div`
    position: relative;
    display: inline-block;
`;

export const FilterAlternative = styled.button`
    border-radius: 0.125rem;
    padding: 0.5rem 1rem;
    background-color: #2b7de9;
    background-image: none;
    cursor: pointer;
    border: transparent;
    font-weight: 600;
    color: white;
    font-size: 16px;
    line-height: 1.5;
    :hover {
        background-color: #176dde;
    }
    :focus {
        outline: 1px dotted;
        outline: 1px auto -webkit-focus-ring-color;
    }
`;

export const DropDown = styled.div`
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding: 0.25rem;
    display: none;
    width: 16rem;
    z-index: 50;
    left: 0;
    max-height: calc(100vh - 152px);
    position: absolute;
    margin-top: 0.5rem;
    background-color: white;
    color: black;
    @media (min-width: 768px) {
        display: block;
    }
`;

export const DropDownActions = styled.div`
    border-top-width: 1px;
    border-top-color: #e4e7eb;
    border-top-style: solid;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem 0.5rem 0.25rem 0.5rem;
`;
export const DropDownActionsButton = styled.button`
    border-radius: 0.125rem;
    padding: 0.25rem 0.5rem;
    background-color: #2b7de9;
    border-color: transparent;
    color: white;
    font-weight: 600;
    cursor: pointer;
    margin: 10px;
    float: right;
`;

export const Alternative = styled.div`
    background-color: white;
`;
