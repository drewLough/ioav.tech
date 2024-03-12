import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";

const RootHtml = () => (
  <Router>
    <App />
  </Router>
);

render(<RootHtml />, document.querySelector("#root"));
