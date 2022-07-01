import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import DATA from '../api/Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';
var product_list = []
const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [productList, setProductList] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const proid = useParams();
    
  const handleDecrement = () => {
      if(quantity > 1){
      setQuantity(prevCount => prevCount - 1);
      }
  }
  const handleIncrement = () => {
    if(quantity < 10){
    setQuantity(prevCount => prevCount + 1);
     }
  }
  
  
  useEffect(() => {
      fetch("http://localhost:8001/api/product/"+parseInt(proid.id))
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setProductList(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    
    const product1 = productList
    const proDetail = productList

    const dispatch = useDispatch()

    const handleCart = (product1) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product1))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product1))
            setCartBtn("Add to Cart") 
        }
        
    }

    
    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justift-contect-center mx-auto product">
                    <img src="../images/DOLO.jpg"  alt={proDetail.prodName} height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-contect-center">
                    <h1 className="display-5 fw-bold">{proDetail.prodName}</h1>
                    <hr />
                    <h2 className="my-4">${proDetail.prodPrice}</h2>
                    <p className="lead">{proDetail.prodDescription}</p>
                    <p className="lead"> {proDetail.prodBatch} </p>
                    <p className="lead"> {proDetail.expiryDate} </p>
                    <div className="input-group">
                        <button type="button" onClick={handleDecrement} className="input-group-text">-</button>
                        <div className="form-control text-center">{quantity}</div>
                        <button type="button" onClick={handleIncrement} className="input-group-text">+</button>
                    </div>
                    <button onClick={()=>handleCart(proDetail)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail
