import React from 'react'
import {Button,Modal} from 'react-bootstrap'
import {useState} from 'react'
        function AddModal({addM}) {
          const[newmovie,setnewmovie]=useState([]);
          const handleChange=(e)=>{
setnewmovie({...newmovie,[e.target.name]:e.target.value})
          }
            const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
          
            return (
              <>
                <Button variant="primary" onClick={handleShow}>
                  Add a film
                </Button>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>add your film</Modal.Title>
                  </Modal.Header>
                  <Modal.Body style={{ display:'flex' ,flexDirection:'column'}} > 
                      Title:<input name='title' onChange={handleChange}></input>
      
                      Description:<input name='description'onChange={handleChange}></input>
                      URL:<input name='url'onChange={handleChange}></input>
                      rating:<input name='rate'onChange={handleChange}></input>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={()=> addM(newmovie)}> Save Changes </Button>
                          
                  </Modal.Footer>
                </Modal>
              </>
            );
          }
          
        
    

export default AddModal
