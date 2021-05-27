
import './App.css';
import AddModal from './AddModal';
import MoviesList from './MoviesList';
import RatingSearch from './RatingSearch';
import React from 'react-bootstrap';
import {useState}from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import description from './description';
import Home from './Home';

  
function App() {
  
  return (
    <BrowserRouter>
    <div >
      <header>
    <Route path='/description' component={description}/>
    <Route exact path='/' component={Home}/> 
    </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
