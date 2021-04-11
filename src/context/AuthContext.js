import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../firebase/Firebase";

const AuthContext = createContext();

const useAuth = () => {
    return useContext(AuthContext);
};

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };

    const logout = () => {
        return auth.signOut();
    };

    const contextValues = {
        login,
        logout,
        currentUser,
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            //user log in or out
            setCurrentUser(user);
            setLoading(false);

            return unsubscribe;
        });
    }, []);

    return (
        <AuthContext.Provider value={contextValues}>
            {loading && <p>Loading.........</p>}
            {!loading && props.children}
        </AuthContext.Provider>
    );
};

export { useAuth, AuthContext, AuthContextProvider as default };
