import React from 'react'
import {Container} from 'react-bootstrap'
import HistoryDonationCard from './HistoryDonationCard'

function DRPSection3() {
    return (
        <div>
          <Container fluid="xxl" style={{backgroundColor: '#153A2D' , height:'100vh'}}>
             <div className="px-md-5 py-5 mt-3"> 
               <h1 style={{color:"white"}} className="mb-3">History of Donations</h1>
             </div>  

             < HistoryDonationCard name="Wooden Tables" date="26-10-2021" status="Donated"/>
             < HistoryDonationCard name="Pencils" date="05-12-2021" status="Mark as Donated"/>
          </Container>
        </div>
    )
}

export default DRPSection3
