import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketValue } from './reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispach] = useStateValue();

    return (
        <div className="Subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtaotal_gift">
                            <input type="checkbox" /> This order
                            contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketValue(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button onClick={e => history.push("/payments")} className="checkoutButton">Proceed to checkout</button>
        </div>
    )
}
export default Subtotal