import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className="product">
                <div>
                    <img src={img} alt=""/>

                </div>
                <div>
                    <h4>{name}</h4>
                    <br/>
                        <p>by:{seller}</p>
                        <p>${price}</p>
                        <br/>
                <p>Only{stock}left in stock.Order soon!</p>
                <button 
                className="main-button"
                onClick={()=>props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
                </div>

           
        </div>
    );
};

export default Product;