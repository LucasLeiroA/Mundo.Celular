import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import { createBuyOrder } from "../../Services/firestore";
import './CheckoutForm.css';
function CheckoutForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();
  useContext(cartContext);
  const { cart, getTotalPriceInCart , clear } = useContext(cartContext);

  function handleCheckout(event) {
    event.preventDefault();
   
    const orderData = {
      buyer: dataForm,
      items: cart,
      date: new Date(),
      total: getTotalPriceInCart(),
    };
    createBuyOrder(orderData).then((orderid) => {
      navigate(`/checkout/${orderid}`);
    });
  }

  function inputChangeHandler(event) {
    let inputName = event.target.name;
    let value = event.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }

  return (

<div className="contene">
  <h2 className="title-form">Datos de Compra</h2>
<div className="fr-container">
      <form  onSubmit={handleCheckout}>
        <div className="fr-item">
          <label htmlFor="name">Nombre</label>
          <input
            value={dataForm.name}
            onChange={inputChangeHandler}
            name="name"
            type="text" 
            placeholder="Nombre"
            required
          />
        </div>

        <div className="fr-item">
          <label htmlFor="telefono">Telefono</label>
          <input
            value={dataForm.phone}
            onChange={inputChangeHandler}
            name="phone"
            type="text"
            placeholder="Telefono"
            required
          />
        </div>

        <div className="fr-item">
          <label htmlFor="email">Email</label>
          <input
            value={dataForm.email}
            onChange={inputChangeHandler}
            name="email"
            type="text"
            placeholder="Correo"
            required
          />
        </div>
        <div className="total-precio">
          <h3>Total:</h3>
          <h3 >{getTotalPriceInCart()}</h3>
        </div>
        <button onClick={()=>clear()} className="fr-item" type="submit">Finalizar Compra</button>
      </form>
    </div>
</div>

  );
}

export default CheckoutForm;