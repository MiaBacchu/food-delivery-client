import React, { useEffect, useRef, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../contex-api/useAuth';

const PlaceOrder = () => {
    const userNameRef=useRef();
    const emailRef=useRef();
    const foodNameRef=useRef();
    const addressRef=useRef();
    const priceRef=useRef();
    const {user}=useAuth()
    const [food,setFood]=useState({})
    const { serviceId } = useParams();
    useEffect(()=>{
        fetch(`https://arcane-savannah-53460.herokuapp.com/food/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setFood(data))      
      },[serviceId])
      const handlePlaceOrder=(e)=>{
        e.preventDefault()
          const userName=userNameRef.current.value
          const emailName=emailRef.current.value
          const foodName=foodNameRef.current.value
          const addressName=addressRef.current.value
          const priceName=priceRef.current.value
          const recordedUser={userName,emailName,foodName,addressName,priceName,status:"pending"}

          fetch(`https://arcane-savannah-53460.herokuapp.com/user`,{
            method:'post',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(recordedUser)
        })
        .then(res=>res.json())
        .then(data=>window.location.href='/myOrder')  
  }
    return (
        <div className="d-flex align-items-center justify-content-around my-5">
            <div>
          <Col key={food.price}>
              <Card className='my-3'>
              <Card.Img style={{height:'15rem'}} variant="top" src={food.img} />
              <Card.Body>
              <Card.Title>{food.name}</Card.Title>
              <Card.Text>
                  {food.description}
              </Card.Text>
              <Card.Text className="fs-1">
                  Price : {food.price}
              </Card.Text>
              </Card.Body>
          </Card>
              </Col>
        </div>
        <form onSubmit={handlePlaceOrder} className="w-25">
            <input ref={userNameRef}  defaultValue={user.displayName} readOnly className="w-100"></input>
            <br/>
            <br/>
            <input ref={emailRef} defaultValue={user.email} readOnly className="w-100"></input>
            <br/>
            <br/>
            <input ref={foodNameRef} defaultValue={food.name} readOnly className="w-100"></input>
            <br/>
            <br/>
            <input ref={addressRef} placeholder="address" className="w-100" required></input>
            <br/>
            <br/>
            <input ref={priceRef} defaultValue={food.price} readOnly className="w-100"></input>
            <br/>
            <br/>
            <button className="w-100 bg-primary">submit</button>
        </form>
        </div>
    );
};

export default PlaceOrder;