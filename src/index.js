import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch, useLocation, useHistory } from "react-router-dom";
import About from "./About";

const Header = () => {
  const location = useLocation();
  //console.log(location);
  const history = useHistory();

  const atAboutPage = location.pathname.includes("/about");

  const handleBackClick = () => {
    history.goBack();
  }

  return atAboutPage && <button onClick={handleBackClick}>Back</button>
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about/:name" component={About} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
