import { Button } from 'react-bootstrap';
import React from 'react'
import {Card} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function MoviesCard({movie}) {
    return (
        <div className="fullsc">
<Card style={{ width: '400px',height:'800px' }}>
  <Card.Img  style={{ width: '380px',height:'400px' } }variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title style={{color:'black'}}>{movie.title}</Card.Title>
    <Card.Text style={{color:'black'}}>
      {movie.description}</Card.Text>
    <Card.Text style={{color:'black'}}>{movie.rate}</Card.Text>
    {/* <Card.Text style={{color:'black'}}>{movie.trailerlink}</Card.Text> */}
    <ReactStars
    count={5}
value={movie.rate}
edit={false}
    size={24}
    activeColor="#ffd700"
  />,
  <Link to={location => ({ ...location, pathname: "/description" ,aboutProps:{name:movie.trailerlink,title:movie.title}})} ><Button> read more</Button></Link>
    
  </Card.Body>
</Card>
        </div>
    )
}

export default MoviesCard
