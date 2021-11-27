import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Review = () => {
    return (
        <div>
            <h1 className='text-center'>Our Clients Says</h1>
        <Row className="mx-3">
<Col xs={12} sm={6} md={4} lg={3}>
    <Card className='my-3'>
    <Card.Img style={{height:'15rem'}} variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYiQVI64BOhcmcvgwR3TrgsgxkEyWmQCdz9g&usqp=CAU' />
    <Card.Body>
    <Card.Title>Matty White</Card.Title>
    <Card.Text>
        This is very good service provider food hotel.I am totally satisfied about their services.You can order from this restaurant.
    </Card.Text>
    </Card.Body>
</Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card className='my-3'>
    <Card.Img style={{height:'15rem'}} variant="top" src='https://i.ibb.co/DgqkMXH/images.jpg' />
    <Card.Body>
    <Card.Title>John Carry</Card.Title>
    <Card.Text>
        This is very good service provider food hotel.I am totally satisfied about their services.You can order from this restaurant.
    </Card.Text>
    </Card.Body>
</Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card className='my-3'>
    <Card.Img style={{height:'15rem'}} variant="top" src='https://i.ibb.co/rsGx6Qs/download-1.jpg' />
    <Card.Body>
    <Card.Title>Juliana Brown</Card.Title>
    <Card.Text>
        This is very good service provider food hotel.I am totally satisfied about their services.You can order from this restaurant.
    </Card.Text>
    </Card.Body>
</Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card className='my-3'>
    <Card.Img style={{height:'15rem'}} variant="top" src='https://i.ibb.co/376WvVk/download.jpg' />
    <Card.Body>
    <Card.Title>Pat Cristian</Card.Title>
    <Card.Text>
        This is very good service provider food hotel.I am totally satisfied about their services.You can order from this restaurant.
    </Card.Text>
    </Card.Body>
</Card>
    </Col>
    </Row>
        </div>
    );
};

export default Review;