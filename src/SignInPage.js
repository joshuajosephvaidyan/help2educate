import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import imag from './Assets/game.png'
import { Link } from 'react-router-dom'

function SignInPage() {
    return (
        <div>
            <Container fluid="xxl" style={{backgroundColor: '#153A2D',height:'100vh'}}>
                <Row>
                    <Col md={8} sm={12} className="order-xs-2 px-md-5">
                    <div className="d-flex align-items-md-center" style={{height:"100%",width: "100%"}}>
                       <div className="" style={{width:'100%'}}> 
                        <h2 className="my-3" style={{color: 'white'}}>Welcome Back</h2>
                            <Form.Floating className="my-2">    
                                <Form.Control
                                id="SINEmail"
                                type="Email"
                                placeholder="Email"
                                />
                                <label htmlFor="floatingInputCustom" style={{color: 'darkgrey',}}>Email Address</label>
                            </Form.Floating>

                            <Form.Floating className="my-2">    
                                <Form.Control
                                id="SINPassword"
                                type="Password"
                                placeholder="Password"
                                />
                                <label htmlFor="floatingInputCustom" style={{color: 'darkgrey',}}>Password</label>
                            </Form.Floating>

                            <Button className="btn btn-primary mt-2" style={{backgroundColor:'#FFC107',borderColor:'#FFC107',color:'#153A2D',fontWeight:'600',fontSize:'20px',width: '100%'}}>Sign In</Button>
                            <Link to = "/" style={{textDecoration:"none",color:'inherit',height:'100%',width:'100%'}}><Button className="btn btn-primary mt-2" style={{backgroundColor:'#FFC107',borderColor:'#FFC107',color:'#153A2D',fontWeight:'600',fontSize:'20px',width: '100%'}}>Home</Button></Link> 
                            
                            <center>
                            <i className="" style={{fontWeight: "600",color: '#FFF',textAlign:"center"}}><br/>
                            <Link to = '/SignupPage' style={{textDecoration: 'none',color: '#FFF'}}>Don't have an account ? Sign Up.</Link>
                            </i>
                            </center>
                        </div>
                    </div>
                    </Col>

                    <Col md={4} sm={12} className='' style={{backgroundColor: '#153A2D'}}>
                      <div className="d-flex align-items-center" style={{height:"100vh"}}>
                        <div><img src={imag} className="img-fluid" alt="Gaming man"/></div>
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignInPage
