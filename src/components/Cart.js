import { connect } from "react-redux";
import CartItem from "./CartItem";


const Cart = (props) => {
    return (
        <div className="cart container">
            <h3 className="container-title">Cart <i className="fa fa-shopping-cart"></i></h3> <br/><br/>

            {props.cart.map((cartItem)=>(
                <CartItem  product={props.products[cartItem.id]}  key={cartItem.id}></CartItem >
                
                
            ))}
            <div className="cart-amounts">
                <div className="amounts-part">
                <div className="cart-title">Subtotal </div>
                <div className="product-price">£ {(props.amount/100).toFixed(2)}</div>
                
                <div className="cart-title">Discount</div>
                <div className="product-price">£ {(props.cut/100).toFixed(2)}</div>
                
                <div className="cart-title">Total</div>
                <div className="product-price">£ {((props.amount-props.cut)/100).toFixed(2)}</div>
            </div>
            </div>
        </div>

    );
}
 
const mapStateToProps = state => {
    return {
      cart : state.cart,
      amount : state.subTotal,
      cut: state.discount 
    }
}
  
  
  export default connect(
    mapStateToProps,
    null
  )(Cart)