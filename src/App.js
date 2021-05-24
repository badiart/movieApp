
import './App.css';
import AddModal from './AddModal';
import MoviesList from './MoviesList';
import RatingSearch from './RatingSearch';
import React from 'react-bootstrap';
import {useState}from 'react'

  
function App() {
  let addM=(newmovie)=>{
    setmovies([...movies,newmovie])

  }
const [movies, setmovies] = useState([
  {
    title: "Game of thrones",
    description: "Genre : Fantasy",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61r-vt0bLZL._AC_SX522_.jpg",
    rate: "3",
  },
  {
    title: "Breaking bad",
    description:
      "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.",
    posterUrl:
      "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
    rate: "4",
  },
  {
    title: "hunter x hunter",
    description:
      "Gon décide à l âge de 12 ans de partir pour devenir un Hunter.",
    posterUrl:
      "https://fr.web.img5.acsta.net/pictures/19/08/01/09/52/4803203.jpg",
    rate: "5",
  },

])
  return (
    <div className="App">
      <header>
    <AddModal addM={addM}/>
    <MoviesList movies={movies}/>
    <RatingSearch />
    </header>
    </div>
  );
}

export default App;
