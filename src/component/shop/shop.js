import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/product';
import './shop.css'

const Shop = () => {
    const [products, setproducts] = useState([])
    const [cart, setcart] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    const handleAddTooCard = (product) => {
        const newCart = [...cart, product]
        setcart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product}
                        key={product.key}
                        handleAddTooCard={handleAddTooCard}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;