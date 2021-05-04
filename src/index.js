import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Theme } from "./globalStyle/Theme";
import { CreatePlayerProvider } from "./context/CreatePlayerContext";

ReactDOM.render(
    <React.StrictMode>
        <CreatePlayerProvider>
            <ThemeProvider theme={Theme}>
                <App />
            </ThemeProvider>
        </CreatePlayerProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
