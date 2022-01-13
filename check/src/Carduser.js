import React from 'react'
import { Card } from 'react-bootstrap'
function Cardd({el}) {
    return (
        < >
        <Card style={{  display: 'flex' }}>
  <Card.Body className='bord'>
    <Card.Title>{el.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{el.username}</Card.Subtitle>
    <Card.Text> Email : {el.email} </Card.Text>
    <Card.Text> Phone : {el.phone}</Card.Text>
    
  </Card.Body>
</Card>
        </>
    )
}

export default Cardd