import { BrowserRouter as Router, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import React from "react";
import Profile from "./profile";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tittle: 'contacts', path: "/contact" }
  }


  render() {
    return (
      <Router>
        <>
          < Profile />
        </>
        <Nav>
          <Link to="/contact" id="contact">Contact</Link>
        </Nav>
      </Router>
    );
  }

}

export default App;
