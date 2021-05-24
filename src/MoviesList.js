import React from 'react'
import MoviesCard from './MoviesCard'
import RatingSearch from './RatingSearch'
import {useState} from 'react'

function MoviesList({movies}) {
    const [text, settexte] = useState('')
    const [rate, setrate] = useState('')
    const filterText=(text)=>{
settexte(text)
    }
    const filterrate=(rate)=>{
        setrate(rate)
            }
    return (
      <div>
          <RatingSearch  filterText={filterText} filterrate={filterrate}/>
            <div className="movie-list">
            
{movies.filter(el=>el.title.toLowerCase().includes(text.toLowerCase())&&(el.rate)>=rate).map(el=><MoviesCard movie={el}/>)}
        </div>
      </div>
    )
}

export default MoviesList
