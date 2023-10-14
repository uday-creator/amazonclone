//Initial State of basket

export const initialState = {
    basket: [],
    user: null,
};

//Here we are getting total basket value with the help of reducer 
//since it runs all the time so any changes made in basket
//will also make changes in the grand total



//Here reduce function behaves as a advanced for loop 
//to iterate through basket items and returning the sum 
//of items



//Selector
export const getBasketValue = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


//reducer is something whcih helps with adding 
//and deleting the data from data layer and which runs all the time

const reducer = (state, action) => {
    console.log("action ::>>  ", action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {

                ...state,
                basket: [...state.basket, action.item]
            };

        case "REMOVE_FROM_BASKET":
            //we will find index of the item to be removed
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket];
            if (index >= 0) {

                //splice takes 2 parameters , index , deletecount

                newBasket.splice(index, 1)

            }
            else {
                console.warn("item is not present in basket")
            }

            return {
                ...state,
                basket: newBasket
            };

        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;

    }

}

export default reducer;