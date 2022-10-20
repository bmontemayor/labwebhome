import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Home from "./h/Home";

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Home />);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Home />
  </StrictMode>,
  rootElement
);