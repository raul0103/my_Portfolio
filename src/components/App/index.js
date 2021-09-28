import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "../../pages/Projects";
import About from "../../pages/About";
import Profile from "../../pages/Profile";
import pages_data from '../../data/pages_data'
import MainMenu from "./MainMenu";

export default function App() {
  return (
    <Router>

      <MainMenu />

      <Switch>
        <Route path={pages_data.profile.link}>
          <Profile title={pages_data.profile.title} />
        </Route>
        <Route path={pages_data.projects.link}>
          <Projects title={pages_data.projects.title} />
        </Route>
        <Route path={pages_data.about.link}>
          <About title={pages_data.about.title} />
        </Route>
      </Switch>

    </Router >
  );
}


