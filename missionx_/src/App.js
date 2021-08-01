import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Tab from './component/Tab'
<<<<<<< HEAD
import ProjectBody from './component/ProjectBody';
=======
import ProjectBody from './component/ProjectBody'
>>>>>>> 88803d143d3ec692dd3512252d31027b9b7ccbd7
import Home from "./component/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Home} />
=======
          <Route exact path="/" component={Home} />
>>>>>>> 88803d143d3ec692dd3512252d31027b9b7ccbd7
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
