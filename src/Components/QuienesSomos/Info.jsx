import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./info.css";
function Info() {
  return (
    <div className="cont-3">
      <div className="cont-2">
        <h1>Mundo Celular!</h1>
        <p className="pa1">
          Es un Ecomerce que se esta empezando a imponer en el mundo de las
          redes sociales y el internet.
        </p>
        <p className="pa2">
          A través de contratos con los principales fabricantes y distribuidores
          del sector, Mundo Celular ofrece a sus clientes la más amplia gama de
          accesorios y repuestos para smartphones y todo tipo de celulares
          móviles, abarcando servicios para todas las marcas, tales como:
          Samsung, Apple, LG, Motorola, Sony, Microsoft, Huawei, Sky Devices,
          Nokia, entre otros.
        </p>
      </div>

      <ol className="redes-sociales">
        <li className="red-sol">
          <FontAwesomeIcon icon={faFacebook} />
        </li>
        <li className="red-sol">
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li className="red-sol">
          <FontAwesomeIcon icon={faInstagram} Size="20px"/>
        </li>
      </ol>
    </div>
  );
}

export default Info;
