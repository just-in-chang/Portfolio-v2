import App from "./App";
import Pathfinder from "./components/Pathfinder";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./styles.scss";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/">
                <App />
            </Route>
            <Route exact path="/pathfinder">
                <Pathfinder />
            </Route>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
