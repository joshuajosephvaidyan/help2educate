import React from 'react'
import {Container} from 'react-bootstrap'
import NaviBar from '../NaviBar'
import imag from '../Assets/dob.png'

function DRPSection1() {
    return (
        <div>
           <Container fluid="xxl" style={{backgroundColor: '#153A2D'}}>
            
            <NaviBar name="DRP"/>

            <div className="d-flex flex-row justify-content-center">
                <div><img src={imag} className='img-fluid my-2'/></div>
            </div>

            <div className="d-flex flex-row justify-content-center pb-5" style={{color: 'white',fontWeight: '600'}}>
                <h3>
                    <center>
                    Our gratitude knows no bounds.<br/>
                    Thank you.<br/>
                    Please continue by filling some details about your donations.
                    </center>
                </h3>
            </div>
        </Container> 
        </div>
    )
}

export default DRPSection1
