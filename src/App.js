
import Profile from "./profile";

function App() {
  return (
    <>
      < Profile />
      <route path="/" exact render={() => <contactPage tittle={this.state.contact.tittle}/> } />
    </>
  );
}

export default App;
