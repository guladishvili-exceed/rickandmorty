import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import Characters from "./pages/Characters/Characters";
import EpisodesAndLocations from "./pages/EpisodesAndLocations/EpisodesAndLocations";
import Header from "./components/Header/Header";

import reducer from "./redux/reducer";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Characters} />
            <Route
              exact
              path="/episodesAndlocations"
              component={EpisodesAndLocations}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
