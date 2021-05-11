import { useContext, createContext, useReducer } from "react";

export const CreatePlayerContext = createContext();
export const useReport = () => useContext(CreatePlayerContext);

const initialReportData = {
    firstName: "",
    lastName: "",
    age: "",
    description: "",
    division: "",
    team: "",
    position: "",
    coverage: "",
    currentAbility: "",
    potential: "",
    contract: "",
    strength: "",
    weakness: "",
    foot: "",
};

export const CreatePlayerProvider = ({ children }) => {
    const formReducer = (formState, { type, field, payload }) => {
        switch (type) {
            case "setFormInfo":
                return {
                    ...formState,
                    [field]: payload,
                };
            case "clearFormInfo":
                return {
                    initialReportData,
                };
            default:
                return formState;
        }
    };
    const [formState, dispatch] = useReducer(formReducer, initialReportData);

    const handelSetFormInfo = (name, payload) => {
        dispatch({
            type: "setFormInfo",
            field: name,
            payload,
        });
    };

    const createPlayerValues = {
        formState,
        handelSetFormInfo,
        dispatch,
    };

    return (
        <CreatePlayerContext.Provider value={createPlayerValues}>
            {children}
        </CreatePlayerContext.Provider>
    );
};
