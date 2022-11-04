import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import React from "react";
import Profile from "./profile";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tittle: 'contacts', path: "/contact"}
  }


  render () {
    return (
      <Router>
        <>
        < Profile />
        <route path="/" exact render={() => <contactPage tittle={this.state.contact.tittle}/> } />
      </>
      </Router>
    );
  }

}

export default App;
