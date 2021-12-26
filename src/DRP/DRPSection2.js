import React from 'react'
import {Container, Form, Col, Button} from 'react-bootstrap'
function DRPSection2() {
    return (
        <div>
            <Container fluid="xxl" style={{backgroundColor: '#FFF'}}>
          

            {/* <div className="d-flex flex-row justify-content-center">
                <div><img src={imag} className='img-fluid my-2'/></div>
            </div> */}

            <Col className="py-5 px-md-5 my-3">
                    <Form.Floating className="my-2">    
                        <Form.Control
                        id="DRPDonorName"
                        type="Name"
                        placeholder="Name"
                        />
                        <label htmlFor="floatingInputCustom" style={{color: 'darkgrey',}}>Donor's Name</label>
                    </Form.Floating>

                    <Form.Floating className="my-2">    
                        <Form.Control
                        id="DRPCommName"
                        type="Name"
                        placeholder="Name"
                        />
                        <label htmlFor="floatingInputCustom" style={{color: 'darkgrey',}}>Commodity's Name (E.g Pencils)</label>
                    </Form.Floating>

                    <Form.Floating className="my-2">    
                        <Form.Control
                        id="DRPDonationCategory"
                        type="Name"
                        placeholder="Name"
                        />
                        <label htmlFor="floatingInputCustom" style={{color: 'darkgrey',}}>Category of Donation</label>
                    </Form.Floating>

                    <Form.Floating className="my-2">    
                        <Form.Control
                        id="DRPAddress"
                        type="Name"
                        placeholder="Name"
                        />
                        <label htmlFor="floatingInputCustom" style={{color: 'darkgrey',}}>Address at which donation can be picked</label>
                    </Form.Floating>                    

                    <Form.Floating className="my-2">    
                        <Form.Control
                        id="DRPEmail"
                        type="Name"
                        placeholder="Name"
                        />
                        <label htmlFor="floatingInputCustom" style={{color: 'darkgrey',}}>Email ID of the donor</label>
                    </Form.Floating>
                    
                    <Form.Floating className="my-2">    
                        <Form.Control
                        id="DRPContact"
                        type="Name"
                        placeholder="Name"
                        />
                        <label htmlFor="floatingInputCustom" style={{color: 'darkgrey',}}>Contact Number of the donor (optional)</label>
                    </Form.Floating>

                    <Button className="btn btn-primary mt-2" style={{backgroundColor:'#FFC107',borderColor:'#FFC107',color:'#153A2D',fontWeight:'600',fontSize:'20px'}}>Add a Display Image</Button>
                    <br/>
                    <Button className="btn btn-primary mt-3" style={{width:'100%',backgroundColor:'#FFC107',borderColor:'#FFC107',color:'#153A2D',fontWeight:'600',fontSize:'20px'}}>List Donation</Button>
            </Col>
        </Container> 
        </div>
    )
}

export default DRPSection2
