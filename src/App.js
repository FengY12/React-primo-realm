import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import React from 'react';
import LProject from './components/LearningProjects/learningProjects';
import HomPage from './components/HomePage/HomePage';
import PProject from './components/personalProjects/personalProjects';
import { ProjectList } from './components/Projects/ProjectList';



function App() {

  function existProject(name){
      for (let x in ProjectList) {
        if (x.urlName == name) {
          return true
        }
      }
      return false
  }



  return (

    <Router>
      {/*
      <Navbar />
      <Hero />
      <About />
       <Projects /> */}
      <Switch>
        <Route path="/" exact component={HomPage} />
        <Route path="/learningproject/:name" exact component={LProject} />
        <Route path="/personalproject/:name" exact component={PProject} />
        </Switch>
    </Router>

  );
}

export default App;
