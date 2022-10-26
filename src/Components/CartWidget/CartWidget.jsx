import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {cartContext} from "../../Context/CartContext"

function CartWidget() {
  //agregar la cantidad de productos que se agregan al carrito

  const {  getTotalItemsInCart } = useContext(cartContext);

 
  

  return (
    <div>
        { 
            getTotalItemsInCart() === 0 ?
            <FontAwesomeIcon icon={faCartShopping}/> :
            <div> <FontAwesomeIcon icon={faCartShopping}/><span>{getTotalItemsInCart()}</span></div>
           
        }
    </div>
       
    

  )
}

export default CartWidget