import {BrowserRouter as Router} from "react-router-dom";
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
      </>
      </Router>
    );
  }

}

export default App;
