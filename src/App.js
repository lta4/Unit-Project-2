import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Why from "./pages/why";
import Footer from "./pages/footer";
import Nav from "./components/nav";
import List from "./pages/list";
import Form from "./components/form";

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
        <Route path= "form">
          <Form />
        </Route>
      </Switch>
      <Footer className="footContainer"/>
    </div>
  );
}

export default App;
