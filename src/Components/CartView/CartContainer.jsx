import React from 'react'
import {useContext} from "react";    
import {cartContext} from "../../Context/CartContext" ;
import CartList from './CartList';
import './CartContainer.css';
import {Link} from "react-router-dom";
function CartContainer() {

  const {cart, clear , getTotalPriceInCart } = useContext(cartContext);
  

  function MostrarCart(){
      return(
           cart.map((item) =>{
          return (<CartList
            key={item.id}
            id={item.id}
            cat={item.category}
            tittle={item.tittle}
            price={item.price}
            img1={item.img1}
            count={item.count}
            stock={item.stock}
            />)})
     
      )
  }

 


  return (
    <div>{
     
      MostrarCart()
        
      }
      {cart.length>=1?
      <div>
        <div className='total'>
        <h1>Total : ${getTotalPriceInCart()} </h1>
        </div>
        <div className='Limpiar'>
          <button onClick={()=>clear()} className='btnLimpiar'>Limpiar Carrito 🗑️</button>
          <Link to="/checkoutForm"><button>Continuar Compra</button></Link>
        </div>
      </div>
      :<div >
        <h1 className='cartVacio' >No hay productos en el carrito 🛒!!</h1>
        <Link to="/"><button className='btnVolver'>Volver al Inicio</button></Link>  
      </div>}
      </div>
  )
}

export default CartContainer