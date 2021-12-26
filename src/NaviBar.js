import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NaviBar(props) {
    return (
            
                <Navbar className="d-flex justify-content-md-between" expand="sm">
                    <div>
                        <Navbar.Brand href="" style={{color:'white',fontWeight:'700'}}>Help2Educate
                        </Navbar.Brand>
                    </div>  

                    <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
                        <Navbar.Collapse>
                        <Nav className="me-auto">
                           <Nav.Link href="" style={{ color: (props.name==="HOM")?'orange':'white' ,fontWeight:'600'}}><Link style={{textDecoration:'none', color: (props.name==="HOM")?'orange':'white' }} to ="/">Home</Link></Nav.Link> &nbsp;&nbsp;
                           <Nav.Link href="" style={{ color: (props.name==="DRP")?'orange':'white' ,fontWeight:'600'}}><Link style={{textDecoration:'none', color: (props.name==="DRP")?'orange':'white' }} to ="/DRP">Donate</Link></Nav.Link> &nbsp;&nbsp;
                           <Nav.Link href="" style={{ color: (props.name==="FRP")?'orange':'white' ,fontWeight:'600'}}><Link style={{textDecoration:'none', color: (props.name==="FRP")?'orange':'white' }} to ="/FRP">Recieve</Link></Nav.Link> &nbsp;&nbsp;
                           <Nav.Link href="">
                               <Link to ='/SigninPage' style={{color: '#153A2D',textDecoration: 'none'}}>
                                   <b className='btn btn-primary' style={{color:'#153A2D',fontWeight:'600',backgroundColor:'#FFC107',borderColor:'#FFC107',lineHeight:'16px'}}>Login</b>
                               </Link>
                           </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </div>  
                </Navbar>
        
    )
}

export default NaviBar
