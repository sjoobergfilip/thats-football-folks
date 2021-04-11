import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import BecomeAScout from "./components/becomeAScout/BecomeAScout";
import Players from "./components/players/Players";
import NotFound from "./components/notfound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle/GlobalStyles";
import AuthContextProvider from "./context/AuthContext";
import AuthRouts from "./components/login/AuthRouts";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <AuthContextProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="/players">
                            <Players />
                        </Route>
                        <Route path="/become-a-scout">
                            <BecomeAScout />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <AuthRouts path="/dashboard">
                            <Dashboard />
                        </AuthRouts>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </AuthContextProvider>
            </Router>
        </>
    );
};

export default App;
