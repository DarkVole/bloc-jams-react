import React, { Component } from 'react';
 import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>

      <nav>


<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>




</nav>
<div class="jumbotron text-center">
  <h1>Bloc Jams </h1>
<div class="btn-group btn-group-justified ">
  <a href="#" class="btn btn-primary"><Link to='/'><strong><font color = "white">Landing</font></strong></Link></a>
  <a href="#" class="btn btn-primary"><Link to='/library'><strong><font color = "white">Library</font></strong></Link></a>
  <a href="#" class="btn btn-primary disabled">About</a>
 
</div>


  </div>


      </header>
      <main>


        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />


        <Route path="/album/:slug" component={Album} />

      </main>
      </div>
    );
  }
}

export default App;
