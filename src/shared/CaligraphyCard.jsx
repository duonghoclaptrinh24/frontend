import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom'

import "./caligraphy-card.css";

const CaligraphyCard = ({caligraphy}) => {

  const { id, title, city, photo, price, featured, avrRating, reviews } = caligraphy 

  return <div className="caligraphy__card">
    <Card>
      <div className="caligraphy__img">
           <img src={photo} alt="caligraphy-img"/>
           <span>Featured</span>
      </div>
    </Card>

    <CardBody>
        <div className="card__top d-flex align-items-center justify-content-between">
          <span className="caligraphy__location d-flex align-items-center gap-1">
             <i class="ri-map-pin-line"></i> {city}
          </span>
          <span className="caligraphy__rating d-flex align-items-center gap-1">
             <i class="ri-star-fill"></i> {avrRating} 
             <span>({reviews.lenght})</span>
          </span>
        </div>
        <h5 className="caligraphy__title">
          <Link to={`/caligraphy/${id}`}>{title}</Link>
        </h5>
        <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>${price} <span>/per person</span></h5>

            <button className="btn booking__btn">
                  <Link to={`/caligraphy/${id}`}>Book Now</Link>
            </button>
        </div>
    </CardBody>
  </div>;
}; 

export default CaligraphyCard;