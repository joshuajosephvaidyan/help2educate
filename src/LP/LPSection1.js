import React from 'react'
import { Col, Container, Row, Button,} from 'react-bootstrap'
import imag from '../Assets/friends.png'
import NaviBar from '../NaviBar'

function LPSection1() {
    return (
        <div>
             <Container fluid="xxl" style={{backgroundColor: '#153A2D'}}>
            
                <NaviBar name="HOM"/>
                <Row className='mt-3'>
                    <Col md={7} sm={12} style={{color:'white'}} className="d-flex mt-xs-3">
                       <div className='align-self-center justify-content-sm-center mx-2'> 
                        <h1>Help2Educate</h1>
                        <h4 className='my-3  text-xs-center'>An initative to support the needful and upraise them with the essentials for their education</h4>
                        <Button className="btn btn-primary mt-2" style={{backgroundColor:'#FFC107',borderColor:'#FFC107',color:'#153A2D',fontWeight:'600',fontSize:'20px'}}>Know More</Button>
                       </div>
                    </Col>
                    <Col md={5} sm={12}>
                       <img src={imag} className='img-fluid my-4'/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LPSection1
 