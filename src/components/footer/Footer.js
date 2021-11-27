import React from 'react';

const Footer = () => {
    return (
        <div className="d-flex bg-dark text-white justify-content-around p-4">
            <div>
                <h5 className='mb-5 text-primary'>WHO WE ARE</h5>
                <p>About us</p>
                <p>Office & Branches</p>
            </div>
            <div>
                <h5 className='mb-5 text-primary'>OUR SERVICES</h5>
                <p>Customer Care</p>
                <p>Service Care</p>
                </div>
            <div>
                <h5 className='mb-5 text-primary'>CUSTOMER & VISITORS</h5>
                <p>Advance Care</p>
                <p>Billing and Payment</p>
            </div>
        </div>
    );
};

export default Footer;