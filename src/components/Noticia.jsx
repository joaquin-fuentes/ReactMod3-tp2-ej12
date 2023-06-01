import { Row, Col, Card, Button} from "react-bootstrap"

const Noticia = () => {
    return (
        <Col sm={3}>
            <Card className="m-2">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Noticia;