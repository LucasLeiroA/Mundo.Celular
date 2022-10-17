import React,{useState} from 'react'
import './CartList.css';
import Swal from 'sweetalert2'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {cartContext} from "../../Context/CartContext"
import { useContext } from 'react';
function CartList(props) {

   let {  removeItem } = useContext(cartContext)

    let { img1,tittle , count , price , stock,id } = props;

    const [cantidad, setCantidad] = useState(count);


    function incrementarCount(){
        if (cantidad < stock) {
            setCantidad(cantidad + 1);    
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No hay tanta cantidad en stock',
              })
            
        }
    }

    function decrementarCount(){
        if (cantidad>1) {
            setCantidad(cantidad - 1);
            
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puede ingresar un valor menor a 1',
              })
        }
    }

  


  return (
    <div >
        <div className="contenedor">
            <img className='imgCart' src={img1} alt={tittle} />  
            
            <h1 className='tittle'>{tittle}</h1>
            <div className='contBtns'>
                <button className='btna' onClick={()=>decrementarCount()}>-</button>
                <h2 className='cantidad'>{cantidad}</h2>    
                <button className='btna' onClick={()=>incrementarCount()}>+</button> 
            </div>
            <button key={id} onClick={()=>removeItem(id)} className='btnEliminar'><FontAwesomeIcon icon={faTrashCan} /> </button>      
            <h2>${price * cantidad}</h2>
         
        </div>
             
  </div>
)
}

export default CartList