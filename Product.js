import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({ id, title, price, image, rating }) {
    //Now we will be adding the products in the data layer*/ }
    //Here dispatch will be acting as a gun used to put data 
    //inside the data layer

    //Here basket will provide the intial state of basket
    //before adding new item in it.

    const [{ basket }, dispatch] = useStateValue();


    const addToBasket = () => {
        //Here dispatch is passing as action in reducer.js
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating,
            },
        });

    };


    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>

            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;