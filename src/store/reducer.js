import { ACTION_TYPES } from "./actionTypes";

export const INITIAL_STATE ={
    cart:[],
    subTotal:0,
    discount :0
}
export const PRODUCTS_LIST=
    [
        { "id":0,
          "name":"Whole french bread",
          "rating":1.5,
          "price":100,
          "image":"./img/bread.jpg",
          "description":"Made in paris and destinated to the whole world"
        },
        {"id":1,
          "name":"Fresh Suiss milk",
          "rating":4.5,
          "price":115,
          "image":"./img/milk.jpg",
          "description":"Semi skimmed milk that comes straight from the aples farmers"
        },
        {"id":2,
          "name":"Butter",
          "rating":4.5,
          "price":80,
          "image":"./img/butter.jpg",
          "description":"Producted by us to insure a high quality butter"
        }
    ];

const breadId=0,milkId=1,butterId=2;
const calcSubTotal=(cartList)=>{
    let amount=0;
    console.log(cartList);
    cartList.forEach((item) => { 
        amount+= (PRODUCTS_LIST[item.id].price) *item.qte; 
    });
    return amount;

}
const calcDiscounts=(cartList)=>{
    let tempList=cartList;
    let breadD=0;
    let milkD=0;
    let milkQte=0;
    let butterQte=0;
    let breadQte=0;
    for(let i=0;i<tempList.length;i++){
      switch(tempList[i].id){
        case breadId:  breadQte= tempList[i].qte; break ;
        case milkId:  milkQte=tempList[i].qte; break ;
        case butterId:  butterQte=tempList[i].qte; break ;
        default : break ;
      }
    }
    // for each 2 butter 1 bread at 50%  = bread coast * number of breads with discount * 50% discount 
    // number of breads with discount is the minimum between half butter qte and bread qte
    breadD=PRODUCTS_LIST[breadId].price*parseInt(Math.min((butterQte/2),breadQte))*50/100;

    // 3 milk -> 1 for free = 1/4 of milk is free
    milkD=PRODUCTS_LIST[milkId].price * parseInt(milkQte/4)
    for(let i=0;i<tempList.length;i++){
      switch(tempList[i].id){
        case breadId:  tempList[i].discount= breadD; break ;
        case milkId:  tempList[i].discount= milkD;  break ;
        default : break ;
      }

    }
    return [tempList,(breadD+milkD)];
}

export const reducer=(state=INITIAL_STATE,action)=>{
    let newCart;
    let newSub=0;
    let newCut=0;
    switch(action.type){
        case ACTION_TYPES.ADD_TO_CART: 
            // check if the product already exist 
            console.log("chaine de caractere "+state);
            let exist =false ;
            state.cart.forEach((item) => { 
                if(item["id"]=== action.payload){
                exist=true;
                }
            });
            if(exist){ // if the product already exist 
                alert( PRODUCTS_LIST[action.payload].name +" already exist in the chart");
                return state;
            
            }
            newCart = [...state.cart,{"id":action.payload,"qte":1,"discount":0}];
            newSub=calcSubTotal(newCart);
            newCut=0;
            [newCart,newCut]=calcDiscounts(newCart);
            return{
                cart:newCart,
                subTotal:newSub,
                discount:newCut
            } ;
        case ACTION_TYPES.INC_QTE:
            newCart=state.cart;
            for (let i = 0; i < newCart.length; i++) {
                if(newCart[i].id===action.payload){
                    newCart[i].qte+=1;
                }
            }
            newSub=calcSubTotal(newCart);
            newCut=0;
            [newCart,newCut]=calcDiscounts(newCart);
            return {
                cart:newCart,
                subTotal:newSub,
                discount:newCut
            };

        case ACTION_TYPES.DEC_QTE:
            newCart =state.cart;
            for (let i = 0; i < newCart.length; i++) {
                if(newCart[i].id===action.payload){
                    newCart[i].qte-=1;
                    if(newCart[i].qte===0){
                        newCart.splice(i, 1);
                    }
                }
            }
            newSub=calcSubTotal(newCart);
            newCut=0;
            [newCart,newCut]=calcDiscounts(newCart);
            return {
                cart:newCart,
                subTotal:newSub,
                discount:newCut
            
            };
        default : return state;
    }



}