
import './App.css';
import AddModal from './AddModal';
import MoviesList from './MoviesList';
import RatingSearch from './RatingSearch';
import React from 'react-bootstrap';
import {useState}from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import description from './description';
  import Button from 'react'

function Home() {
  let addM=(newmovie)=>{
    setmovies([...movies,newmovie])

  }
const [movies, setmovies] = useState([
  {
    title: "Frozen",
    description: "Genre : Disney",
    posterUrl: "https://api.time.com/wp-content/uploads/2014/02/screen-shot-2013-10-11-at-2-45-25-pm.png",
    rate: "3",
    trailerlink: "https://youtu.be/TbQm5doF_Uc",
  },
  {
    title: "Frosen 2",
    description:"Genre:Disney",
    posterUrl:"https://lumiere-a.akamaihd.net/v1/images/image_bf2c13ad.jpeg?region=0%2C0%2C540%2C810",
    rate: "4",
    trailerlink:"https://youtu.be/eSLe4HuKuK0",
  },
  {
    title: "hunter x hunter",
    description:
      "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
    posterUrl: "https://imgr.cineserie.com/2011/10/1824542.jpg?imgeng=/f_jpg/cmpr_0/w_1000/h_1426/m_cropbox&ver=1",
    rate: "5",
    trailerlink:"https://youtu.be/QhiwGdMgUlo",
  },

])
  return (
    
    <div className="App">
      <header>
      <AddModal addM={addM}/>
    <MoviesList movies={movies}/>

    </header>
    </div>
  );
}
export default Home;
