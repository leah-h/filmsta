import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../src/components/header/header.component";
import HomePage from "../src/pages/homepage/homepage.component";
import ExplorePage from "../src/pages/explore/explore.component";
import BlogPage from "../src/pages/blog/blog.component";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/blog" component={BlogPage} />
      </Switch>
    </div>
  );
}

export default App;
