import React from 'react'
import {useContext} from "react";    
import {cartContext} from "../../Context/CartContext" ;
import CartList from './CartList';
import './CartContainer.css';
import {createBuyOrder} from "../../Services/firestore";
import {useNavigate} from "react-router-dom";
function CartContainer() {

  const {cart, clear , getTotalPriceInCart } = useContext(cartContext);
  const navigate = useNavigate();

  

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
  function handleCheckout(){
    const orderData={
        buyer:{
            name:"lucas",
            phone:"112233",
            email:"lucasleiroa@gmail.com"
        },
        items: cart,
        total:getTotalPriceInCart(),
    };
    createBuyOrder(orderData).then( orderid => {
      navigate(`/checkout/${orderid}`)
    });
    
}

  return (
    <div>{
     
      MostrarCart()
        
      }
      {cart.length>=1?
      <div className='Limpiar'>
        <button onClick={()=>clear()} className='btnLimpiar'>Limpiar Carrito 🗑️</button>
        <button onClick={()=>handleCheckout()}>Finalizar Compra</button>
      </div>
      :<div className='cartVacio'>No hay productos en el carrito 🛒!!</div>}
      </div>
  )
}

export default CartContainer