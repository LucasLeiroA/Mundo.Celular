import React from 'react'
import {useContext} from "react";    
import {cartContext} from "../../Context/CartContext" ;
import CartList from './CartList';
import './CartContainer.css';
import {createBuyOrder} from "../../Services/firestore";
import {useNavigate,Link} from "react-router-dom";
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
      <div>
        <div className='total'>
        <h1>Total : ${getTotalPriceInCart()} </h1>
        </div>
        <div className='Limpiar'>
          <button onClick={()=>clear()} className='btnLimpiar'>Limpiar Carrito 🗑️</button>
          <button onClick={()=>handleCheckout()}>Finalizar Compra</button>
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