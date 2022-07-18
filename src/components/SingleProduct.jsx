import {Card, Button} from 'react-bootstrap'
import Rating from './Rating';
import "./style.css"

const SingleProduct = ({prod}) => {
    console.log("prod ==>", prod );
    return(
        <div className="products">
            <Card>
                <Card.Img variant="top" src={prod.image} alt={prod.name}/>
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle style={{paddingBottom: 10}}>
                        <span>Rp. {prod.price.split(".")[0]}</span>
                        {prod.fastDelivery ? (
                            <div>Fast Delivery</div>
                        ) : (
                            <div>4 Days Delivery</div>
                        )}
                        <Rating rating={prod.ratings}/>
                    </Card.Subtitle>
                    <Button variant="danger">
                            Remove From Cart
                    </Button>
                    <Button disabled={!prod.inStock}>
                            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )

}

export default SingleProduct