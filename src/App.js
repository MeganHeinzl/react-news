import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } 
                    from "react-router-dom";
import Home         from "./Home";
import About        from "./About";



class App extends Component {
  render() {
    return  (
    <Router>

      <div>
        <header>
          <div className="header-content">
          <div className="header-text">
          <h1>News API App</h1>
          <b>by Megan Heinzl</b>
          </div>
        <nav>
        <ul>
          <li><Link to="/react-news/">Home</Link></li>
          <li><Link to="/react-news/about">About</Link></li>
        </ul>
        </nav>
        </div>
        </header>
        <div className="wrapper">
        {/* Our router goes here */}
        <Switch> 
        <Route exact path="/react-news/" component={Home} />


        {/* Does a redirect. */}

        <Route path={'/react-news/about/'} exact component={About} />

        </Switch>
        <footer><p>API provided by newsapi.org | <a href="http://meganheinzl.com"> meganheinzl.com</a></p></footer>
      </div>
      </div>
    </Router>);
  }
}
export default App;
