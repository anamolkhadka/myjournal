import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import BlogDetails from './BlogDetails';
import Create from './Create';
import Login from './Login';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Signup from './Signup';
import NotFound from './NotFound';


function App() {

  return (
    <BrowserRouter>
        <div className="App">
          <div className="content">
            <Switch>
                <Route exact path='/'>
                  <Login/>
                </Route>
                <Route exact path='/signup'>
                  <Signup/>
                </Route>
                <Route exact path='/home'>
                  <div>
                    <Navbar/>
                    <Home/>
                  </div>
                </Route>
                <Route exact path='/create'>
                  <div>
                    <Navbar/>
                    <Create />
                  </div> 
                </Route>
                <Route exact path='/blogs/:id'>
                  <div>
                    <Navbar/>
                    <BlogDetails />
                  </div>
                </Route>
                <Route path='*'>
                  <NotFound/>
                </Route>
            </Switch>
          </div>
        </div>

    </BrowserRouter>
    
  );
}

export default App;
