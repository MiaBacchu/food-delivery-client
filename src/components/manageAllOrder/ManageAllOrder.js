import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageAllOrder = () => {
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch(`https://arcane-savannah-53460.herokuapp.com/user`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
      },[])
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
      const handleApprove=(id)=>{
        fetch(`https://arcane-savannah-53460.herokuapp.com/user/${id}`,{
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>window.location.reload())
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
            <button style={{display: order.status==="pending" ? 'block' : 'none',backgroundColor:'blue',color:'white'}} onClick={()=>handleApprove(order._id)}>approve</button>
            <button className='bg-danger' onClick={()=>handleDelete(order._id)}>{order.status==="pending"  ? 'cancel': 'delete'}</button>
        </ul>
           )}
        </div>
    );
};

export default ManageAllOrder;