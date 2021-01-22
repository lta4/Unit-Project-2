import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Why from "./pages/why";
import Footer from "./pages/footer";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App" style={{
      // BACKGROUND COVER //
      backgroundImage: 'url("https://i.pinimg.com/originals/f0/d8/ce/f0d8ce1ce46766a24d2317890e364890.png")'
    }}>
      <Nav className="navRoute"/>
      <Switch>
        <Route path="/why">
          <Why className="whyRoute"/>
        </Route>
        <Route path= "/">
          <Main className="mainRoute"/>
        </Route>
      </Switch>
      <Footer className="footContainer"/>
    </div>
    // NAV, ROUTES/ FOOTER
  );
};

export default App;
