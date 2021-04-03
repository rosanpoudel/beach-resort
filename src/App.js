import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

// pages
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import { SingleRoom } from "./pages/SingleRoom";
import { Error } from "./pages/Error";

export default function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}
