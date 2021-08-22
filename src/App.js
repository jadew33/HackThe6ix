import { Switch, Route } from "react-router-dom";
import Profile from "./components/profile/profile";
import Home from "./components/Home";
import Dashboard from "./components/app/Dashboard";
import "./styles/sass/App.scss";
import Budget from "./components/app/Budget";
import Onboarding from "./components/profile/onboarding";
import GetStarted from "./components/profile/GetStarted";
import Account from "./components/app/Account";
import Goals from "./components/app/Goals";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/register" render={() => <Profile />} />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/budget" render={() => <Budget />} />
        <Route exact path="/onboarding" render={() => <Onboarding />} />
        <Route exact path="/get-started" render={() => <GetStarted />} />
        <Route exact path="/goals" render={() => <Goals />} />
        <Route exact path="/account" render={() => <Account />} />
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
