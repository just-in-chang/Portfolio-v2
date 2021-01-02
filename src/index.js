import App from "./App";
import Pathfinder from "./components/Pathfinder";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./styles.scss";

ReactDOM.render(
    <React.StrictMode>
        <Router basename={"/"}>
            <Route exact path="/" component={App} />
            <Route exact path="/pathfinder" component={Pathfinder} />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
