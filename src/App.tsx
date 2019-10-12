import React from 'react';
import './App.css';
import Books from "./components/books"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoreMoviesInfo from "./components/bookcard/moreMoviesInfo";
import Feedback from "./components/feedback"
import AllFeedbacks from "./components/allFeedBackes"
import Navbar from "./components/navbar"

const App: React.FC = () => {
  return (
    <div className="App">


      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Books} />
          <Route path="/movie/:Title" component={MoreMoviesInfo} />
          <Route path="/feedback/:Title" component={Feedback} />
          <Route path="/allFeedbacks" component={AllFeedbacks} />
        </Switch>

      </Router>
    </div >
  );
}


export default App;
