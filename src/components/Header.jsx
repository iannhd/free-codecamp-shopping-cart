import { Container, FormControl, Navbar, Dropdown, Badge } from "react-bootstrap"
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Header = () => {

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl style={{width: 600}} 
                    placeholder="Search Products.."
                    className="m-auto"
                    />
                </Navbar.Text>
                <Dropdown alignRight>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaShoppingCart color="white" fontSize="25px"/>
                    <Badge bg="success">{10}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><span style={{padding: "10px"}}>Cart is empty</span></Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}

export default Header