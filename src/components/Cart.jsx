import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delItem} from '../redux/actions/index'
import { NavLink } from 'react-router-dom'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';


const Cart = () => {
    const state = useSelector((state)=> state.addItem)
    const dispatch = useDispatch()
    const [quantity] = useState(1);

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItems) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItems.pk}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItems)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-contect-center">
                        <div className="col-md-4">
                            <img src="../images/DOLO.jpg" alt={cartItems.prodName} height="200px" width="180px"/>
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItems.prodName}</h3>
                            <p className="lead fw-bold">${cartItems.prodPrice}</p>
                            <p className="lead"> {cartItems.prodDescription}</p>
                            <p className="lead"> {cartItems.prodBatch} </p>
                            <p className="lead"> {cartItems.expiryDate} </p>
                            <div className="form-control text-center">{quantity}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed to Checkout</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.lenght === 0 && emptyCart()}
            {state.lenght !== 0 && state.map(cartItems)}
            {state.lenght !== 0 && button()}
        </>
    )
}

export default Cart