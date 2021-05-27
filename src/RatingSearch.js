import React from 'react'


import ReactStars from "react-rating-stars-component";
import MoviesCard from './MoviesCard';

function RatingSearch({filterText,filterrate}) {
    return (
        <div>
<input onChange = {(e)=>filterText(e.target.value)}/>
<ReactStars
    count={5}
// value={2}
// edit={false}
onChange={(newrating)=>filterrate(newrating)}
    size={24}
    activeColor="#ffd700"
  />,
  
        </div>
    )
}

export default RatingSearch
