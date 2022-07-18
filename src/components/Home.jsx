import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct";
import FilterProducts from "./Filters";
import './style.css'


const Home = () => {

    const {state: {products}} = CartState()

    // console.log("state ==>", products);

    return(<div className="home">
        <FilterProducts/>
        <div className="productContainer">
            {
                products.map((prod)=>{
                    return <SingleProduct prod={prod} key={prod.id}/>})
            }
        </div>
    </div>
    )
}

export default Home