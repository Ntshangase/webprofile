
import React from "react";
import Profile from "./profile";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tittle: 'contacts', path: "/contact"}
  }


  render () {
    return (
      <>
        < Profile />
        <route path="/" exact render={() => <contactPage tittle={this.state.contact.tittle}/> } />
      </>
    );
  }

}

export default App;
