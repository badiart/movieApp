import { Button } from 'react-bootstrap'
import React from 'react'
import ReactPlayer from 'react-player'
import BrowserRouter, { Link } from 'react-router-dom'
const description = (props) => {
    
    return (
        <div className='hello'>
            <h1>{props.location.aboutProps.title}</h1>


            {/* <iframe title="This is a unique title" style={{width:"420",
    height:"315"}}
    
    // src={Props.movie.trailerlink.aboutProps}
    src="https://youtu.be/Zi4LMpSDccc"
></iframe> */}
<ReactPlayer url={props.location.aboutProps.name} />

<Button><Link to='/'>backhome </Link></Button>
        </div>
    )
}

export default description
