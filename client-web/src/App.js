import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import "./components/common.css";

import Main from "./pages/Main";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyMandalList from "./pages/MyMandalList/MyMandalList";

import Three from "./pages/Three";
import Mandalart from "./pages/Mandalart";

function App() {
	return (
		<div className="App">
			<Router history={history}>
				<Header />
				<div className="main-container">
					<Navbar />
					<Switch>
						<div className="main-body">
							<Route path="/" exact component={Main} />
							<Route path="/mandalplan" exact component={MyMandalList} />
							<Route path="/mandalart" exact component={Mandalart} />
							<Route path="/three" exact component={Three} />
						</div>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
