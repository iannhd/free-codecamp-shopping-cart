import { createContext, useContext, useReducer } from "react"
import {faker} from '@faker-js/faker'
import { cartReducers, productReducer } from "./Reducers"
const Cart = createContext()
faker.seed(99)
const Context = ({children}) => {

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.business(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
    }))
    const [state, dispatch] = useReducer(cartReducers, {
        products:products,
        cart:[]
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        search: ""
    })
    return <Cart.Provider value={{state, productState, productDispatch, dispatch}}>{children}</Cart.Provider>
}

export default Context

export const CartState = () => {
    return useContext(Cart)
}