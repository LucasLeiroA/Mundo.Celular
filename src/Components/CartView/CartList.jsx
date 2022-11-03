import React from 'react'
import './CartList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {cartContext} from "../../Context/CartContext"
import { useContext } from 'react';

function CartList(props) {

   let {  deleteItem  } = useContext(cartContext)

    let { img1,tittle , count , price ,  id } = props;


  


  return (
    <div >
        <div className="contenedor">
            <img className='imgCart' src={img1} alt={tittle} />  
            
            <h1 className='tittle'>{tittle}</h1>
            <div className='contBtns'>

                <h2 className='cantidad'>Cantidad:{count}</h2>    
         
            </div>
            <button key={id} onClick={()=>deleteItem(id)} className='btnEliminar'><FontAwesomeIcon icon={faTrashCan} /> </button>      
            <h2>${price * count}</h2>
         
        </div>
             
  </div>
)
}

export default CartList