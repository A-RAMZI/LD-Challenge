import Rating from "./Rating";
import { addToCart } from "../store/actions";
import { connect } from "react-redux";

const Product = (props) => {
    return (
        
        <div className="product-preview" >
            <div className="image-part">
                <img className="product-image" src={props.item.image} alt={props.item.name} />
            </div>
            <div className="description-part">
                <div className="line">
                    <div className="product-name">{props.item.name}</div>
                    <div className="product-rating" >
                        <Rating rate={props.item.rating}></Rating>
                    </div> 
                </div>
                <div className="line">
                    <div className="product-desc">{props.item.description}</div> 
                    <div className="product-price">£{(props.item.price/100).toFixed(2)}</div> 
                </div>
                <div className="line2">
                    <button className="add-product-bttn" onClick={()=>(props.addToCart(props.item.id))}>ADD TO CHART</button>
                </div>

            </div>
        </div>    
    );
}

  
const mapDispatchToProps = dispatch => {
    return {
      addToCart: (produntId) => dispatch(addToCart(produntId))
    }
}
  
export default connect(
    null,
    mapDispatchToProps)(Product)