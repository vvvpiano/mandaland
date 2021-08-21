import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Navbar from './components/Navbar/Navbar'
import Main from "./pages/Main";
import Header from './components/Header/Header';
import MyMandalList from "./pages/MyMandalList/MyMandalList";
import Three from "./pages/Three";
import './components/common.css'


function App() {
  const style = {
	  fontFamily : "AppleSDGothic",
  }
  return (
    <div className="App" style={style}>
      <Router history={history}>
        <Header />
        <div className="main-container">
          <Navbar />
          <Switch>
            <div>
              <Route path="/" exact component={Main}/>
              <Route path="/mandalplan" exact component={MyMandalList} />
              <Route path="/three" exact component={Three}/>
            </div>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
