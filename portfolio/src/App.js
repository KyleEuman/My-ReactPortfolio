import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './component/Home.js';
import About from './component/About.js';
import singlePost from './component/singlePost.js';
import Post from './component/Post.js';
import Project from './component/Project.js';
import NavBar from './component/NavBar.js';

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
