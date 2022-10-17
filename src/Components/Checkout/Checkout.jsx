import React from 'react'
import {useParams} from "react-router-dom";
 function Checkout() {

    let { orderid } = useParams();

  return (
    <div>
        <h2>Gracias por tu Compra</h2>
        <h2>{orderid}</h2>
    </div>
    //mostrart un detalle de la cuenta con el id
  )
}

export default Checkout