import React, { useEffect, useState } from 'react';
import useAuth from '../../contex-api/useAuth';

const MyOrder = () => {
    const {user}=useAuth()
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        const url= `https://arcane-savannah-53460.herokuapp.com/user/${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
      },[user])
      const handleDelete=(id)=>{
          const proceed=window.confirm('are you sure?')
          if (proceed) {
            fetch(`https://arcane-savannah-53460.herokuapp.com/user/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            const remainingUser= orders.filter(order=>order._id!==id)
            setOrders(remainingUser)
          }
      }
    return (
        <div>
           {orders.map(order=>
            <ul className="d-flex justify-content-around my-5" key={order._id}>
            <p>{order.userName}</p>
            <p>{order.emailName}</p>
            <p>{order.foodName}</p>
            <p>{order.addressName}</p>
            <p>{order.priceName}</p>
            <p style={{backgroundColor: order.status==="pending" ? 'red' : 'green',color:'white',padding:'.3rem',borderRadius:'.2rem'}}>{order.status}</p>
            <button className='bg-danger' onClick={()=>handleDelete(order._id)}>{order.status==="pending"  ? 'cancel': 'delete'}</button>
        </ul>
           )}
        </div>
    );
};

export default MyOrder;