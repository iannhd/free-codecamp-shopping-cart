import { Container, FormControl, Navbar, Dropdown, Badge, Button } from "react-bootstrap"
import { CartState } from "../context/Context"
import {FaShoppingCart} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
import {Link} from 'react-router-dom'

import "./style.css"

const Header = () => {

    const {state: {cart},
            dispatch } 
    = CartState()

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl 
                    // style={{width: 600}} 
                    placeholder="Search Products.."
                    className="m-auto"
                    />
                </Navbar.Text>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaShoppingCart color="white" fontSize="25px"/>
                    <Badge bg="success">{cart.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu 
                className="dropdown-menu-right"
                style={{minWidth: "370px"}}>
                        {cart.length>0 ?(
                        <>
                        {cart.map((prod)=>(
                
                            <span className="cartItem" key={prod.id}>
                                <img
                                    src={prod.image}
                                    className="cartItemImg"
                                    alt={prod.name}
                                />
                                <div className="cartItemDetail">
                                    <span>{prod.name}</span>
                                    <span>Rp {prod.price.split(".")[0]}</span>
                                </div>
                                <AiFillDelete
                                    fontSize="20px"
                                    style={{cursor: "pointer"}}
                                    onClick={()=>{
                                        dispatch({
                                            type:"REMOVE_FROM_CART",
                                            payload:prod
                                        })
                                    }}
                                    />   
                            </span>
                            ))}
                            <Link to="/cart">
                                    <Button style={{width:"95%", margin:"0 10px"}}>
                                        Go To Cart
                                    </Button>
                            </Link>
                        </>
                        )
                        :
                        (<span style={{padding: "10px"}}>
                        Cart is empty
                        </span>)}
                </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}

export default Header