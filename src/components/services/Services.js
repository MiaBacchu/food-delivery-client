import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const Services = () => {
    const [services]=useServices()
    return (
        <Row className="mx-3">
            {services.map(service=>
    <Col xs={12} sm={6} md={4} lg={3} 
    key={service.price}>
        <Card className='my-3'>
        <Card.Img style={{height:'15rem'}} variant="top" src={service.img} />
        <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>
            {service.description}
        </Card.Text>
        <Card.Text className="fs-1">
            Price : {service.price}
        </Card.Text>
            <Link to={`/placeOrder/${service._id}`}><Button variant="primary"  className='text-white text-decoration-none'>Place Order</Button></Link>
        </Card.Body>
    </Card>
        </Col>)}
        </Row>
    );
};

export default Services;