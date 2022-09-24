import Product from './Product';
const Products = ({products}) => {
    return ( 
        <div className="products container" >
            <h3 className='container-title'>Products</h3>
            {products.map((product)=>(
                <Product item={product} key={product.id}></Product>  
                
            ))}
        </div>

    );
}
 
export default Products;