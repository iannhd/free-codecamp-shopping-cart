import {useState, useEffect} from 'react'
import { CartState } from "../context/Context"
import { ListGroup, Button, Row, Col, ListGroupItem } from "react-bootstrap"
import Rating from './Rating'

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
                        <ListGroupItem>
                            <Row>
                                <Col md={2}>
                                    <span>{prod.name}</span>
                                </Col>
                                <Col md={2}>
                                    <span>Rp {prod.price}</span>
                                </Col>
                                <Col md={2}>
                                    <Rating rating={prod.rating}/>
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