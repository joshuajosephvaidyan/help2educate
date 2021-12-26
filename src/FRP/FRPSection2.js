import { Button, Card, Row, Col, Container } from "react-bootstrap";
import image from "../Assets/pencils.png";

const FRPSection2 = () => {
    return (
        <div>
            <Container fluid="xxl" className="my-5" style={{ backgroundColor: '#FFF'}}>
            <Row xs={1} md={3} className="">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card className="mt-3">
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>Pencil</Card.Title>
                                <Button variant="warning">Know More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </Container>
        </div>
    );
}

export default FRPSection2;