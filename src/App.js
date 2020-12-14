import React from "react";
import { Switch, Route } from "react-router-dom";

import { auth, createUserProfileDocument } from './firebase/firebase.utils'


import HomePage from "../src/pages/homepage/homepage.component";
import ExplorePage from "../src/pages/explore/explore.component";
import BlogPage from "../src/pages/blog/blog.component";
import SignInPage from "../src/pages/sign-in/sign-in.component";
import SignUpPage from "../src/pages/sign-up/sign-up.component";
import Header from "../src/components/header/header.component";
import Footer from "../src/components/footer/footer.component";
import "./App.css";


class App extends React.Component {
  constructor() {
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)
          
          });
        });   
      }

      this.setState({currentUser: userAuth})
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
        <Footer />
      </div>
    );
    }
  }

export default App;
