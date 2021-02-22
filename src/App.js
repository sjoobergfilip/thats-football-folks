import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Signup from "./components/login/Signup";
import NotFound from "./components/notfound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="*" element={<NotFound />}>
                        <Signup />
                    </Route>
                </Routes>
            </Router>
        </>
    );
};

export default App;
