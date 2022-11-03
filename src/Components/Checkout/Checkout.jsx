import React from 'react'
import {useParams , Link} from "react-router-dom";
import './Checkout.css';

 function Checkout() {

    let { orderid } = useParams();

  return (
    <div className='container-num-order'>
        <h2 className='h2-1'>Gracias por tu Compra</h2>
        <h2 className='h2-2'>Tu codigo de orden es: <span className='N-order'>{orderid}</span> </h2>
        <Link className='btn-inicio' to="/"><button>Volver al inicio</button></Link>   
    </div>
    //mostrart un DETALLE DE LA ORDEN AUTOGENERADA
  )
}

export default Checkout