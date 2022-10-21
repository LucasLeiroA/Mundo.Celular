import React from 'react'
import {useParams , Link} from "react-router-dom";
 function Checkout() {

    let { orderid } = useParams();

  return (
    <div>
        <h2>Gracias por tu Compra</h2>
        <h2>{orderid}</h2>
        <Link to="/"><button>Volver al inicio</button></Link>
        
    </div>
    //mostrart un DETALLE DE LA ORDEN AUTOGENERADA
  )
}

export default Checkout