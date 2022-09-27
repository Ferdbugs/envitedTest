import Home from "./pages/Home";
import Create from "./pages/Create";
import Event from "./pages/Event";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/create" component={Create} exact></Route>
            <Route path="/event" component={Event} exact></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
