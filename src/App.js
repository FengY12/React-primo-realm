import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import React, {useEffect, useState} from 'react';
import LProject from './components/LearningProjects/learningProjects';
import HomPage from './components/HomePage/HomePage';
import PProject from './components/personalProjects/personalProjects';
import CProject from './components/courseProjects/courseProjects';
import { LoadContext } from './components/Utils/LoadContext';




function App() {
  const [load, setLoad] = useState(true);


  return (

    <Router>
      
      {/*
      <Navbar />
      <Hero />
      <About />
       <Projects /> */}
      <Switch>
        <LoadContext.Provider value={{load, setLoad}}>
        <Route path="/" exact component={HomPage} />
        <Route path="/learningproject/:name" exact component={LProject} />
        <Route path="/personalproject/:name" exact component={PProject} />
        <Route path="/courseproject/:name" exact component={CProject} />
        </LoadContext.Provider>
        </Switch>
    </Router>

  );
}

export default App;
