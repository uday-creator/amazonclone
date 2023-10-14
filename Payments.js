import React, { useEffect } from 'react'
import './payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketValue } from './reducer';
import axios from './axios';


function Payments() {

    const history = useHistory();

    const [{ basket, user }, dipstch] = useStateValue();

    //two hooks to use stripe as an payment options
    const stripe = useStripe();
    const elements = useElements();

    //now for handling errors and disbaling button
    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    //before making the request to stripe about a specific 
    //payment we have to provide the client secret
    const [clientSecret, setClientSecret] = useState(true);
    useEffect(() => {
        //Generate the special cleint secret which allows use to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${getBasketValue(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)   //this clientSecret is the respnse we got ftom index.js post method.

        }
        getClientSecret();


    }, [basket]) //for every change in the basket we have to generate a new cleint secret for new purchase

    console.log("THE SECRET IS >>>> ", clientSecret)

    const handleSubmit = async (e) => {
        //fancy stuff will come here
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation
            setSucceeded(true)
            setProcessing(false)
            setError(null)

            history.replace("/orders")//here we didnt used push because we dont 
            //want user to come back at payments page after they hit back button on their keyboard

        })


    }

    const handleChange = event => {
        //Listen to chnages in the card element
        //and display any errors as the customer types their card details

        //set disable true if the event is empty
        setDisable(event.empty);

        //Show errors if any
        setError(event.error ? event.error.message : "");

    }

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/*deleiery address*/}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery address</h3>

                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>


                </div>

                {/*review  items*/}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review Items for deleivery</h3>
                    </div>
                    <div className='payment_items'>
                        {/*Products in the basket */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}

                            />

                        ))}
                    </div>


                </div>

                {/*Payment method */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        {/*Stripe magic comes here */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment_priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>

                                    )}
                                    decimalScale={2}
                                    value={getBasketValue(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disable || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                                {error && <div>{error}</div>}
                            </div>
                        </form>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Payments