import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./CardProduct.css";
import {Link} from "react-router-dom";


function Item(props) {
  let { tittle, price, img1, img2, img3,id,cat} = props;



  return (
    <div className="cont">
      <Link to={`/detalle/${id}/${cat}`} className="btnlink">
        
          <Card className="card" style={{ width: "18rem", marginBottom: "20px", marginTop: "20px" }}>
              <Carousel className="carusel">
                <Carousel.Item>
                  <img className="d-block w-auto" src={img1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-auto" src={img2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-auto" src={img3} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
              <Card.Body style={{ height: "25vh" }}>
                <Card.Title className="titulo">{tittle}</Card.Title>
                <Card.Title className="precio">
                  Precio: <span>${price}</span>
                </Card.Title>
              </Card.Body>

            </Card>
        </Link>
       
    </div>
  );
}

export default Item;
