import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Tab from './component/Tab'
import ProjectBody from './component/ProjectBody'
import Home from "./component/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teacherspage">
            <Tab />
          </Route >
          <Route exact path="/projectspage">
            <ProjectBody />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
