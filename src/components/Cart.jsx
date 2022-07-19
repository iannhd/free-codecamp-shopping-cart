import {useState, useEffect} from 'react'
import { CartState } from "../context/Context"
import { ListGroup, Button, Row, Col, ListGroupItem, FormControl, Image } from "react-bootstrap"
import Rating from './Rating'
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {

    const {state: {cart},
    dispatch}
    = CartState()

    const [total, setTotal] = useState()


    useEffect(()=>{
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)* curr.qty, 0))
    },[cart])

    return(<div className="home">
        <div className="productContainer">
            <ListGroup>
                {
                    cart.map((prod)=> {
                        return(
                        <ListGroupItem key={prod.id}>
                            <Row>
                                <Col md={2}>
                                    <Image src={prod.image} alt={prod.name} fluid rounded/>
                                </Col>
                                <Col md={2}>
                                    <span>{prod.name}</span>
                                </Col>
                                <Col md={2}>
                                    <span>Rp {prod.price}</span>
                                </Col>
                                <Col md={2}>
                                    <Rating rating={prod.ratings}/>
                                </Col>
                                <Col md={2}>
                                    <FormControl 
                                    as="select" 
                                    onChange={(e)=>{
                                        dispatch({
                                            type: "CHANGE_CART_QTY",
                                            payload: {
                                                id: prod.id,
                                                qty:e.target.value
                                            }
                                        })
                                    }}
                                    value={prod.qty}>
                                    {[...Array(prod.inStock).keys()].map((x)=>{
                                        return(
                                        <option key={x + 1}>{x + 1}</option>
                                        )
                                    })}
                                    </FormControl>
                                </Col>
                                <Col md={2}>
                                <Button onClick={()=>{
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: prod
                                    })}} variant="light" >
                                    <AiFillDelete/>
                                </Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        )})
                }
            </ListGroup>
        </div>
        <div className="filters summary">
            <span className="title">
                Subtotal ({cart.length}) items
            </span>
            <span style={{fontWeight: 700, fontSize: 20}}>Total: Rp {total} </span>
            <Button type="button" disabled={cart.length===0}>
                Proceed to Checkout
            </Button>
        </div>
    </div>
    )
}

export default Cart