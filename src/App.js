import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Post from "./components/aboutPost/Post";
import ViewPosts from './components/createPosts/ViewPosts';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
              <Switch>
                <Route exact path="/" component={ViewPosts}></Route>
                <Route path="/Post/:params" component={Post}></Route>
                <Redirect to="/"/>
              </Switch>
          </Router>
    </div>
  );
}

export default App;