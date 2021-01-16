import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Why from "./pages/why";
import Footer from "./pages/footer";
import Nav from "./components/nav";
import List from "./pages/list";

function App() {
  return (
    <div className="App">
      <Nav />
        <Switch>
        <Route exact path= "/">
          <Main />
        </Route>
        <Route path= "why">
          <Why />
        </Route>
        <Route 
          path= "/main/:url"
          render={(routerProps) => <List {...routerProps} />}
        >
          <List />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
