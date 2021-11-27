import React, { useRef } from 'react';

const AddService = () => {
    const nameRef=useRef()
    const descriptionRef=useRef()
    const urlRef=useRef()
    const priceRef=useRef()
    const handleAddService=(e)=>{
        e.preventDefault()
        const name=nameRef.current.value
        const description=descriptionRef.current.value
        const img=urlRef.current.value
        const price=priceRef.current.value
        const newUser={name,description,img,price}

        fetch('https://arcane-savannah-53460.herokuapp.com/food',{
            method:'post',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>window.location.href='/home')
    }
    return (
        <form onSubmit={handleAddService} className='text-center my-5'>
            <input ref={nameRef} className='w-25' placeholder='name' required></input>
            <br/>
            <br/>
            <input ref={descriptionRef} style={{height:'10rem'}} className='w-25' placeholder='description' required></input>
            <br/>
            <br/>
            <input ref={urlRef} className='w-25' placeholder='image url' required></input>
            <br/>
            <br/>
            <input ref={priceRef} className='w-25' placeholder='price' required></input>
            <br/>
            <br/>
            <input type='submit'></input>
        </form>
    );
};

export default AddService;