import "./App.css";
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
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/grafana">
          <Card>
            <Card.Heading>Grafana Table</Card.Heading>
          </Card>
        </NavLink>
        <NavLink to="/react-table">
          <Card>
            <Card.Heading>React-Table</Card.Heading>
          </Card>
        </NavLink>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
