import { Switch, Route } from "react-router-dom";
import Profile from "./components/profile/profile";
import Home from "./components/Home";
import Dashboard from "./components/app/Dashboard";
import "./styles/sass/App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/register" render={() => <Profile />} />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
