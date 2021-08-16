import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Main from "./pages/Main";
import Three from "./pages/Three";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <div>
            <Route path="/" exact component={Main}/>
            <Route path="/three" exact component={Three}/>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
