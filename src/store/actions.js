import {ACTION_TYPES } from './actionTypes'

export const addToCart =(productId) => {
    console.log("Add to cart "+ productId);

  return {
    type: ACTION_TYPES.ADD_TO_CART ,
    payload: productId
  }
}
export const incQte =(productId) => {
    console.log("increase qte"+ productId);

  return {
    type: ACTION_TYPES.INC_QTE ,
    payload: productId
  }
}
export const decQte =(productId) => {
    console.log("decrease qte "+ productId);

  return {
    type: ACTION_TYPES.DEC_QTE,
    payload: productId
  }
}