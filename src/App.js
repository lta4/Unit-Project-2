import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Why from "./pages/why";
import Footer from "./pages/footer";
import Nav from "./components/nav";
// import Form from "./components/form";
import List from "./pages/list";

function App() {
  return (
    <div className="App" style={{
      backgroundImage: 'url("https://i.pinimg.com/originals/f0/d8/ce/f0d8ce1ce46766a24d2317890e364890.png")'
      // https://wallpaperaccess.com/full/245210.jpg
      // https://i.pinimg.com/originals/f0/d8/ce/f0d8ce1ce46766a24d2317890e364890.png
    }}>
      <Nav />
        <Switch>
        <Route exact path= "/">
          <Main />
        </Route>
        <Route path= "why">
          <Why />
        </Route>
        <Route path= "list">
          <List />
        </Route>
      </Switch>
      <Footer className="footContainer"/>
    </div>
  );
}

export default App;
