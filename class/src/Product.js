import react,{Component} from 'react'

class Product extends Component{
    Product_Name='Iphone 13 pro'
    price=700000;
    image1="https://images.meesho.com/images/products/73337950/6ypse_512.jpg"
    image="https://images.meesho.com/images/products/11939912/39639_512.jpg"
    render(){
        return(
            <>
            <h2>Product component</h2>
            <h1>name:{this.Product_Name}</h1>
            
            <h1>Price :{this.price}</h1>
        <img src={this.image}/>
        
        <img src={this.image1}/>
        <img src={this.image1}/>
    

        <hr/>
            </>
        )
    }
}

export default Product;