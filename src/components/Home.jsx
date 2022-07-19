import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct";
import FilterProducts from "./Filters";
import './style.css'


const Home = () => {

    const {
    state: {products},
    productState: {
        byStock, 
        byFastDelivery, 
        sort, 
        byRating,
        searchQuery
    }, productDispatch
    } = CartState()
    
    const transformProducts = () => {
        let sortedProducts = products
        console.log(products, "ini products");
        if(sort){
            sortedProducts = sortedProducts.sort((a,b) => 
            sort === "lowToHigh" ? a.price - b.price : b.price - a.price 
            ) 
        }

        if(!byStock){
            sortedProducts = sortedProducts.filter((prod)=> prod.inStock)
        }

        if(byFastDelivery){
            sortedProducts = sortedProducts.filter((prod)=> prod.fastDelivery)
        }

        if(byRating){
            sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating)
        }

        if(searchQuery){
            console.log(searchQuery, "ini search");
            sortedProducts = sortedProducts.filter((prod)=>
                prod.name.toLowerCase().includes(searchQuery)
            )
        }
        return sortedProducts
    }

        console.log(transformProducts);

    return(
    <div className="home">
        <FilterProducts/>
        <div className="productContainer">
            {
                transformProducts().map((prod)=>{
                    return <SingleProduct prod={prod} key={prod.id}/>})
            }
        </div>
    </div>
    )
}

export default Home