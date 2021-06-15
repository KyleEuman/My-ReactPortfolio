import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import singlePost from './Pages/singlePost';
import Post from './Pages/Post';
import Project from './Pages/Project';
import NavBar from './Pages/NavBar';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/About' />
        <Route component={singlePost} path='/post/:slug' />
        <Route component={Post} path='/Post' />
        <Route component={Project} path='/Project' />
        </Switch>
        </BrowserRouter>
  );
}

export default App;
