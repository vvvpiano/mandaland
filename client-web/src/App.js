import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Main from "./pages/Main";
import Header from './components/Header/Header';
import MyMandalList from "./pages/MyMandalList/MyMandalList";
import './components/common.css'

import Three from "./pages/Three";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <div>
            <Route path="/" exact component={Main}/>
            <Route path="/mandalplan" exact component={MyMandalList} />
            <Route path="/three" exact component={Three}/>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
