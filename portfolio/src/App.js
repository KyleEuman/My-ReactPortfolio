import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './component/Home';
import About from './component/About.';
import singlePost from './component/singlePost.';
import Post from './component/Post.';
import Project from './component/Project.';
import NavBar from './component/NavBar.';

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
