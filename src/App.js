import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
} from "react-router-dom";
import { Card } from "@grafana/ui";
import Grafana from "./Grafana";
import ReactTable from "./ReactTable";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <div className="nav-cards">
            <NavLink to="/grafana">
              <Card
                isSelected={selected === "grafana"}
                onClick={() => setSelected("grafana")}
              >
                <Card.Heading>
                  <h3>Grafana</h3>
                </Card.Heading>
              </Card>
            </NavLink>
          </div>
          <div className="nav-cards">
            <NavLink to="/react-table" className="nav-cards">
              <Card
                isSelected={selected === "react-table"}
                onClick={() => setSelected("react-table")}
              >
                <Card.Heading>
                  <h3>React-Table</h3>
                </Card.Heading>
              </Card>
            </NavLink>
          </div>
        </div>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
