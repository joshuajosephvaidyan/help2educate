import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function HistoryDonationCard(props) {
    return (
        <div>
            <Card className="py-1 px-3 mx-md-5 mx-sm-2 my-3" style={{ borderRadius: '10px', backgroundColor: 'white', color:'#153A2D' }}> 
               <Row>
                   <Col md={9} sm={9} >
                       <Row><h4>{props.name}</h4></Row>
                       <Row><h6>{props.date}</h6></Row>
                   </Col>

                   <Col md={3} sm={3}>
                      <div className="d-flex flex-column justify-content-center" style={{width: '100%',height: '100%',}}> 
                        <div class= {props.status === 'Donated' ? "" : "btn btn-warning mt-sm-2" } style={{ color: props.status === 'Donated' ? 'darkgrey' : '#153A2D', fontWeight: "bold", fontSize: 'larger', maxWidth : '200px' }}>{props.status}</div>
                      </div> 
                   </Col>
               </Row>
            </Card>
        </div>
    )
}

export default HistoryDonationCard
