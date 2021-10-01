import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = (props) => {
    console.log(props.product)
    const { name, img, price, seller, stock } = props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product-containers">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-body">
                <h3 className="product-name">{name}</h3>
                <p><small> by:{seller}</small></p>
                <p><small>Stoke:{stock}</small></p>
                <h4>Price{price}$</h4>
                <button onClick={() => props.handleAddTooCard(props.product)} className="add-to-cart">{element}Add To cart</button>
            </div>

        </div>
    );
};

export default Product;