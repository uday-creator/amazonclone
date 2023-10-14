import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'


function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();
    console.log("checkout basket:>>>  ", basket)
    return (
        <div className="Checkout">
            <div className="checkout_left">
                <img className="checkout_Ad"
                    src=
                    "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="Ad Banner">
                </img>
                <div>
                    <h3 className='checkout_title'>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your
                        Shopping Basket</h2>

                    {/*for every single product in the basket 
                    we will be mapping through basket array */}

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            rating={item.rating}
                            price={item.price}
                            title={item.title}

                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}
export default Checkout