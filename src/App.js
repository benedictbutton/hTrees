import "./App.css";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Card } from "@grafana/ui";
import Grafana from "./Grafana";
import ReactTable from "./ReactTable";

function App() {
  const [selected, setSelected] = useState("grafana");
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
            <Card
              isSelected={selected === "grafana"}
              onClick={() => setSelected("grafana")}
            >
              <Card.Heading>
                <h3>Grafana</h3>
              </Card.Heading>
              <Card.Description>
                New to Grafana and struggled finding adequate developer
                documentation. The storybook UI seems like very much a work in
                progress.
              </Card.Description>
            </Card>
          </div>
          <div className="nav-cards">
            <Card
              isSelected={selected === "react-table"}
              onClick={() => setSelected("react-table")}
            >
              <Card.Heading>
                <h3>React-Table</h3>
              </Card.Heading>
              <Card.Description>
                Despite Grafana abstracting react-table in its UI table, I found
                using react-table directly easier as it gave me more options and
                finer control.
              </Card.Description>
            </Card>
          </div>
        </div>
      </header>
      {selected === "grafana" && <Grafana />}
      {selected === "react-table" && <ReactTable />}
    </div>
  );
}

export default App;
