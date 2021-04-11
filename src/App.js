import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import BecomeAScout from "./components/becomeAScout/BecomeAScout";
import Players from "./components/players/Players";
import NotFound from "./components/notfound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle/GlobalStyles";
const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
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
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
