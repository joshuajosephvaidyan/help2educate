import { Container } from 'react-bootstrap';
import NaviBar from '../NaviBar';
import imag from "../Assets/find.png";

const FRPSection1 = () => {
    return (

        <Container fluid="xxl" style={{ backgroundColor: '#153A2D'}}>

            <NaviBar name ="FRP" />

            <div className="d-flex flex-row justify-content-center">
                <div><img src={imag} alt='image' className='img-fluid my-2'/></div>
            </div>

            <div className="d-flex flex-row justify-content-center pb-5" style={{ color: 'white', fontWeight: '600' }}>
                <h3>
                    <center>
                        Find donated resources here.
                    </center>
                </h3>
            </div>
        </Container>
    );
}

export default FRPSection1;