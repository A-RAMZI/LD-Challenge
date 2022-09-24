import { connect } from "react-redux";
import { decQte, incQte } from "../store/actions";

const CartItem = (props) => {
  

    return ( 
        <div>
            <div className="cart-item-preview" key={props.product.id}>
                <div className="cart-item-image">
                  <img className="product-image" src={props.product.image} alt={props.product.name} /> 
                </div>
                <div className="cat-item-details">
                  <div className="cart-item-name" >  {props.product.name} </div>
                  <div className="cart-item-qte">     
                    <button className="qte-btn" onClick={()=>{props.decQte(props.item.id)}}>-</button>
                    <h4>{props.item.qte}</h4>
                    <button className="qte-btn" onClick={()=>{props.incQte(props.item.id)}}>+</button>
                  </div>
                </div>
                <div className="cart-item-pricing">
                  { props.item.discount === 0 
                    ?
                      <div className='product-price'>
                        £ {(props.product.price*props.item.qte/100).toFixed(2)}
                      </div>
                    :
                      <div>
                        <div className='product-ex-price'>
                          £ {(props.product.price*props.item.qte/100).toFixed(2)}
                        </div>                    
                        <div className='product-price'>
                          £ {((props.product.price*props.item.qte-props.item.discount)/100).toFixed(2)}
                        </div>
                    </div>
                  }

                </div>
                
            </div>
        </div>
     );
}
const mapStateToProps = (state,ownProps) => {
  let cartItem;
  for( let i=0; i< state.cart.length;i++){
    if(state.cart[i].id=== ownProps.product.id){
      cartItem=state.cart[i];
    }
  }
  return {
    item : cartItem,
    amount : state.subTotal,
    cut: state.discount 
  }
}
const mapDispatchToProps = dispatch => {
  return {
    incQte : (produntId) => dispatch(incQte(produntId)),
    decQte : (produntId) => dispatch(decQte(produntId))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)(CartItem)